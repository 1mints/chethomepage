'use client'
import Link from 'next/link';
import { useRef,useState } from 'react';



export default function NFT() {

    
    const sampleData = [
       "https://i.imgur.com/UH6aCNv.png",
       "https://i.imgur.com/TGjokot.jpeg",
       "https://i.imgur.com/6YQXHRa.jpeg",
       "https://i.imgur.com/NZsEdFg.jpeg",
       "https://i.imgur.com/uaNxFE0.jpeg",
       "https://i.imgur.com/N45gtvU.jpeg",
       "https://i.imgur.com/90PeuWx.jpeg",
       "https://i.imgur.com/T1H8Nro.jpeg",
       "https://i.imgur.com/HeS3Q4j.jpeg",
       "https://i.imgur.com/WB5K81j.jpeg",
       "https://i.imgur.com/MmTP4oJ.jpeg"

    ]

    const [position,setPosition] = useState(true);
    const containerRef = useRef(null);

    const handleScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer)
            }
            if (element.scrollLeft == 0) {
                setPosition(true);
            } else {
                setPosition(false)
            }
        }, speed)
    }

const right = `>`
const left = `<`
 

    return (
        <div className="relative flex w-full h-screen column overflow-hidden bg-[#161616]">
            <div className="absolute h-10 m-4 text-white">
            <Link href="/">HOME</Link>
            </div>

            <div className="relative h-10 max-w-fit mx-auto m-16 flex text-2xl">
                <div className="text-white">DISPLAY OF OUR COMMUNITY'S</div> <span className="text-[#0FFF00] mx-2"> GENERATIONS</span>
            </div>
            
           
            <div ref={containerRef}
            className="absolute w-full top-[20%] flex h-11/12 mx-auto no-scrollbar overflow-x-scroll scroll-smooth">
            {sampleData.map((name, src)=> (
                <img 
                loading="lazy"
                alt={name}
                src={name}  
                className="mx-4 rounded-3xl h-[500px] w-[500px]"></img>
            ))}

            </div>
            
            <div className="absolute flex top-[75%] mt-6 mx-4 h-10">
            <button className="bg-white rounded-3xl w-16 mx-10 hover:bg-gray-200" onClick={() => {
            handleScroll(containerRef.current, 25, 100, -350);
            }}
          disabled={position}>{left}</button>    
            <button className="bg-white rounded-3xl w-16 hover:bg-gray-200" onClick={() => {
            handleScroll(containerRef.current, 25, 100, 350);
          }}
          >{right}</button>
            </div>
            
            

        </div>
    )
}