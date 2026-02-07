import React from 'react'
import { EffectComposer, Bloom, Glitch, DotScreen, Noise } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { BlendFunction } from 'postprocessing'
import { Vector2 } from 'three'

const Effects = () => {
  const { bloomStrength, bloomRadius, bloomThreshold } = useControls('Bloom', {
    bloomStrength: { value: 1.5, min: 0, max: 10 },
    bloomRadius: { value: 0.4, min: 0, max: 1 },
    bloomThreshold: { value: 0, min: 0, max: 1 }
  })

  const { glitchActive, glitchRatio } = useControls('Glitch', {
    glitchActive: false,
    glitchRatio: { value: 0.85, min: 0, max: 1 }
  })

  const { dotScreenActive, dotScale } = useControls('DotScreen', {
    dotScreenActive: true,
    dotScale: { value: 1.0, min: 0.1, max: 5 }
  })
  
  const { noiseActive, noiseOpacity } = useControls('Noise', {
      noiseActive: false,
      noiseOpacity: { value: 0.2, min: 0, max: 1 }
  })

  return (
    <EffectComposer>
      <Bloom luminanceThreshold={bloomThreshold} luminanceSmoothing={0.9} height={300} intensity={bloomStrength} radius={bloomRadius} />
      {(dotScreenActive ? <DotScreen scale={dotScale} /> : null) as any}
      {(glitchActive ? <Glitch delay={new Vector2(1.5, 3.5)} duration={new Vector2(0.6, 1.0)} strength={new Vector2(0.3, 1.0)} ratio={glitchRatio} /> : null) as any}
      {(noiseActive ? <Noise opacity={noiseOpacity} blendFunction={BlendFunction.OVERLAY} /> : null) as any}
    </EffectComposer>
  )
}

export default Effects