import { useSpring } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import { CubeType } from './types'

type Props = {
    distance: number
    index1: number
    index2: number
    index3: number
    myMesh: any
    dimension3: Record<number, string>
}

export const Mesh: React.FC<Props> = ({ distance, index1, index2, index3, myMesh, dimension3 }) => {
    const test = index3 === 0 && index2 === 0 && index1 === 0 ? { ref: myMesh } : {}

    const {} = useSpring({})

    useFrame(({ clock }) => {
        if ({ myMesh }) {
            const t = clock.getElapsedTime() * 0.5
            myMesh.current.position.x = Math.sin(t) - 1.1
            myMesh.current.position.z = Math.cos(t) - 1.1
            // myMesh.current.rotation.y = Math.PI * 2 * t
        }
    })

    return (
        <mesh
            {...test}
            scale={1}
            position={[-distance + distance * index3, -distance + distance * index2, -distance + distance * index1]}
        >
            <boxGeometry attach="geometry" args={[1, 1, 1]} />
            {Object.values(dimension3).map((color, index) => (
                <meshBasicMaterial attach={`material-${index}`} color={color} />
            ))}
        </mesh>
    )
}
