import React from 'react'

export default function Gif({ gifLink }){

    return (
        <>
        <div>IT WORKS</div>
            <img src={gifLink.images.original.url} alt="" />
            </>
        
    
    );
}