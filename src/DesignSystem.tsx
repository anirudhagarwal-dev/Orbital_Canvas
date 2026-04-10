import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type ButtonVariant = 'primary' | 'secondary' | 'accent'

export const Icon = ({ name, size = 20, color = 'currentColor' }: { name: 'success' | 'warning' | 'error' | 'info' | 'close' | 'spinner'; size?: number; color?: string }) => {
  if (name === 'spinner') {
    return <div className="spinner" aria-hidden="true" />
  }
  const common = { width: size, height: size, fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as any
  if (name === 'success') return (
    <svg {...common} viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
  )
  if (name === 'warning') return (
    <svg {...common} viewBox="0 0 24 24"><path d="M12 9v4" /><path d="M12 17h.01" /><path d="M10 2l10 18H0L10 2z" strokeLinejoin="miter" /></svg>
  )
  if (name === 'error') return (
    <svg {...common} viewBox="0 0 24 24"><path d="M18 6L6 18" /><path d="M6 6l12 12" /><circle cx="12" cy="12" r="9" /></svg>
  )
  if (name === 'info') return (
    <svg {...common} viewBox="0 0 24 24"><path d="M12 8h.01" /><path d="M11 12h2v4h-2z" /><circle cx="12" cy="12" r="9" /></svg>
  )
  return (
    <svg {...common} viewBox="0 0 24 24"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
  )
}

export const Button = ({ children, variant = 'primary', disabled, onClick, ariaLabel }: { children: React.ReactNode; variant?: ButtonVariant; disabled?: boolean; onClick?: () => void; ariaLabel?: string }) => {
  return (
    <button className={`btn btn-${variant}`} disabled={disabled} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}

export const Input = ({ value, onChange, placeholder, error, type = 'text', ariaLabel }: { value: string; onChange: (v: string) => void; placeholder?: string; error?: string; type?: string; ariaLabel?: string }) => {
  return (
    <div>
      <input
        className={`input ${error ? 'input-error' : ''}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        aria-invalid={!!error}
        aria-label={ariaLabel}
      />
      {error ? <div className="error-text m-8" role="alert">{error}</div> : <div className="helper-text m-8">{placeholder}</div>}
    </div>
  )
}

type ToastKind = 'success' | 'warning' | 'error' | 'info'
type Toast = { id: number; kind: ToastKind; title: string; description?: string }

const ToastContext = createContext<{ show: (t: Omit<Toast, 'id'>) => void } | null>(null)

export const useToast = () => {
  const ctx = useContext(ToastContext)
  return ctx!
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])
  const counter = useRef(0)
  const show = (t: Omit<Toast, 'id'>) => {
    const id = ++counter.current
    setToasts((prev) => [...prev, { id, ...t }])
    setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 3000)
  }
  const value = useMemo(() => ({ show }), [])
  return (
    <ToastContext.Provider value={value}>
      {children}
      {createPortal(
        <div className="toast-container" role="region" aria-live="polite" aria-label="Notifications">
          {toasts.map((t) => (
            <div key={t.id} className={`toast toast-${t.kind}`} role="status">
              <Icon name={t.kind} />
              <div>
                <div className="h6">{t.title}</div>
                {t.description ? <div className="caption">{t.description}</div> : null}
              </div>
              <Button variant="secondary" ariaLabel="Dismiss" onClick={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))}>Close</Button>
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  )
}

export const Spinner = ({ label }: { label?: string }) => {
  return (
    <div role="status" aria-live="polite" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <div className="spinner" />
      {label ? <span className="caption">{label}</span> : null}
    </div>
  )
}

export const ProgressBar = ({ value }: { value: number }) => {
  const clamped = Math.max(0, Math.min(100, value))
  return (
    <div className="progress" role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
      <div className="progress-bar" style={{ width: `${clamped}%` }} />
    </div>
  )
}

export const Skeleton = ({ width = 200, height = 16, radius = 8 }: { width?: number; height?: number; radius?: number }) => {
  return <div className="skeleton" style={{ width, height, borderRadius: radius }} aria-hidden="true" />
}

export const LazyImage = ({ src, alt, width, height }: { src: string; alt: string; width?: number; height?: number }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setLoaded(false)
    setError(false)
  }, [src])
  return (
    <div className="image-placeholder" style={{ width, height }}>
      {!loaded && !error ? <Skeleton width={width || 100} height={height || 100} /> : null}
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={width}
          height={height}
          style={{ display: loaded ? 'block' : 'none', borderRadius: 8 }}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      ) : (
        <div className="body p-16">Image unavailable</div>
      )}
    </div>
  )
}

export const StyleGuide = ({ onToast }: { onToast: (kind: ToastKind) => void }) => {
  const [name, setName] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  useEffect(() => {
    if (name && name.length < 3) setError('Minimum 3 characters')
    else setError(undefined)
  }, [name])
  return (
    <div style={{ position: 'absolute', left: 30, bottom: 30, zIndex: 10, pointerEvents: 'auto' }}>
      <div className="card p-24">
        <div className="h3 m-8">Style Guide</div>
        <div className="caption m-8">Typography</div>
        <div className="m-8 h1">Heading 1</div>
        <div className="m-8 h2">Heading 2</div>
        <div className="m-8 h3">Heading 3</div>
        <div className="m-8 h4">Heading 4</div>
        <div className="m-8 h5">Heading 5</div>
        <div className="m-8 h6">Heading 6</div>
        <div className="m-8 body">Body text</div>
        <div className="m-8 caption">Caption</div>

        <div className="caption m-8">Buttons</div>
        <div className="m-8" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>

        <div className="caption m-8">Inputs</div>
        <div className="m-8" style={{ maxWidth: 320 }}>
          <Input value={name} onChange={setName} placeholder="Your name" error={error} ariaLabel="Name" />
        </div>

        <div className="caption m-8">Feedback</div>
        <div className="m-8" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => onToast('success')}>Success</Button>
          <Button variant="secondary" onClick={() => onToast('info')}>Info</Button>
          <Button variant="accent" onClick={() => onToast('warning')}>Warning</Button>
          <Button variant="primary" onClick={() => onToast('error')}>Error</Button>
        </div>

        <div className="caption m-8">Loading</div>
        <div className="m-8" style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <Spinner label="Loading" />
          <Skeleton width={160} height={16} />
          <ProgressBar value={60} />
        </div>
      </div>
    </div>
  )
}
