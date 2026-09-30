import {createElement} from 'react'

/* A real thumbnail for a video in the Studio, instead of the empty file
   icon: its first frame, playing while hovered. */
export function videoThumb(url) {
  if (!url) return undefined
  return createElement('video', {
    src: `${url}#t=0.5`,
    muted: true,
    playsInline: true,
    loop: true,
    preload: 'metadata',
    onMouseEnter: (e) => e.currentTarget.play().catch(() => {}),
    onMouseLeave: (e) => e.currentTarget.pause(),
    style: {width: '100%', height: '100%', objectFit: 'cover', display: 'block', background: '#000'},
  })
}

/* preview for a plain `file` array member that holds a video */
export const videoFilePreview = {
  select: {url: 'asset.url', name: 'asset.originalFilename', mime: 'asset.mimeType', hidden: 'hidden'},
  prepare({url, name, mime, hidden}) {
    const isVideo = !mime || mime.startsWith('video')
    return {
      title: name || 'Vidéo',
      subtitle: hidden ? 'masqué' : undefined,
      media: isVideo ? videoThumb(url) : undefined,
    }
  },
}
