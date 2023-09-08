'use client'

import { useRef, useState } from 'react'
import {images} from '../constants/images'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'

const Carousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [current, setCurrent] = useState<number>(0)

    const handleClickNext = () => {
        if(carouselRef.current){
            carouselRef.current.scrollTo({
                left: carouselRef.current.clientWidth * (current + 1),
                behavior:"smooth" 
            })
            setCurrent(prev => prev + 1)
        }
    }

    const handleClickPrevious = () => {
        if(carouselRef.current){
            carouselRef.current.scrollTo({
                left: carouselRef.current.clientWidth * (current - 1),
                behavior:"smooth" 
            })
            setCurrent(prev => prev - 1)
        }
    }

    return (
        <>
            <div ref={carouselRef}
             className='transition-all overflow-hidden h-[100vh] flex'>
                {
                    images.map((image) => (
                        <div className={`
                            flex-shrink-0 
                            flex-grow-0 
                            w-full 
                            h-full
                            `
                        } key={image}>
                            <img src={image} alt={image} className="w-[100vw] h-[100vh] object-cover"/>
                        </div>
                    ))
                }
            </div>
            <button disabled={current === 0} onClick={handleClickPrevious} className={`absolute left-4 top-1/2 p-5 bg-slate-500 opacity-50 rounded-full ${current === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                <FaArrowLeft size={24} color='white'/>
            </button>
            <button disabled={current === images.length-1} onClick={handleClickNext} className={`absolute right-4 top-1/2 p-5 bg-slate-500 opacity-50 rounded-full ${current === images.length-1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                <FaArrowRight size={24} color='white'/>
            </button>
        </>
    )
}

export default Carousel