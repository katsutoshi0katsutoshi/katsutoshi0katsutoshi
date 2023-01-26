import React, {Suspense } from 'react'
import * as THREE from 'three'
import { Canvas,useThree, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { LayerMaterial, Depth,  Noise } from 'lamina'
import Geomet from './geomet'

export default function MainVisual(){
  function Bg() {
    return (
      <mesh scale={100}>
        <boxGeometry args={[1, 1, 1]} />
        <LayerMaterial side={THREE.BackSide}>
          <Depth colorB="#555" colorA="#333" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
          <Noise mapping="local" type="white" scale={300} colorA="white" colorB="black" mode="subtract" alpha={1} />
        </LayerMaterial>
      </mesh>
    )
  }
  function Caption({ children }) {
    const { width } = useThree((state) => state.viewport)
    return (
      <Text
        position={[0, 0, -5]}
        lineHeight={0.8}
        fontSize={width / 8}
        material-toneMapped={false}
        anchorX="center"
        anchorY="middle">
        {children}
      </Text>
    )
  }  

  function Rig({ v = new THREE.Vector3() }) {
    return useFrame((state) => {
      state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
    })
  }  

return(
  <>

    <Canvas 
      style={{
        width: 100 + "vw",
        height: 100 + "vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: '0'
      }}
      >

      <Rig />
        <ambientLight />
        <directionalLight color="white" position={[1, 1, 1]} />
        <Bg />
      <Suspense fallback={null}>
        <Geomet />
        <Caption>{`Mokichi's Site.`}</Caption>
      </Suspense>

    </Canvas>
  </>
)
  }