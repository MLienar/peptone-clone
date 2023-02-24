import React from 'react'

export default function Experience() {
  return (
    <>
  <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />

    <color attach="background" args={["darkblue"]}/>
    <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1 , 1]}/>
        <meshBasicMaterial color="blue"/>
    </mesh>
    </>
  )
}
