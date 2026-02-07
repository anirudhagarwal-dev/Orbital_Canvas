import { render, screen, fireEvent } from '@testing-library/react'
import UI from '../UI'
import { describe, it, expect, vi } from 'vitest'
import React from 'react'

describe('UI Component', () => {
  it('renders titles correctly', () => {
    render(<UI fullscreen={false} toggleFullscreen={() => {}} />)
    expect(screen.getByText('React Three Fiber + Globe')).toBeInTheDocument()
    expect(screen.getByText('Fullscreen on')).toBeInTheDocument()
  })

  it('shows "Fullscreen off" when fullscreen is true', () => {
    render(<UI fullscreen={true} toggleFullscreen={() => {}} />)
    expect(screen.getByText('Fullscreen off')).toBeInTheDocument()
  })

  it('calls toggleFullscreen when clicked', () => {
    const toggleMock = vi.fn()
    render(<UI fullscreen={false} toggleFullscreen={toggleMock} />)
    
    fireEvent.click(screen.getByText('Fullscreen on'))
    expect(toggleMock).toHaveBeenCalledTimes(1)
  })
})