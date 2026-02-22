'use client'

import { useEffect, useRef } from 'react'

interface Dot {
    x: number
    y: number
    baseX: number
    baseY: number
}

export default function InteractiveDots() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let dots: Dot[] = []

        // Configuration - Adjusted for high visibility & reactivity
        const dotSpacing = 20 // Closer together
        const dotRadius = 1.5 // Slightly larger dots
        const mouseRadius = 150 // Larger area of effect
        const mouseRepelForce = 8 // Stronger push away
        const returnSpeed = 0.05 // Slower return to create a "trailing" effect

        let mouse = {
            x: -1000,
            y: -1000
        }

        const init = () => {
            // Handle high DPI displays
            const dpr = window.devicePixelRatio || 1
            const rect = canvas.getBoundingClientRect()

            canvas.width = rect.width * dpr
            canvas.height = rect.height * dpr
            ctx.scale(dpr, dpr)

            canvas.style.width = `${rect.width}px`
            canvas.style.height = `${rect.height}px`

            dots = []

            // Create grid of dots
            const cols = Math.floor(rect.width / dotSpacing)
            const rows = Math.floor(rect.height / dotSpacing)

            const offsetX = (rect.width - cols * dotSpacing) / 2
            const offsetY = (rect.height - rows * dotSpacing) / 2

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    const x = offsetX + i * dotSpacing
                    const y = offsetY + j * dotSpacing
                    dots.push({ x, y, baseX: x, baseY: y })
                }
            }
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            // Use a highly visible dark/slate color for the dots so they stand out against the light bg
            ctx.fillStyle = 'rgba(132, 80, 48, 0.4)' // Tailwind slate-900 with 75% opacity

            dots.forEach(dot => {
                // Calculate distance from mouse
                const dx = mouse.x - dot.x
                const dy = mouse.y - dot.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                // Mouse repel logic
                if (distance < mouseRadius) {
                    const force = (mouseRadius - distance) / mouseRadius
                    const angle = Math.atan2(dy, dx)

                    dot.x -= Math.cos(angle) * force * mouseRepelForce
                    dot.y -= Math.sin(angle) * force * mouseRepelForce
                }

                // Return to base position logic
                dot.x += (dot.baseX - dot.x) * returnSpeed
                dot.y += (dot.baseY - dot.y) * returnSpeed

                // Draw dot
                ctx.beginPath()
                ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2)
                ctx.fill()
            })

            animationFrameId = requestAnimationFrame(draw)
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            // The canvas context is scaled by dpr, so we pass coordinates in CSS pixels.
            // Do not multiply by dpr here, otherwise the mouse center will be offset.
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }

        const handleMouseLeave = () => {
            mouse.x = -1000
            mouse.y = -1000
        }

        window.addEventListener('resize', init)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseleave', handleMouseLeave)

        init()
        draw()

        return () => {
            window.removeEventListener('resize', init)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseleave', handleMouseLeave)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-auto"
            style={{ touchAction: 'none' }}
        />
    )
}
