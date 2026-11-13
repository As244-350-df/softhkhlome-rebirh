import React from 'react'

function Map({ zoom, lat, lon }) {
  const delta = 0.035
  const left = lon - delta
  const right = lon + delta
  const top = lat + delta
  const bottom = lat - delta
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${lat}%2C${lon}`
  const externalMapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`

  return (
    <div
      className="gis-map w-100"
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        border: '1px solid rgba(255, 255, 255, 0.16)'
      }}
    >
      <div style={{ width: '100%', height: '165px', position: 'relative' }}>
        <iframe
          title="Softkhlome Studio Location - Lilongwe, Malawi"
          width="100%"
          height="100%"
          scrolling="no"
          src={src}
          loading="lazy"
          style={{ display: 'block', width: '100%', height: '100%', border: 0 }}
        />
      </div>

      <div
        className="d-flex align-items-center justify-content-between px-3 py-2"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          fontSize: '0.78rem',
          color: 'rgba(255, 255, 255, 0.78)'
        }}
      >
        <span className="d-inline-flex align-items-center gap-1">
          <i className="bi bi-geo-alt-fill" style={{ color: '#ff9233' }}></i>
          <span>Lilongwe, MW</span>
        </span>
        <a
          href={externalMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ff9233', fontWeight: 600, fontSize: '0.78rem' }}
        >
          Open Map <i className="bi bi-arrow-up-right"></i>
        </a>
      </div>
    </div>
  )
}

export default Map