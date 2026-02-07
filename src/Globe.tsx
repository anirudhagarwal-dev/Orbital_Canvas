import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useControls } from 'leva'
import * as THREE from 'three'

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  const { deformAmount, transparency, wireframe, color, speed } = useControls('Globe', {
    deformAmount: { value: 0.2, min: 0, max: 2, step: 0.1 },
    transparency: { value: 0.5, min: 0, max: 1, step: 0.05 },
    wireframe: true,
    color: '#ffffff',
    speed: { value: 0.5, min: 0, max: 5 }
  })

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1 * speed
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15 * speed
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color={color}
        wireframe={wireframe}
        transparent
        opacity={transparency}
        distort={deformAmount}
        speed={speed}
      />
    </Sphere>
  )
}

export default Globe