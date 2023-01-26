import React, { useRef, useState,useMemo  } from 'react'
import * as THREE from 'three'
import { useFrame,useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel, Noise } from 'lamina/vanilla'


function Box(props){
        const { viewport, camera } = useThree()
        const colorA = new THREE.Color('#999').convertSRGBToLinear()
        const colorB = new THREE.Color('#666').convertSRGBToLinear()
        const fresnel = new THREE.Color('#ccc').convertSRGBToLinear()
        const material = new LayerMaterial({
          layers: [
            new Depth({ colorA: colorA, colorB: colorB, alpha: 1, mode: 'normal', near: 0, far: 2, origin: [1, 1, 1] }),
            new Depth({ colorA: '#333', colorB: colorA, alpha: 0.5, mode: 'add', near: 3, far: 2, origin: [1, 1, 1] }),
            new Fresnel({ mode: 'add', color: fresnel, intensity: 0.3, power: 2.5, bias: 0.0 }),
            new Noise({ mapping: 'local', type: 'simplex', scale: 1000, colorA: '#ffaf40', colorB: 'black', mode: 'overlay' })
          ]
        })
        const [speed] = useState(() => 0.1 + Math.random() / 10)
        const position = useMemo(() => {
            const z = Math.random() * -10
            const bounds = viewport.getCurrentViewport(camera, [0, 0, z])
            return [THREE.MathUtils.randFloatSpread(bounds.width), THREE.MathUtils.randFloatSpread(bounds.height * 0.75), z]
          }, [viewport])
      const mesh = useRef()
        useFrame((state, delta) => (mesh.current.rotation.y += delta,mesh.current.rotation.x += delta))
      
        return (
        <Float position={position} speed={speed} rotationIntensity={10} floatIntensity={40} dispose={null}>
          <mesh
            {...props}
            ref={mesh}
            material={material} >
            <boxGeometry />
          </mesh>
        </Float>
      )
}
export default function Geomet(){
    return Array.from({ length: 25 }, (_, i) => <Box key={i} />)

}