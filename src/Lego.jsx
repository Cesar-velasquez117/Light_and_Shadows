import { useTexture } from "@react-three/drei";


export default function Lego() {
    const PATH = "/static/textures/lego/"
    const props = useTexture({
        map: PATH + 'color_Blue.jpg',
        //displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
    })
    return (
        <mesh castShadow>
            <boxGeometry args={[1, 1, 2]} />
            <meshStandardMaterial {...props} />
        </mesh>
    )
}