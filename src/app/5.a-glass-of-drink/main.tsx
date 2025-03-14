'use client'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import src_gltf from './glass.gltf'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Environment, MeshTransmissionMaterial, OrbitControls, useHelper } from '@react-three/drei'
import { useControls } from 'leva'
import { useLayoutEffect, useRef } from 'react'
import { HemisphereLightHelper, PointLightHelper, Vector3 } from 'three'

export default function Main() {
	return (
		<main className='h-screen'>
			<Canvas orthographic camera={{ position: [-10, 20, 100], near: 0.1, far: 1000, zoom: 60 }}>
				<ambientLight intensity={5} />
				<ambientLight intensity={5} color='#fff' />
				<OrbitControls />

				<Sence />
			</Canvas>
		</main>
	)
}

function Sence() {
	const gltf = useLoader(GLTFLoader as any, src_gltf)

	const pointLight = useRef<any>(null)
	const pointLight2 = useRef<any>(null)
	const pointLight3 = useRef<any>(null)
	const rectLight = useRef<any>(null)
	const rectLight2 = useRef<any>(null)
	// useHelper(pointLight3, PointLightHelper, 1)

	// const config = useControls({
	// transmission: { value: 1, min: 0, max: 1 },
	// roughness: { value: 0, min: 0, max: 1, step: 0.01 },
	// thickness: { value: 0.4, min: 0, max: 10, step: 0.01 }
	// ior: { value: 1.3, min: 1, max: 5, step: 0.01 },
	// chromaticAberration: { value: 0.1, min: 0, max: 1 },
	// })

	useLayoutEffect(() => {
		rectLight.current?.lookAt(new Vector3(0, 0, 0))
		rectLight2.current?.lookAt(new Vector3(-4, 0, 4))
	})

	return (
		<>
			<pointLight ref={pointLight} intensity={80} position={[0, -3, -5]} />
			<pointLight ref={pointLight2} intensity={1000} position={[0, 5, -20]} />
			<pointLight ref={pointLight3} intensity={2000} position={[5, 5, 7]} color='#f19132' />

			<rectAreaLight ref={rectLight} intensity={200} position={[0, 30, -1]} />
			<rectAreaLight ref={rectLight2} color='#93f' intensity={200} position={[-8, 3, 8]} />

			<group position={[0, -5, 0]}>
				<mesh geometry={gltf.nodes.floor.geometry}>
					<meshLambertMaterial color='#1F28A4' />
				</mesh>

				<mesh geometry={gltf.nodes.glass.geometry}>
					<MeshTransmissionMaterial
						attenuationDistance={10}
						samples={20}
						resolution={1800}
						distortion={0}
						distortionScale={0}
						temporalDistortion={0}
						roughness={0.1}
						color='white'
						ior={1.5}
						thickness={0.4}
					/>
				</mesh>
				<mesh geometry={gltf.nodes.liquid.geometry}>
					<meshPhysicalMaterial transmission={1} roughness={0} color='#F19CEC' ior={1.3} thickness={0.45} />
				</mesh>

				<mesh geometry={gltf.nodes.ice.geometry}>
					<meshPhysicalMaterial transmission={1} roughness={0} ior={1.4} thickness={0.3} />
				</mesh>
				<mesh geometry={gltf.nodes.ice2.geometry}>
					<MeshTransmissionMaterial
						attenuationDistance={100}
						samples={16}
						resolution={1024}
						distortion={0}
						distortionScale={0}
						temporalDistortion={0}
						transmission={1}
						roughness={0}
						ior={1.1}
					/>
				</mesh>

				<mesh geometry={gltf.nodes.bubble.geometry}>
					<MeshTransmissionMaterial
						attenuationDistance={100}
						samples={16}
						resolution={1024}
						distortion={0}
						distortionScale={0}
						temporalDistortion={0}
						transmission={1}
						roughness={0}
						ior={1.1}
						thickness={0.3}
					/>
				</mesh>
				<mesh geometry={gltf.nodes.bubble2.geometry}>
					<MeshTransmissionMaterial
						attenuationDistance={100}
						samples={16}
						resolution={1024}
						distortion={0}
						distortionScale={0}
						temporalDistortion={0}
						transmission={1}
						roughness={0}
						ior={1.1}
						thickness={0.3}
					/>
				</mesh>
				<mesh geometry={gltf.nodes.bubble3.geometry}>
					<MeshTransmissionMaterial
						attenuationDistance={100}
						samples={16}
						resolution={1024}
						distortion={0}
						distortionScale={0}
						temporalDistortion={0}
						transmission={1}
						roughness={0}
						ior={1.1}
						thickness={0.3}
					/>
				</mesh>

				<mesh geometry={gltf.nodes.straw.geometry}>
					<meshPhysicalMaterial roughness={0.3} color='#54d2d4' clearcoat={0.2} />
				</mesh>

				<mesh geometry={gltf.nodes.ball.geometry}>
					<meshLambertMaterial color='#E7A140' />
				</mesh>
				<mesh geometry={gltf.nodes.ball2.geometry}>
					<meshLambertMaterial color='#E75A6B' />
				</mesh>
			</group>
		</>
	)
}
