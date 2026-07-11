import { useState } from 'react'
import { asset } from '../utils.js'

// Imatge amb placeholder de color de bioma si el fitxer no existeix
export default function BiomeImage({ src, alt, title, biome, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div
        className={`biome-${biome} flex items-center justify-center ${className}`}
        style={{ backgroundColor: 'var(--biome)' }}
        role="img"
        aria-label={alt || title}
      >
        <span className="font-display font-bold text-2xl md:text-4xl text-white/90 px-6 text-center">
          {title || alt}
        </span>
      </div>
    )
  }

  return (
    <img
      src={asset(src)}
      alt={alt || title || ''}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  )
}
