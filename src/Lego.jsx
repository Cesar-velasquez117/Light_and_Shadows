import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Lego() {
    const PATH = "/static/textures/lego/"
    const props = useTexture({
        map: PATH + 'color_Blue.jpg',
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
    })
    return (
        <mesh>
            <boxGeometry args={[1, 1, 2]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}