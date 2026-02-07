import React from 'react'

interface UIProps {
  fullscreen: boolean
  toggleFullscreen: () => void
}

const UI: React.FC<UIProps> = ({ fullscreen, toggleFullscreen }) => {
  return (
    <>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '30px',
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.8rem',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <h3>React Three Fiber + Globe</h3>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '30px',
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.8rem',
        cursor: 'pointer',
        zIndex: 10,
        pointerEvents: 'auto'
      }} onClick={toggleFullscreen}>
        <h3>{fullscreen ? 'Fullscreen off' : 'Fullscreen on'}</h3>
      </div>
    </>
  )
}

export default UI