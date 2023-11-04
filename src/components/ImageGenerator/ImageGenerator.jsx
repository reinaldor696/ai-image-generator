import React, { useRef, useState } from 'react'
import "./ImageGenerator.css"
import de_image from "../assets/de_image.jpg" 

const ImageGenerator = () => {

    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const imageGenerator = async () =>{
        if(inputRef.current.value==="") {
            return 0; 
        }
        setLoading(true);
        const response = await fetch(   
            "https://api.openai.com/v1/images/generations", 
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:
                    "Bearer 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",
                    "User-Agent":"Chrome",
                },
                body:JSON.stringify({
                    prompt:`${inputRef.current.value}` ,
                    n: 1,
                    size: "600x400",
                }),
            }
        );
        let data = await response.json();
        let data_array = data.data;
        setImage_url(data_array[0].url);
        setLoading(false);
    }

    return (
        <>
            <div className='ai-image-generator'>
                <div className='header'>Ai <span>image</span> generator</div>
                <div className='img-loading'>
                    <div className='image'><img src={image_url==="/"?de_image:image_url} alt="" /></div>
                    <div className='loading'>
                        <div className={loading?"loading-bar-full":"loading-bar"}></div>
                        <div className={loading?"loading-text":"display-none"}>Loading...</div>
                    </div>

                </div>
            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className='search-input' placeholder='Write What you want to see' />
                <div className="generate-btn" onClick={()=>{imageGenerator()}}>Generate</div>
            </div>
        </>
    )
}

export default ImageGenerator