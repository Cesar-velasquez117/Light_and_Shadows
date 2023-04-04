import { OrbitControls, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Lego from './Lego'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper,HemisphereLightHelper, PointLightHelper, SpotLightHelper, RectAreaLightUniformsLib } from 'three'
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';


export default function Experience() {
    const directLightRef = useRef()
    const hemisphereLightRef = useRef()
    const spotLightRef = useRef()
    const pointLightRef = useRef()
    const rectLightRef = useRef()

    //useHelper(directLightRef, DirectionalLightHelper, 1)
    //useHelper(hemisphereLightRef, HemisphereLightHelper,1)
    //useHelper(spotLightRef, SpotLightHelper, 3)
    //useHelper(pointLightRef, PointLightHelper, 1)
    useHelper(rectLightRef, RectAreaLightHelper, 0xff0000)

    return <>
        {/*<Perf position="top-left" />*/}

        <OrbitControls makeDefault />

        {/* <directionalLight ref={directLightRef} castShadow position={[0, 12, -10]} intensity={1.5} /> */}
        {/* <hemisphereLight ref={hemisphereLightRef} position={[0, 5, 0]} intensity={1.5} /> */}
        {/* <spotLight ref={spotLightRef} castShadow position={[0,5,-5]}/> */}
        {/* <pointLight ref={pointLightRef} castShadow position={[1,5,3]}/> */}
        <rectAreaLight ref={rectLightRef} position={[0,0,4]}/>
        <ambientLight intensity={0.5} />
        <Lego/>
        <Floor/>
    </>
}