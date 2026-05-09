"use client";

import { useEffect, useRef } from "react";

type RGB = [number, number, number];
type Uniforms = Record<string, WebGLUniformLocation | null>;

interface NeuralNoiseProps {
  color?: RGB;
  opacity?: number;
  speed?: number;
  intensity?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VS = `
  precision mediump float;
  varying vec2 vUv;
  attribute vec2 a_position;
  void main() {
    vUv = 0.5 * (a_position + 1.0);
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FS = `
  precision mediump float;
  varying vec2 vUv;
  uniform float u_time;
  uniform float u_ratio;
  uniform vec2 u_pointer_position;
  uniform vec3 u_color;
  uniform float u_speed;
  uniform float u_intensity;

  vec2 rotate(vec2 uv, float th) {
    return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
  }

  float neuro_shape(vec2 uv, float t, float p) {
    vec2 sine_acc = vec2(0.0);
    vec2 res = vec2(0.0);
    float scale = 8.0;
    for (int j = 0; j < 15; j++) {
      uv = rotate(uv, 1.0);
      sine_acc = rotate(sine_acc, 1.0);
      vec2 layer = uv * scale + float(j) + sine_acc - t;
      sine_acc += sin(layer) + 2.4 * p;
      res += (0.5 + 0.5 * cos(layer)) / scale;
      scale *= 1.2;
    }
    return res.x + res.y;
  }

  void main() {
    vec2 uv = 0.5 * vUv;
    uv.x *= u_ratio;
    vec2 ptr = vUv - u_pointer_position;
    ptr.x *= u_ratio;
    float p = clamp(length(ptr), 0.0, 1.0);
    p = 0.5 * pow(1.0 - p, 2.0);
    float t = u_speed * u_time;
    float noise = neuro_shape(uv, t, p);
    noise = 1.2 * pow(noise, 3.0);
    noise += pow(noise, 10.0);
    noise = max(0.0, noise - 0.5);
    noise *= (1.0 - length(vUv - 0.5));
    noise *= u_intensity;
    vec3 col = u_color * noise;
    gl_FragColor = vec4(col, noise);
  }
`;

export function NeuralNoise({
  color = [0.96, 0.62, 0.04],
  opacity = 0.9,
  speed = 0.001,
  intensity = 1.0,
  className,
  style,
}: NeuralNoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (
      canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl")
    ) as WebGLRenderingContext | null;
    if (!gl) return;

    // Accept colors in 0–255 range; normalize to 0–1 if any component > 1
    const c: RGB = color.map(v => v > 1 ? v / 255 : v) as RGB;

    const pointer = { x: 0.5, y: 0.5, tX: 0.5, tY: 0.5 };
    const uniforms: Uniforms = {};
    let rafId: number;

    function compileShader(type: number, src: string): WebGLShader | null {
      const s = gl!.createShader(type);
      if (!s) return null;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.error("Shader error:", gl!.getShaderInfoLog(s));
        gl!.deleteShader(s);
        return null;
      }
      return s;
    }

    const vs = compileShader(gl.VERTEX_SHADER, VS);
    const fs = compileShader(gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS) as number;
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(program, i);
      if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
    }

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    gl.useProgram(program);

    const pos = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    gl.uniform3f(uniforms.u_color!, c[0], c[1], c[2]);
    gl.uniform1f(uniforms.u_speed!, speed);
    gl.uniform1f(uniforms.u_intensity!, intensity);

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      gl!.viewport(0, 0, canvas.width, canvas.height);
      if (uniforms.u_ratio) gl!.uniform1f(uniforms.u_ratio, canvas.width / canvas.height);
    }

    function render() {
      if (!canvas) return;
      pointer.x += (pointer.tX - pointer.x) * 0.2;
      pointer.y += (pointer.tY - pointer.y) * 0.2;
      gl!.uniform1f(uniforms.u_time!, performance.now());
      gl!.uniform2f(
        uniforms.u_pointer_position!,
        pointer.x / canvas.offsetWidth,
        1 - pointer.y / canvas.offsetHeight,
      );
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    }

    const onPointerMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.tX = e.clientX - r.left;
      pointer.tY = e.clientY - r.top;
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.targetTouches[0];
      if (t) {
        const r = canvas.getBoundingClientRect();
        pointer.tX = t.clientX - r.left;
        pointer.tY = t.clientY - r.top;
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", resize);

    resize();
    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", resize);
    };
  }, [color, speed, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ ...style, opacity }}
    />
  );
}
