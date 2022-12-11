import { useGLTF, useAnimations} from "@react-three/drei"
import {useEffect} from 'react'

function Mailbox(props) {
    const { position } = props;

    const mailbox = useGLTF("./models/mailbox/scene.gltf")
    const animations = useAnimations(mailbox.animations, mailbox.scene)
    useEffect(() => {
        const action = animations.actions['Take 001']
        action.play()
    console.log(animations)
    })

    return <primitive object={mailbox.scene} scale={4} position={position} />
}

export default Mailbox
