import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Stats, Environment } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import Globe from './Globe'
import Effects from './Effects'
import UI from './UI'

const Scene = () => {
  const { autoRotate, showStats, environment } = useControls('Scene', {
    autoRotate: true,
    showStats: false,
    environment: {
        options: ['city', 'dawn', 'night', 'warehouse', 'forest', 'sunset', 'studio', 'park', 'lobby'],
        value: 'city'
    }
  })

  return (
    <>
      <Globe />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Environment preset={environment as any} />
      <Effects />
      <OrbitControls enableDamping autoRotate={autoRotate} />
      {showStats && <Stats />}
    </>
  )
}

function App() {
  const [fullscreen, setFullscreen] = useState(false)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setFullscreen(true)
    } else {
      document.exitFullscreen()
      setFullscreen(false)
    }
  }

  return (
    <>
      <Leva 
        collapsed={false} 
        theme={{
          colors: {
            elevation1: 'rgba(0, 0, 0, 0.6)',
            elevation2: 'rgba(20, 20, 20, 0.4)',
            elevation3: 'rgba(40, 40, 40, 0.3)',
          },
        }}
      />
      <UI fullscreen={fullscreen} toggleFullscreen={toggleFullscreen} />
      <Canvas
        camera={{ position: [0, 0, 3] }}
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: false }}
      >
        <color attach="background" args={['#000000']} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App