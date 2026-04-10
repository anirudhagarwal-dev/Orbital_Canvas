import React from 'react'

interface UIProps {
  fullscreen: boolean
  toggleFullscreen: () => void
}

const UI: React.FC<UIProps> = ({ fullscreen, toggleFullscreen }) => {
  return (
    <>
      <div style={{ position: 'absolute', top: 20, left: 30, zIndex: 10, pointerEvents: 'none', color: 'var(--color-text)' }}>
        <div className="h6">React Three Fiber + Globe</div>
      </div>
      
      <div style={{ position: 'absolute', bottom: 20, right: 30, zIndex: 10, pointerEvents: 'auto', color: 'var(--color-text)', cursor: 'pointer' }} onClick={toggleFullscreen} aria-label="Toggle fullscreen">
        <div className="h6">{fullscreen ? 'Fullscreen off' : 'Fullscreen on'}</div>
      </div>
    </>
  )
}

export default UI
