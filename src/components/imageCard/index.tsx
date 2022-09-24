import React from 'react'
import './style.css'

type ImageCardProps = {
    src: string
}

const ImageCard = (props: ImageCardProps) => {
    return <div className="image" style={{backgroundImage: `url(${props.src})`}}></div>
}

export default ImageCard
