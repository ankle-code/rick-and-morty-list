import './style.css'

const ImageCard = (props) => {
    return <div className="image" style={{backgroundImage: `url(${props.src})`}}></div>
}

export default ImageCard