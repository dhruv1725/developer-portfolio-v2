import { useReducedMotion, motion } from 'motion/react'

export default function Reveal({
children,
delay = 0,
className = '',
direction = 'up',
}) {
const prefersReducedMotion = useReducedMotion()

const offsets = {
up: { x: 0, y: 90 },
down: { x: 0, y: -90 },
left: { x: 90, y: 0 },
right: { x: -90, y: 0 },
}

const offset = offsets[direction] ?? offsets.up

if (prefersReducedMotion) {
return <div className={className}>{children}</div>
}

return (
<motion.div
className={className}
initial={{
opacity: 0,
x: offset.x,
y: offset.y,
scale: 0.96,
filter: 'blur(10px)',
}}
whileInView={{
opacity: 1,
x: 0,
y: 0,
scale: 1,
filter: 'blur(0px)',
}}
viewport={{
once: true,
amount: 0.1,
}}
transition={{
duration: 1.15,
delay,
ease: [0.16, 1, 0.3, 1],
}}
>
{children}
</motion.div>
)
}
