import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import * as THREE from 'three'


function Moon() {
  return (
    <group position={[4, 6, -12]}>
      {/* Outer moon halo */}
      <mesh>
        <sphereGeometry args={[2.1, 32, 32]} />
        <meshBasicMaterial
          color="#8798d8"
          transparent
          opacity={0.025}
          depthWrite={false}
        />
      </mesh>

      {/* Inner silver-blue glow */}
      <mesh>
        <sphereGeometry args={[1.35, 32, 32]} />
        <meshBasicMaterial
          color="#b9c7f0"
          transparent
          opacity={0.055}
          depthWrite={false}
        />
      </mesh>

      {/* Moon surface */}
      <mesh>
        <sphereGeometry args={[0.85, 64, 64]} />
        <meshStandardMaterial
          color="#dce3f3"
          emissive="#9daedb"
          emissiveIntensity={0.35}
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Cool lunar illumination */}
      <pointLight
        color="#aebdf0"
        intensity={7}
        distance={26}
        decay={2}
      />
    </group>
  )
}

function Mountain({ position, scale, color }) {
  return (
    <mesh position={position} scale={scale} castShadow>
      <coneGeometry args={[1, 2, 5]} />
      <meshStandardMaterial
        color={color}
        roughness={1}
        flatShading
      />
    </mesh>
  )
}

function Mountains() {
  const mountains = [
    { position: [-11, 1, -10], scale: [5, 8, 3], color: '#171923' },
    { position: [-7, 0, -12], scale: [4, 6, 3], color: '#20202b' },
    { position: [9, 1, -12], scale: [5, 8, 3], color: '#191b27' },
    { position: [13, 0, -10], scale: [5, 6, 3], color: '#22212b' },
    { position: [-15, -1, -15], scale: [6, 9, 4], color: '#11131c' },
    { position: [16, -1, -15], scale: [6, 9, 4], color: '#12141d' },
  ]

  return (
    <group>
      {mountains.map((mountain, index) => (
        <Mountain key={index} {...mountain} />
      ))}
    </group>
  )
}

function Tower({
  position = [0, 0, 0],
  height = 4,
  radius = 0.8,
  color = '#292530',
}) {
  return (
    <group position={position}>
      {/* Main stone tower */}
      <mesh
        position={[0, height / 2, 0]}
        castShadow
        receiveShadow
      >
        <cylinderGeometry
          args={[radius * 0.85, radius, height, 8]}
        />
        <meshStandardMaterial
          color={color}
          roughness={0.9}
          flatShading
        />
      </mesh>

      {/* Lower stone band */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry
          args={[radius * 1.04, radius * 1.08, 0.22, 8]}
        />
        <meshStandardMaterial
          color="#39313d"
          roughness={0.95}
          flatShading
        />
      </mesh>

      {/* Upper stone cornice */}
      <mesh position={[0, height - 0.12, 0]} castShadow>
        <cylinderGeometry
          args={[radius * 1.08, radius * 0.98, 0.25, 8]}
        />
        <meshStandardMaterial
          color="#39313d"
          roughness={0.9}
          flatShading
        />
      </mesh>

      {/* Dark roof base */}
      <mesh position={[0, height + 0.12, 0]} castShadow>
        <cylinderGeometry
          args={[radius * 1.2, radius * 1.2, 0.18, 8]}
        />
        <meshStandardMaterial
          color="#211c29"
          roughness={0.9}
          flatShading
        />
      </mesh>

      {/* Tall pointed gothic spire */}
      <mesh
        position={[0, height + 0.95, 0]}
        castShadow
      >
        <coneGeometry
          args={[radius * 1.3, 1.75, 8]}
        />
        <meshStandardMaterial
          color="#17151e"
          roughness={0.8}
          flatShading
        />
      </mesh>

      {/* Subtle spire finial */}
      <mesh position={[0, height + 1.88, 0]}>
        <sphereGeometry args={[0.055, 8, 8]} />
        <meshStandardMaterial
          color="#9a7858"
          metalness={0.35}
          roughness={0.6}
        />
      </mesh>

      {/* Dark window frame */}
      <mesh
        position={[0, height * 0.65, radius * 0.94]}
      >
        <boxGeometry args={[0.23, 0.55, 0.07]} />
        <meshStandardMaterial
          color="#17141d"
          roughness={1}
        />
      </mesh>

      {/* Warm illuminated window */}
      <mesh
        position={[0, height * 0.65, radius * 0.99]}
      >
        <boxGeometry args={[0.12, 0.4, 0.035]} />
        <meshBasicMaterial
          color="#ffd49a"
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

function WindowGlow() {
  const materialRef = useRef(null)

  useFrame((state) => {
    if (!materialRef.current) return

    materialRef.current.opacity =
      0.07 + Math.sin(state.clock.elapsedTime * 1.5) * 0.035
  })

  return (
    <mesh position={[0, 0, -0.025]}>
      <planeGeometry args={[0.55, 0.95]} />
      <meshBasicMaterial
        ref={materialRef}
        color="#d69a58"
        transparent
        opacity={0.1}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function Castle() {
  return (
    <group position={[0, -1.7, -7]}>
        
      {/* Cool moonlight outlining the castle */}
      <pointLight
        position={[-5, 7, -3]}
        color="#9ba9e8"
        intensity={1.8}
        distance={16}
        decay={2}
      />

      {/* Soft light across the front stone walls */}
      <pointLight
        position={[0, 3, 0.8]}
        color="#c1b9e0"
        intensity={0.65}
        distance={11}
        decay={2}
      />

      {/* Warm light near the entrance */}
      <pointLight
        position={[0, 1.2, 2.2]}
        color="#d69a58"
        intensity={0.8}
        distance={5}
        decay={2}
      />

      {/* Main castle structure */}
      <mesh
        position={[0, 2.3, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[5.5, 4.6, 2.8]} />
        <meshStandardMaterial
          color="#24212c"
          roughness={0.92}
        />
      </mesh>

      {/* Central roof */}
      <mesh position={[0, 5.1, 0]} castShadow>
        <coneGeometry args={[3.5, 2.2, 4]} />
        <meshStandardMaterial
          color="#17151e"
          roughness={0.9}
          flatShading
        />
      </mesh>

      {/* Front wall battlements */}
      {Array.from({ length: 9 }, (_, i) => (
        <mesh
          key={`front-battlement-${i}`}
          position={[-2.35 + i * 0.59, 4.72, 1.43]}
          castShadow
        >
          <boxGeometry args={[0.32, 0.48, 0.3]} />
          <meshStandardMaterial
            color="#302b39"
            roughness={0.95}
          />
        </mesh>
      ))}

      {/* Left wall battlements */}
      {Array.from({ length: 5 }, (_, i) => (
        <mesh
          key={`left-battlement-${i}`}
          position={[-2.85, 4.72, -1 + i * 0.55]}
          castShadow
        >
          <boxGeometry args={[0.3, 0.48, 0.3]} />
          <meshStandardMaterial
            color="#292633"
            roughness={0.95}
          />
        </mesh>
      ))}

      {/* Right wall battlements */}
      {Array.from({ length: 5 }, (_, i) => (
        <mesh
          key={`right-battlement-${i}`}
          position={[2.85, 4.72, -1 + i * 0.55]}
          castShadow
        >
          <boxGeometry args={[0.3, 0.48, 0.3]} />
          <meshStandardMaterial
            color="#292633"
            roughness={0.95}
          />
        </mesh>
      ))}

      {/* Front entrance */}
      <mesh position={[0, 1.2, 1.43]}>
        <boxGeometry args={[0.85, 1.8, 0.12]} />
        <meshStandardMaterial
          color="#0b0b12"
          roughness={1}
        />
      </mesh>

      {/* Entrance arch detail */}
      <mesh position={[0, 2.05, 1.48]}>
        <torusGeometry args={[0.43, 0.09, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#4b3b35" roughness={1} />
      </mesh>

      {/* Main towers */}
      <Tower
        position={[-2.5, 0, 1]}
        height={5}
        radius={0.75}
        color="#302a34"
      />

      <Tower
        position={[2.5, 0, 1]}
        height={5}
        radius={0.75}
        color="#302a34"
      />

      <Tower
        position={[-2.5, 0, -1]}
        height={6.4}
        radius={0.65}
        color="#25222d"
      />

      <Tower
        position={[2.5, 0, -1]}
        height={6.4}
        radius={0.65}
        color="#25222d"
      />

      {/* Tall central spire */}
      <Tower
        position={[0, 0, -0.5]}
        height={7}
        radius={0.55}
        color="#312a36"
      />

      {/* Side wings */}
      <mesh position={[-4, 1.2, -0.5]} castShadow>
        <boxGeometry args={[2.8, 2.8, 2.3]} />
        <meshStandardMaterial
          color="#211f29"
          roughness={1}
        />
      </mesh>

      <mesh position={[4, 1.2, -0.5]} castShadow>
        <boxGeometry args={[2.8, 2.8, 2.3]} />
        <meshStandardMaterial
          color="#211f29"
          roughness={1}
        />
      </mesh>

      <Tower
        position={[-4, 0, 0.4]}
        height={3.5}
        radius={0.45}
      />

      <Tower
        position={[4, 0, 0.4]}
        height={3.5}
        radius={0.45}
      />

      {/* Soft amber glow behind the castle windows */}
      {[-1.7, -0.85, 0.85, 1.7].map((x) => (
        <group key={`window-${x}`} position={[x, 2.7, 1.44]}>
          {/* Animated outer window glow */}
          <WindowGlow />

          {/* Inner illuminated window */}
          <mesh>
            <boxGeometry args={[0.19, 0.55, 0.06]} />
            <meshBasicMaterial
              color="#ffd49a"
              toneMapped={false}
            />
          </mesh>

          {/* Dark stone window frame */}
          <mesh position={[0, 0, 0.035]}>
            <boxGeometry args={[0.27, 0.65, 0.025]} />
            <meshStandardMaterial
              color="#39303a"
              roughness={0.95}
            />
          </mesh>

          {/* Recessed window visible inside the frame */}
          <mesh position={[0, 0, 0.05]}>
            <boxGeometry args={[0.16, 0.53, 0.02]} />
            <meshBasicMaterial
              color="#ffd49a"
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}


      {/* Castle platform */}
      <mesh
        position={[0, -0.3, 0]}
        receiveShadow
      >
        <boxGeometry args={[12, 0.6, 5]} />
        <meshStandardMaterial
          color="#181720"
          roughness={1}
        />
      </mesh>
    </group>
  )
}

function Ground() {
  return (
    <group>
      {/* Main dark terrain */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.15, -2]}
        receiveShadow
      >
        <planeGeometry args={[200, 200, 32, 32]} />
        <meshStandardMaterial
          color="#090a11"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Distant rocky formations */}
      <Mountain
        position={[-8, -1.4, 2]}
        scale={[3, 2, 2]}
        color="#11121b"
      />

      <Mountain
        position={[8, -1.6, 1]}
        scale={[3.5, 2.5, 2]}
        color="#14141e"
      />

      {/* Additional rocks on the left */}
      <Mountain
        position={[-11, -1.9, 5]}
        scale={[2.2, 1.4, 1.5]}
        color="#0c0d15"
      />

      <Mountain
        position={[-6, -2, 7]}
        scale={[1.8, 1.1, 1.4]}
        color="#171520"
      />

      {/* Additional rocks on the right */}
      <Mountain
        position={[11, -1.8, 4]}
        scale={[2.5, 1.7, 1.8]}
        color="#0d0e16"
      />

      <Mountain
        position={[6.5, -2, 7]}
        scale={[2, 1.2, 1.5]}
        color="#171520"
      />

      {/* Subtle amber light on the terrain */}
      <pointLight
        position={[0, -0.4, 4]}
        color="#a66a42"
        intensity={0.65}
        distance={13}
        decay={2}
      />

      {/* Cool moonlight across the foreground */}
      <pointLight
        position={[-5, 1, 5]}
        color="#747da9"
        intensity={0.4}
        distance={18}
        decay={2}
      />
    </group>
  )
}

function FloatingParticles({ animate = true }) {
  const pointsRef = useRef(null)

  // Use fewer particles on smaller screens.
  const particleCount =
    typeof window !== 'undefined' && window.innerWidth < 768
      ? 100
      : 200

  const particleData = useRef(null)

  if (!particleData.current) {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const speeds = new Float32Array(particleCount)
    const phases = new Float32Array(particleCount)

    const amber = new THREE.Color('#d69a58')
    const moonlight = new THREE.Color('#a8b8e8')
    const paleGold = new THREE.Color('#f0d9b2')

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      positions[i3] = (Math.random() - 0.5) * 35
      positions[i3 + 1] = Math.random() * 15 - 3
      positions[i3 + 2] = (Math.random() - 0.5) * 25 - 3

      const colorChoice = Math.random()

      const color =
        colorChoice < 0.55
          ? amber
          : colorChoice < 0.85
            ? moonlight
            : paleGold

      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      speeds[i] = 0.015 + Math.random() * 0.045
      phases[i] = Math.random() * Math.PI * 2
    }

    particleData.current = {
      positions,
      colors,
      speeds,
      phases,
    }
  }

  const {
    positions,
    colors,
    speeds,
    phases,
  } = particleData.current

  useFrame((state, delta) => {
    if (!animate || !pointsRef.current) return

    const positionAttribute =
      pointsRef.current.geometry.attributes.position

    const positionArray = positionAttribute.array
    const time = state.clock.elapsedTime

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      // Gentle upward movement.
      positionArray[i3 + 1] += speeds[i] * delta

      // Gradual sideways drift.
      const drift =
        Math.sin(time * 0.35 + phases[i]) * 0.035

      positionArray[i3] += drift * delta

      // Recycle particles that rise out of view.
      if (positionArray[i3 + 1] > 12) {
        positionArray[i3 + 1] = -3
        positionArray[i3] = (Math.random() - 0.5) * 35
      }
    }

    positionAttribute.needsUpdate = true

    // Keep the depth rotation subtle.
    pointsRef.current.rotation.y =
      Math.sin(time * 0.08) * 0.035
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particleCount}
          itemSize={3}
        />

        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        vertexColors
        size={0.045}
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function AtmosphericFog() {
  const fogRef1 = useRef(null)
  const fogRef2 = useRef(null)
  const fogRef3 = useRef(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (fogRef1.current) {
      fogRef1.current.position.x = Math.sin(time * 0.12) * 1.2
      fogRef1.current.material.opacity =
        0.09 + Math.sin(time * 0.45) * 0.015
    }

    if (fogRef2.current) {
      fogRef2.current.position.x = Math.sin(time * 0.09 + 2) * 1.8
      fogRef2.current.material.opacity =
        0.065 + Math.sin(time * 0.35 + 1) * 0.012
    }

    if (fogRef3.current) {
      fogRef3.current.position.x = Math.sin(time * 0.15 + 4) * 0.8
      fogRef3.current.material.opacity =
        0.035 + Math.sin(time * 0.5 + 2) * 0.01
    }
  })

  return (
    <group>
      {/* Main drifting mist */}
      <mesh
        ref={fogRef1}
        position={[0, -0.4, -4]}
      >
        <planeGeometry args={[35, 9]} />
        <meshBasicMaterial
          color="#8589ad"
          transparent
          opacity={0.09}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Distant moonlit mist */}
      <mesh
        ref={fogRef2}
        position={[0, 1, -10]}
      >
        <planeGeometry args={[45, 12]} />
        <meshBasicMaterial
          color="#707594"
          transparent
          opacity={0.065}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Subtle amber mist */}
      <mesh
        ref={fogRef3}
        position={[0, 0.2, -6]}
      >
        <planeGeometry args={[25, 5]} />
        <meshBasicMaterial
          color="#b77b50"
          transparent
          opacity={0.035}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

function CameraController() {
  const target = useRef({ x: 0, y: 0 })
  const lookAtTarget = useRef(new THREE.Vector3(0, 1, -5))

  useEffect(() => {
    const handlePointerMove = (event) => {
      const mobileScale = window.innerWidth < 768 ? 0.4 : 1

      target.current.x =
        ((event.clientX / window.innerWidth) - 0.5) * (2 * 0.5 * mobileScale)

      target.current.y =
        ((event.clientY / window.innerHeight) - 0.5) * (2 * 0.22 * mobileScale)
    }

    const handlePointerLeave = () => {
      target.current.x = 0
      target.current.y = 0
    }

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    })

    window.addEventListener('blur', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('blur', handlePointerLeave)
    }
  }, [])

  useFrame(({ camera, clock }, delta) => {
    const time = clock.elapsedTime
    const factor = 1 - Math.exp(-delta * 2)

    const desiredX =
      target.current.x + Math.sin(time * 0.18) * 0.035

    const desiredY =
      1.5 + target.current.y + Math.sin(time * 0.14) * 0.025

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      desiredX,
      factor,
    )

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      desiredY,
      factor,
    )

    camera.lookAt(lookAtTarget.current)
  })

  return null
}

function useAnimationPreferences() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [pageVisible, setPageVisible] = useState(
    typeof document === 'undefined' || !document.hidden,
  )

  useEffect(() => {
    const motionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    const updateMotion = () => {
      setReducedMotion(motionQuery.matches)
    }

    const updateVisibility = () => {
      setPageVisible(!document.hidden)
    }

    updateMotion()
    updateVisibility()

    motionQuery.addEventListener('change', updateMotion)
    document.addEventListener('visibilitychange', updateVisibility)

    return () => {
      motionQuery.removeEventListener('change', updateMotion)
      document.removeEventListener('visibilitychange', updateVisibility)
    }
  }, [])

  return { reducedMotion, pageVisible }
}

function Scene() {
  const { reducedMotion, pageVisible } = useAnimationPreferences()

  const animationsEnabled = pageVisible && !reducedMotion

  return (
    <>
      <color attach="background" args={['#07080d']} />
      <fog attach="fog" args={['#10121d', 14, 46]} />

      <ambientLight intensity={0.28} color="#a8abc8" />

      <directionalLight
        position={[-7, 10, 5]}
        intensity={2.4}
        color="#c5c8e8"
      />

      <directionalLight
        position={[7, 5, -8]}
        intensity={1.1}
        color="#777baf"
      />

      <pointLight
        position={[0, 3, 1.8]}
        intensity={2.6}
        distance={15}
        decay={2}
        color="#d69a58"
      />

      <pointLight
        position={[0, -0.5, 7]}
        intensity={0.4}
        distance={16}
        decay={2}
        color="#51435a"
      />

      <pointLight
        position={[-4, 8, -3]}
        intensity={0.65}
        distance={22}
        decay={2}
        color="#929bd8"
      />

      
      <Stars
        radius={70}
        depth={40}
        count={600}
        factor={2.4}
        saturation={0}
        fade
        speed={animationsEnabled ? 0.15 : 0}
      />



      <Moon />
      <Mountains />
      <Castle />
      <Ground />

      <AtmosphericFog/>

      <Float
        speed={animationsEnabled ? 0.25 : 0}
        rotationIntensity={animationsEnabled ? 0.01 : 0}
        floatIntensity={animationsEnabled ? 0.06 : 0}
      >
        <FloatingParticles
          animate={animationsEnabled}
        />
      </Float>

      <CameraController/>
    </>
  )
}

export default function World3D() {
  const isMobile =
    typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <Canvas
      camera={{
        position: [0, 1.5, 12],
        fov: 48,
        near: 0.1,
        far: 150,
      }}
      dpr={isMobile ? 1 : [1, 1.25]}
      gl={{
        antialias: !isMobile,
        alpha: false,
        powerPreference: 'high-performance',
      }}
      performance={{
        min: 0.5,
      }}
      style={{
        touchAction: 'pan-y',
      }}
      onCreated={({ gl }) => {
        gl.setClearColor('#08090d', 1)
      }}
    >
      <Scene />
    </Canvas>
  )
}