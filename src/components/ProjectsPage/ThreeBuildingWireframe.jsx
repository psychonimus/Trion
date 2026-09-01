import React, { useEffect, useRef, memo } from "react";
import * as THREE from "three";

function ThreeBuildingWireframe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer, scene, camera;
    let resizeObserver;

    try {
      const width = container.clientWidth || 640;
      const height = container.clientHeight || 224;

      scene = new THREE.Scene();

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const matHL   = new THREE.LineBasicMaterial({ color: 0x9a7a52, transparent: true, opacity: 0.78 });
      const matMain = new THREE.LineBasicMaterial({ color: 0x8a6843, transparent: true, opacity: 0.60 });
      const matSec  = new THREE.LineBasicMaterial({ color: 0x604a34, transparent: true, opacity: 0.38 });
      const matFnt  = new THREE.LineBasicMaterial({ color: 0x3d3228, transparent: true, opacity: 0.18 });

      const HL = [], M = [], S = [], F = [];
      const seg = (a, x1, y1, z1, x2, y2, z2) => a.push(x1, y1, z1, x2, y2, z2);

      const mkMesh = (pts, mat) => {
        const g = new THREE.BufferGeometry();
        g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
        return new THREE.LineSegments(g, mat);
      };

      const face = (mA, sA, isVert, fixed, a1, a2, b1, b2, nF, nC) => {
        const s = seg;
        if (isVert) {
          s(mA, fixed, b1, a1, fixed, b1, a2);
          s(mA, fixed, b2, a1, fixed, b2, a2);
          s(mA, fixed, b1, a1, fixed, b2, a1);
          s(mA, fixed, b1, a2, fixed, b2, a2);
          const fh = (b2 - b1) / nF;
          for (let i = 1; i < nF; i++) {
            const fy = b1 + i * fh;
            s(mA, fixed, fy, a1, fixed, fy, a2);
            s(sA, fixed, fy - 0.14, a1, fixed, fy - 0.14, a2);
          }
          for (let i = 0; i < nF; i++) {
            s(sA, fixed, b1 + i * fh + fh * 0.35, a1, fixed, b1 + i * fh + fh * 0.35, a2);
            s(sA, fixed, b1 + i * fh + fh * 0.72, a1, fixed, b1 + i * fh + fh * 0.72, a2);
          }
          const cd = (a2 - a1) / nC;
          for (let i = 1; i < nC; i++) s(sA, fixed, b1, a1 + i * cd, fixed, b2, a1 + i * cd);
        } else {
          s(mA, a1, b1, fixed, a2, b1, fixed);
          s(mA, a1, b2, fixed, a2, b2, fixed);
          s(mA, a1, b1, fixed, a1, b2, fixed);
          s(mA, a2, b1, fixed, a2, b2, fixed);
          const fh = (b2 - b1) / nF;
          for (let i = 1; i < nF; i++) {
            const fy = b1 + i * fh;
            s(mA, a1, fy, fixed, a2, fy, fixed);
            s(sA, a1, fy - 0.14, fixed, a2, fy - 0.14, fixed);
          }
          for (let i = 0; i < nF; i++) {
            s(sA, a1, b1 + i * fh + fh * 0.35, fixed, a2, b1 + i * fh + fh * 0.35, fixed);
            s(sA, a1, b1 + i * fh + fh * 0.72, fixed, a2, b1 + i * fh + fh * 0.72, fixed);
          }
          const cw = (a2 - a1) / nC;
          for (let i = 1; i < nC; i++) s(sA, a1 + i * cw, b1, fixed, a1 + i * cw, b2, fixed);
        }
      };

      const topR = (a, x1, x2, z1, z2, y) => {
        seg(a, x1, y, z1, x2, y, z1);
        seg(a, x1, y, z2, x2, y, z2);
        seg(a, x1, y, z1, x1, y, z2);
        seg(a, x2, y, z1, x2, y, z2);
      };

      const boxFrame = (a, x1, x2, z1, z2, y1, y2) => {
        topR(a, x1, x2, z1, z2, y1);
        topR(a, x1, x2, z1, z2, y2);
        seg(a, x1, y1, z1, x1, y2, z1);
        seg(a, x2, y1, z1, x2, y2, z1);
        seg(a, x2, y1, z2, x2, y2, z2);
        seg(a, x1, y1, z2, x1, y2, z2);
      };

      const buildingGroup = new THREE.Group();
      const guideGroup = new THREE.Group();

      const cx1 = -3.8, cx2 = 3.8, cz1 = -3.3, cz2 = 3.3, ch = 11.0;
      face(M, S, false, cz2, cx1, cx2, 0, ch, 4, 6);
      face(M, S, true, cx2, cz1, cz2, 0, ch, 4, 5);
      face(F, F, false, cz1, cx1, cx2, 0, ch, 4, 6);
      face(S, F, true, cx1, cz1, cz2, 0, ch, 4, 5);
      topR(S, cx1, cx2, cz1, cz2, ch);

      seg(HL, cx2, 0, cz2, cx2, ch, cz2);
      seg(HL, cx1, ch, cz2, cx2, ch, cz2);
      seg(HL, cx2, ch, cz2, cx2, ch, cz1);
      seg(HL, cx1, 0, cz2, cx1, ch, cz2);

      const ph = 0.6;
      topR(M, cx1, cx2, cz1, cz2, ch + ph);
      seg(M, cx1, ch, cz2, cx1, ch + ph, cz2);
      seg(M, cx2, ch, cz2, cx2, ch + ph, cz2);
      seg(S, cx2, ch, cz1, cx2, ch + ph, cz1);
      seg(S, cx1, ch, cz1, cx1, ch + ph, cz1);

      const rw = 3.0, rd = 2.4, rh = 1.6;
      const ry1 = ch + ph;
      boxFrame(S, -rw / 2, rw / 2, -rd / 2, rd / 2, ry1, ry1 + rh);
      topR(F, -rw / 2, rw / 2, -rd / 2, rd / 2, ry1 + rh * 0.55);
      for (let l = 1; l < 3; l++) {
        const lx = -rw / 2 + (rw / 3) * l;
        seg(F, lx, ry1, rd / 2, lx, ry1 + rh, rd / 2);
      }

      const lx1 = -8.5, lx2 = cx1, lz1 = -2.5, lz2 = 2.8, lh = 8.5;
      face(M, S, false, lz2, lx1, lx2, 0, lh, 3, 4);
      face(F, F, true, lx2, lz1, lz2, 0, lh, 3, 3);
      face(F, F, false, lz1, lx1, lx2, 0, lh, 3, 4);
      face(S, F, true, lx1, lz1, lz2, 0, lh, 3, 3);
      topR(F, lx1, lx2, lz1, lz2, lh);
      seg(S, lx1, 0, lz2, lx1, lh, lz2);

      boxFrame(F, (lx1 + lx2) / 2 - 1.4, (lx1 + lx2) / 2 + 1.4, (lz1 + lz2) / 2 - 1.2, (lz1 + lz2) / 2 + 1.2, lh, lh + 1.1);

      const fx1 = -11.5, fx2 = lx1, fz1 = -2.0, fz2 = 2.2, fh = 5.2;
      face(S, F, false, fz2, fx1, fx2, 0, fh, 2, 3);
      face(F, F, true, fx2, fz1, fz2, 0, fh, 2, 2);
      face(F, F, false, fz1, fx1, fx2, 0, fh, 2, 3);
      face(F, F, true, fx1, fz1, fz2, 0, fh, 2, 2);
      topR(F, fx1, fx2, fz1, fz2, fh);
      seg(S, fx1, 0, fz2, fx1, fh, fz2);
      seg(M, fx1, fh + 0.3, fz2, fx2, fh + 0.3, fz2);
      seg(S, fx1, fh, fz2, fx1, fh + 0.3, fz2);
      seg(S, fx2, fh, fz2, fx2, fh + 0.3, fz2);

      const rx1 = cx2, rx2 = 8.2, rz1b = -2.6, rz2b = 2.5, rhR = 8.5;
      face(M, S, false, rz2b, rx1, rx2, 0, rhR, 3, 4);
      face(M, S, true, rx2, rz1b, rz2b, 0, rhR, 3, 3);
      face(F, F, false, rz1b, rx1, rx2, 0, rhR, 3, 4);
      topR(S, rx1, rx2, rz1b, rz2b, rhR);

      const frx1 = rx2, frx2 = 10.8, frz1 = -2.0, frz2 = 2.0, frh = 5.5;
      face(S, F, false, frz2, frx1, frx2, 0, frh, 2, 2);
      face(S, F, true, frx2, frz1, frz2, 0, frh, 2, 2);
      face(F, F, false, frz1, frx1, frx2, 0, frh, 2, 2);
      topR(F, frx1, frx2, frz1, frz2, frh);

      seg(S, cx1, lh, cz2, lx2, lh, cz2);
      seg(F, lx1, fh, lz2, fx2, fh, fz2);

      if (F.length)  buildingGroup.add(mkMesh(F,  matFnt));
      if (S.length)  buildingGroup.add(mkMesh(S,  matSec));
      if (M.length)  buildingGroup.add(mkMesh(M,  matMain));
      if (HL.length) buildingGroup.add(mkMesh(HL, matHL));
      scene.add(buildingGroup);

      const GF = [];
      seg(GF, -16, 0, cz2, 16, 0, cz2);
      seg(GF, -16, 0, cz2 - 2.0, 16, 0, cz2 - 2.0);
      seg(GF, -16, 0, 0, 16, 0, 0);
      seg(GF, -16, 0, cz1, 16, 0, cz1);
      seg(GF, -16, 0, cz1 - 2.5, 16, 0, cz1 - 2.5);
      seg(GF, cx2, ch + ph, cz2, 20, 0, -14);
      seg(GF, cx1, ch + ph, cz2, -20, 0, cz2);
      seg(GF, -10, 0, -13, -7, 0, 7);
      seg(GF, -2, 0, -13, 1, 0, 7);
      seg(GF, 6, 0, -11, 9, 0, 7);
      seg(GF, 13, 0, -9, 16, 0, 5);
      if (GF.length) guideGroup.add(mkMesh(GF, matFnt));
      scene.add(guideGroup);

      const FOV = 36;
      const AZIMUTH = 0.38;
      const ELEVATION = 0.30;
      const PADDING = 1.25;

      const fitCamera = (w, h) => {
        const asp = w / h;

        if (!camera) {
          camera = new THREE.PerspectiveCamera(FOV, asp, 0.1, 2000);
        }
        camera.aspect = asp;
        camera.fov = FOV;
        camera.updateProjectionMatrix();

        const box = new THREE.Box3().setFromObject(buildingGroup);
        const center = box.getCenter(new THREE.Vector3());

        const dirX = Math.sin(AZIMUTH) * Math.cos(ELEVATION);
        const dirY = Math.sin(ELEVATION);
        const dirZ = Math.cos(AZIMUTH) * Math.cos(ELEVATION);

        let dist = 50;

        for (let iter = 0; iter < 5; iter++) {
          camera.position.set(
            center.x + dist * dirX,
            center.y + dist * dirY,
            center.z + dist * dirZ
          );
          camera.lookAt(center.x, center.y * 0.92, center.z);
          camera.updateProjectionMatrix();
          camera.updateMatrixWorld();

          let nxMin = Infinity, nxMax = -Infinity;
          let nyMin = Infinity, nyMax = -Infinity;

          for (let xi = 0; xi < 2; xi++) {
            for (let yi = 0; yi < 2; yi++) {
              for (let zi = 0; zi < 2; zi++) {
                const p = new THREE.Vector3(
                  xi ? box.max.x : box.min.x,
                  yi ? box.max.y : box.min.y,
                  zi ? box.max.z : box.min.z
                ).project(camera);
                nxMin = Math.min(nxMin, p.x);
                nxMax = Math.max(nxMax, p.x);
                nyMin = Math.min(nyMin, p.y);
                nyMax = Math.max(nyMax, p.y);
              }
            }
          }

          const ndcSpan = Math.max(nxMax - nxMin, nyMax - nyMin);
          const target = 2.0 / PADDING;
          dist *= ndcSpan / target;
        }

        camera.position.set(
          center.x + dist * dirX,
          center.y + dist * dirY,
          center.z + dist * dirZ
        );
        camera.lookAt(center.x, center.y * 0.92, center.z);
        camera.updateProjectionMatrix();
      };

      fitCamera(width, height);
      renderer.render(scene, camera);

      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w === 0 || h === 0) return;
        renderer.setSize(w, h);
        fitCamera(w, h);
        renderer.render(scene, camera);
      };

      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);
    } catch (err) {
      console.error("ThreeBuildingWireframe render error:", err);
    }

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      if (renderer) {
        renderer.dispose();
        if (container && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full pointer-events-none select-none relative"
    />
  );
}

export default memo(ThreeBuildingWireframe);
