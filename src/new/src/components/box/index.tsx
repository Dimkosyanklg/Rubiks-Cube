import React from 'react'
import usePegatineTextures from '../../hooks/use-pegatine-textures'
import { PegatineColor } from '../../types'

interface BoxProps {
  position: [number, number, number]
  rightColor?: PegatineColor
  leftColor?: PegatineColor
  upColor?: PegatineColor
  downColor?: PegatineColor
  frontColor?: PegatineColor
  backColor?: PegatineColor
}

type MaterialProps = { color: string } | { map: THREE.Texture }

/**
 * material faces: [RIGHT, LEFT, UP, DOWN, FRONT, BACK]
 */
const Box = React.forwardRef<unknown, BoxProps>((props, ref) => {
  // @ts-ignore
  const {
    position,
    rightColor,
    leftColor,
    upColor,
    downColor,
    frontColor,
    backColor
  } = props

  const textures = usePegatineTextures()

  function getMaterialProps(faceColor?: PegatineColor): MaterialProps {
    if (!faceColor) {
      return { color: 'black' }
    }

    return { map: textures[faceColor] as THREE.Texture }
  }

  return (
    // @ts-ignore
    <mesh ref={ref} position={position}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      
      <meshBasicMaterial
        // @ts-ignore
        attachArray="material"
        {...getMaterialProps(rightColor)}
      />
      <meshBasicMaterial
      // @ts-ignore
        attachArray="material"
        {...getMaterialProps(leftColor)}
      />
      <meshBasicMaterial
     // @ts-ignore
        attachArray="material"
        {...getMaterialProps(upColor)}
      />
      <meshBasicMaterial
      // @ts-ignore
        attachArray="material"
        {...getMaterialProps(downColor)}
      />
      <meshBasicMaterial
      // @ts-ignore
        attachArray="material"
        {...getMaterialProps(frontColor)}
      />
      <meshBasicMaterial
      // @ts-ignore
        attachArray="material"
        {...getMaterialProps(backColor)}
      />
    </mesh>
  )
})

Box.displayName = "Box"

export default Box
