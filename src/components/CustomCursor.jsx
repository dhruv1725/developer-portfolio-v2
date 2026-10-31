import { useEffect, useState } from 'react'

export default function CustomCursor() {
const [position, setPosition] = useState({ x: -100, y: -100 })
const [visible, setVisible] = useState(false)
const [hovering, setHovering] = useState(false)

useEffect(() => {
const handleMove = (event) => {
setPosition({
x: event.clientX,
y: event.clientY,
})

  setVisible(true)

  const target = event.target

  setHovering(
    target instanceof Element &&
      Boolean(target.closest('a, button, input, textarea, select'))
  )
}

const handleLeave = () => setVisible(false)
const handleEnter = () => setVisible(true)

window.addEventListener('pointermove', handleMove)
document.addEventListener('pointerleave', handleLeave)
document.addEventListener('pointerenter', handleEnter)

return () => {
  window.removeEventListener('pointermove', handleMove)
  document.removeEventListener('pointerleave', handleLeave)
  document.removeEventListener('pointerenter', handleEnter)
}

}, [])

return (
<div
aria-hidden="true"
className="pointer-events-none fixed left-0 top-0 z-[200] hidden md:block"
style={{
transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0)`,
opacity: visible ? 1 : 0,
transition: 'opacity 150ms ease',
}}
>
<div
style={{
width: '10px',
height: '10px',
borderRadius: '50%',
backgroundColor: '#d69a58',
boxShadow: '0 0 16px rgba(214,154,88,0.65)',
transform: hovering ? 'scale(1.6)' : 'scale(1)',
transition: 'transform 200ms ease',
}}
/> </div>
)
}
