import React from 'react'

function Map({zoom,lat,lon}) {
    // OpenStreetMap embed using bbox computed from center + delta
    const delta = 0.04;
    const left = lon - delta;
    const right = lon + delta;
    const top = lat + delta;
    const bottom = lat - delta;
    const src = `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${lat}%2C${lon}`;
    return (
            <div className="gis-map px-3 col-md-12 col-lg-3" style={{ padding: 0, border: '0px solid #eaeaea', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ padding: 12, borderBottom: '0px solid #eee' }}>
                    <h2 className='h5' style={{ margin: 0 }}><i class="fa fa-map" aria-hidden="true"></i> Map</h2>
                    <div className="text-light" style={{ fontSize: 12, color: '#666' }}>Center: {lat.toFixed(4)}, {lon.toFixed(4)}</div>
                </div>
                <div className='rounded border-radius' style={{ height: 200, borderRadius:"5px" }}>
                    <iframe
                        title="gis-map"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        src={src}
                        style={{ display: 'block' }}
                    />
                </div>
                <div className='px-1' style={{ padding: 2, fontSize: 12, background: 'transparent', textAlign: 'right' }}>
                    <a className='text-light' href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`} target="_blank" rel="noreferrer">Open in OSM</a>
                </div>
            </div>
    )
}

export default Map