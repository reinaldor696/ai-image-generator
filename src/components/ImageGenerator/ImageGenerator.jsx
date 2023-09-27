import React from 'react'
import './ImageGenerator.css'
import de_image from '../assets/de_image.jpg' 

const ImageGenerator = () => {
    return (
        <>
            <div className='ai-image-generator'>
                <div className='header'>Ai <span>image</span> generator</div>
                <div className='img-loading'>
                    <div className='image'><img src={de_image} alt="" /></div>

                </div>
            </div>
            <div className="search-box">
                <input type="text" className='search-input' placeholder='Write What you want to see' />
                <div className="generate-btn">Generate</div>
            </div>
        </>
    )
}

export default ImageGenerator