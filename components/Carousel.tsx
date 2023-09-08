import {images} from '../constants/images'

const Carousel = () => {
    return (
        <div className='flex flex-col gap-4'>
            {
                images.map(image => <img src={image} alt="img"/>)
            }
        </div>
    )
}

export default Carousel