/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/speaker2.glb -o src/components/Speaker.jsx -k -K -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Speaker(props) {
  const { nodes, materials } = useGLTF('/models/speaker2.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        
        <mesh name="subwoofer" geometry={nodes.subwoofer.geometry} material={nodes.subwoofer.material} position={[3.178, 2.096, -12.891]} rotation={[-0.003, -0.012, 0.003]} scale={0.215} />
        <mesh name="yellow_speaker" geometry={nodes.yellow_speaker.geometry} material={nodes.yellow_speaker.material} position={[-1.424, 1.396, -17.066]} scale={0.263} />
        <mesh name="red_speaker_" geometry={nodes.red_speaker_.geometry} material={nodes.red_speaker_.material} position={[4.025, 5.162, -7.645]} scale={0.154} />
        <mesh name="purple_speaker" geometry={nodes.purple_speaker.geometry} material={nodes.purple_speaker.material} position={[-2.498, 2.243, 5.376]} scale={0.169} />
        <mesh name="mid_hi_speaker" geometry={nodes.mid_hi_speaker.geometry} material={nodes.mid_hi_speaker.material} position={[10.545, 2.04, 9.04]} rotation={[Math.PI, -1.36, Math.PI]} scale={0.225} />
        <mesh name="yellow_woofer" geometry={nodes.yellow_woofer.geometry} material={nodes.yellow_woofer.material} position={[8.358, -0.17, 4.635]} scale={0.154} />
        <mesh name="bass" geometry={nodes.bass.geometry} material={nodes.bass.material} position={[6.059, 3.186, 1.769]} scale={1.805} />
        <mesh name="mega_bass" geometry={nodes.mega_bass.geometry} material={nodes.mega_bass.material} position={[4.4, 1.053, 1.429]} scale={1.379} />
        <mesh name="multi_speaker" geometry={nodes.multi_speaker.geometry} material={nodes.multi_speaker.material} position={[2.886, 2.351, 8.174]} rotation={[0, 0.456, 0]} scale={0.188} />
        <mesh name="mid_woofer" geometry={nodes.mid_woofer.geometry} material={nodes.mid_woofer.material} position={[1.997, 4.509, -6.185]} scale={0.154} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/speaker2.glb')
