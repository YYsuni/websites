'use client'

import { Canvas, useLoader } from '@react-three/fiber'
import src_geom from './a glass of water.gltf'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Environment, Lightformer, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'

export default function Main() {
	const gltf = useLoader(GLTFLoader as any, src_geom)

	const config = useControls({
		backside: false,
		samples: { value: 20, min: 1, max: 32, step: 1 },
		resolution: { value: 1024, min: 64, max: 2048, step: 64 },
		transmission: { value: 0.95, min: 0, max: 1 },
		roughness: { value: 0.01, min: 0, max: 1, step: 0.01 },
		clearcoat: { value: 0.1, min: 0, max: 1, step: 0.01 },
		clearcoatRoughness: { value: 0.15, min: 0, max: 1, step: 0.01 },
		thickness: { value: 30, min: 0, max: 200, step: 0.01 },
		backsideThickness: { value: 50, min: 0, max: 200, step: 0.01 },
		ior: { value: 1, min: 1, max: 5, step: 0.01 },
		chromaticAberration: { value: 0.1, min: 0, max: 1 },
		anisotropy: { value: 1, min: 0, max: 10, step: 0.01 },
		distortion: { value: 0, min: 0, max: 1, step: 0.01 },
		distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
		temporalDistortion: { value: 0.1, min: 0, max: 1, step: 0.01 },
		attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
		toneMapped: false,
		renderOrder: 100
	})

	return (
		<main className='h-screen'>
			<Canvas orthographic camera={{ position: [0, 5, 10], near: 0.1, far: 1000, zoom: 200 }}>
				<color attach='background' args={['#DFDDF5']} />
				<directionalLight castShadow intensity={1} position={[0, 20, 20]} />
				<ambientLight />
				<OrbitControls />

				<mesh geometry={gltf.nodes.glass.geometry} position={[0, -1, 0]}>
					<MeshTransmissionMaterial {...config} />
				</mesh>

				{/* <Environment background blur={0} preset='apartment' /> */}
			</Canvas>
		</main>
	)
}
