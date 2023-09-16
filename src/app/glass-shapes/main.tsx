'use client'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import src_geom from './geometries.gltf'

import { Canvas } from '@react-three/fiber'
import {
	Environment,
	Float,
	Lightformer,
	MeshTransmissionMaterial,
	OrbitControls,
	PivotControls,
	useHelper
} from '@react-three/drei'
import { useControls } from 'leva'
import { useRef } from 'react'
import { Mesh } from 'three'
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper.js'

export default function Main() {
	return (
		<main className='fixed inset-0'>
			<Canvas orthographic shadows='soft' camera={{ fov: 75, near: 0.1, far: 10000, position: [40, -10, 50], zoom: 6 }}>
				<color attach='background' args={['#fef4ef']} />
				<ambientLight intensity={1} />
				<pointLight />

				<directionalLight castShadow intensity={0.8} position={[0, 0, 20]} />

				<OrbitControls />

				<Scence />

				<Environment resolution={256}>
					<Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 2, -4]} scale={[2, 2, 1]} />
					{[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
						<Lightformer
							key={i}
							form='circle'
							intensity={4}
							rotation={[Math.PI / 2, 0, 0]}
							position={[x, 4, i * 4]}
							scale={[4, 1, 1]}
						/>
					))}
					<Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
					<Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
					<Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
				</Environment>
			</Canvas>
		</main>
	)
}

function Scence() {
	const gltf = useLoader(GLTFLoader as any, src_geom)

	const meshRef = useRef<Mesh>(null!)
	useHelper(meshRef, VertexNormalsHelper)

	const config = useControls({
		backside: false,
		samples: { value: 20, min: 1, max: 32, step: 1 },
		resolution: { value: 1024, min: 64, max: 2048, step: 64 },
		transmission: { value: 0.95, min: 0, max: 1 },
		roughness: { value: 0.35, min: 0, max: 1, step: 0.01 },
		clearcoat: { value: 0.1, min: 0, max: 1, step: 0.01 },
		clearcoatRoughness: { value: 0.15, min: 0, max: 1, step: 0.01 },
		thickness: { value: 30, min: 0, max: 200, step: 0.01 },
		backsideThickness: { value: 50, min: 0, max: 200, step: 0.01 },
		ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
		chromaticAberration: { value: 1, min: 0, max: 1 },
		anisotropy: { value: 1, min: 0, max: 10, step: 0.01 },
		distortion: { value: 0.1, min: 0, max: 1, step: 0.01 },
		distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
		temporalDistortion: { value: 0.1, min: 0, max: 1, step: 0.01 },
		attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
		toneMapped: false,
		renderOrder: 100
	})

	const floatConfig = {
		floatIntensity: 30,
		rotationIntensity: 0,
		speed: 2
	}

	return (
		<>
			<Float {...floatConfig}>
				<mesh geometry={gltf.nodes.geometry.geometry} position={[-40, 60, -20]}>
					<MeshTransmissionMaterial color='#FF718F' {...config} />
				</mesh>
			</Float>

			<Float {...floatConfig}>
				<mesh geometry={gltf.nodes.geometry.geometry} position={[-70, 40, -30]} scale={1.2}>
					<MeshTransmissionMaterial color='#29C1A2' {...config} />
				</mesh>
			</Float>

			<Float {...floatConfig}>
				<mesh geometry={gltf.nodes.geometry.geometry} position={[-20, 10, -20]} scale={1.5}>
					<MeshTransmissionMaterial color='#FF9060' {...config} />
				</mesh>
			</Float>

			<Float {...floatConfig}>
				<mesh geometry={gltf.nodes.geometry2.geometry} position={[-30, -20, 0]} scale={1.2}>
					<MeshTransmissionMaterial color='#823FFF' {...config} />
				</mesh>
			</Float>

			<Float {...floatConfig}>
				<mesh geometry={gltf.nodes.geometry3.geometry} position={[30, 15, 0]} scale={1.2}>
					<MeshTransmissionMaterial color='skyblue' {...config} />
				</mesh>
			</Float>

			<Float {...floatConfig}>
				<mesh geometry={gltf.nodes.geometry4.geometry} position={[0, 0, 15]} scale={1.1}>
					<MeshTransmissionMaterial {...config} color='#fef4ef' toneMapped />
				</mesh>
			</Float>
		</>
	)
}
