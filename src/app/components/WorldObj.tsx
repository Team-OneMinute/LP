import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface WorldObjProps {
  width: number;
  height: number;
}

const WorldObj: React.FC<WorldObjProps> = ({ width, height }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    // アスペクト比を動的に計算
    const aspectRatio = width / height;
    const scene = new THREE.Scene();

    // カメラ距離を動的に調整
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    const baseCameraDistance = 4;
    const dynamicCameraDistance =
      baseCameraDistance + Math.max(0, 1000 / width); // 画面幅に基づいてカメラ距離を調整
    console.log("dynamicCameraDistance", dynamicCameraDistance);
    camera.position.set(0, 0, dynamicCameraDistance);

    // カメラのアスペクト比を更新
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current!.appendChild(renderer.domElement);

    // ノード（星）の作成
    const nodes: THREE.Mesh[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.01, 32, 32); // ノードのサイズを小さくする
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const radius = 3;

    for (let i = 0; i < 150; i++) {
      const phi = Math.acos(2 * Math.random() - 1); // θ（極角）
      const theta = 2 * Math.PI * Math.random(); // φ（方位角）

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(x, y, z);
      nodes.push(node);
      scene.add(node);
    }

    // ノード間の接続線（エッジ）の作成
    const edges: THREE.Line[] = [];
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x888888 });

    nodes.forEach((node1, index) => {
      for (let j = index + 1; j < nodes.length; j++) {
        const node2 = nodes[j];
        const distance = node1.position.distanceTo(node2.position);

        if (distance < 1.5 && Math.random() > 0.4) {
          const edgeGeometry = new THREE.BufferGeometry().setFromPoints([
            node1.position,
            node2.position,
          ]);
          const edge = new THREE.Line(edgeGeometry, edgeMaterial);
          edges.push(edge);
          scene.add(edge);
        }
      }
    });

    // オービットコントローラーの設定
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // ズームを無効化
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;

    // アニメーションの設定
    const animate = () => {
      requestAnimationFrame(animate);
      scene.rotation.y += 0.002; // 球体全体を自転させる
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // クリーンアップ
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [width, height]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default WorldObj;
