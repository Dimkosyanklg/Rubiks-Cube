import { animated, useSpring } from '@react-spring/three'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { Color } from 'three'
import { colors } from './contst'
import { Mesh } from './Mesh'
import { Container } from './test.styled'
import { CubeType } from './types'

const distance = 1.05

export const App: React.FC = () => {
    const [cube, setCube] = useState<CubeType>()

    const myMesh = useRef()

    useEffect(() => {
        const getColors = (i: number, j: number, k: number) => {
            const sideCount = [0, 1, 2, 3, 4, 5]
            const side: Record<number, string> = {}

            // first i-teration
            if (i === 0) {
                side[5] = colors.white

                if (j === 2) {
                    side[2] = colors.red
                }
                if (j === 0) {
                    side[3] = colors.orange
                }
                if (k === 0) {
                    side[1] = colors.green
                }
                if (k === 2) {
                    side[0] = colors.blue
                }
            }

            //second i-teration
            if (i === 1) {
                if (j === 2) {
                    side[2] = colors.red
                }
                if (j === 0) {
                    side[3] = colors.orange
                }
                if (k === 0) {
                    side[1] = colors.green
                }
                if (k === 2) {
                    side[0] = colors.blue
                }
            }

            //third i-teration
            if (i === 2) {
                side[4] = colors.yellow

                if (j === 2) {
                    side[2] = colors.red
                }
                if (j === 0) {
                    side[3] = colors.orange
                }
                if (k === 0) {
                    side[1] = colors.green
                }
                if (k === 2) {
                    side[0] = colors.blue
                }
            }

            sideCount.forEach((count) => {
                if (!Object.keys(side).includes(count.toString())) {
                    side[count] = colors.black
                }
            })

            return side
        }

        const cube: CubeType = []

        for (let i = 0; i <= 2; i++) {
            cube[i] = [...(cube[i] ?? [])]
            for (let j = 0; j <= 2; j++) {
                cube[i][j] = [...(cube[i][j] ?? [])]
                for (let k = 0; k <= 2; k++) {
                    cube[i][j][k] = getColors(i, j, k)
                }
            }
        }

        setCube(cube)
    }, [])

    const [springs, api] = useSpring(
        () => ({
            scale: 1,
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            color: '#ff6d6d',
            config: (key) => {
                switch (key) {
                    case 'position':
                        return { duration: 1000 }
                    case 'rotation':
                        return { duration: 1000 }
                    default:
                        return {}
                }
            },
        }),
        [],
    )

    const handlePointerEnter = () => {
        api.start({
            position: [2, 0, 0],
            rotation: [0, Math.PI / 4, 0],
        })
        api.start({
            position: [2, 0, 2],
            rotation: [0, Math.PI / 4, 0],
        })
    }

    const handlePointerLeave = () => {
        api.start({
            position: [0, 0, 0],
            rotation: [0, 0, 0],
        })
    }

    return (
        <Container>
            <Canvas>
                <ambientLight intensity={1} />
                {/* <animated.mesh
                    onPointerEnter={handlePointerEnter}
                    // onPointerLeave={handlePointerLeave}
                    scale={1}
                    position={springs.position.to((x, y, z) => [x, y, z])}
                    // @ts-ignore
                    rotation={springs.rotation.to((x, y, z) => [x, y, z])}
                >
                    <boxGeometry attach="geometry" args={[1, 1, 1]} />

                    <meshBasicMaterial attach={`material-0`} color="black" />
                    <meshBasicMaterial attach={`material-1`} color="red" />
                    <meshBasicMaterial attach={`material-2`} color="green" />
                    <meshBasicMaterial attach={`material-3`} color="blue" />
                    <meshBasicMaterial attach={`material-4`} color="white" />
                    <meshBasicMaterial attach={`material-5`} color="yellow" />
                </animated.mesh> */}
                {cube?.map((dimension1, index1) =>
                    dimension1.map((dimension2, index2) =>
                        dimension2.map((dimension3, index3) => (
                            <Mesh
                                dimension3={dimension3}
                                distance={distance}
                                index1={index1}
                                index2={index2}
                                index3={index3}
                                myMesh={myMesh}
                            />
                        )),
                    ),
                )}
                {/* <mesh scale={1} position={[-1.1, 0, 0]}>
                    <boxGeometry attach="geometry" args={[1, 1, 1]} />
                    {Object.values(colors).map((color, index) => (
                        <meshBasicMaterial attach={`material-${index}`} color={color} />
                    ))}
                </mesh>
                <mesh scale={1} position={[0, 0, 0]}>
                    <boxGeometry attach="geometry" args={[1, 1, 1]} />
                    {Object.values(colors).map((color, index) => (
                        <meshBasicMaterial attach={`material-${index}`} color={color} />
                    ))}
                </mesh>
                <mesh scale={1} position={[1.1, 0, 0]}>
                    <boxGeometry attach="geometry" args={[1, 1, 1]} />
                    {Object.values(colors).map((color, index) => (
                        <meshBasicMaterial attach={`material-${index}`} color={color} />
                    ))}
                </mesh>

                <mesh scale={1} position={[-1.1, 1.1, 0]}>
                    <boxGeometry attach="geometry" args={[1, 1, 1]} />
                    {Object.values(colors).map((color, index) => (
                        <meshBasicMaterial attach={`material-${index}`} color={color} />
                    ))}
                </mesh>
                <mesh scale={1} position={[0, 1.1, 0]}>
                    <boxGeometry attach="geometry" args={[1, 1, 1]} />
                    {Object.values(colors).map((color, index) => (
                        <meshBasicMaterial attach={`material-${index}`} color={color} />
                    ))}
                </mesh>
                <mesh scale={1} position={[1.1, 1.1, 0]}>
                    <boxGeometry attach="geometry" args={[1, 1, 1]} />
                    {Object.values(colors).map((color, index) => (
                        <meshBasicMaterial attach={`material-${index}`} color={color} />
                    ))}
                </mesh>

                <mesh scale={1} position={[-1.1, 2.2, 0]}>
                    <boxGeometry attach="geometry" args={[1, 1, 1]} />
                    {Object.values(colors).map((color, index) => (
                        <meshBasicMaterial attach={`material-${index}`} color={color} />
                    ))}
                </mesh>
                <mesh scale={1} position={[0, 2.2, 0]}>
                    <boxGeometry attach="geometry" args={[1, 1, 1]} />
                    {Object.values(colors).map((color, index) => (
                        <meshBasicMaterial attach={`material-${index}`} color={color} />
                    ))}
                </mesh>
                <mesh scale={1} position={[1.1, 2.2, 0]}>
                    <boxGeometry attach="geometry" args={[1, 1, 1]} />
                    {Object.values(colors).map((color, index) => (
                        <meshBasicMaterial attach={`material-${index}`} color={color} />
                    ))}
                </mesh> */}
                <OrbitControls />
            </Canvas>
        </Container>
    )
}
