'use client'
import Link from 'next/link';
import { useRef,useState } from 'react';



export default function NFT() {
    const className= "";
    const itemwidth = 300;
    
    const sampleData = [
        {className: "rounded-3xl w-[300px] h-[400px] bg-black mx-4"},
        {className: "w-[300px] h-[400px] bg-neutral-100 mx-4"},
        {className: "w-[300px] h-[400px] bg-neutral-200 mx-4"},
        {className: "w-[300px] h-[400px] bg-neutral-300 mx-4"},
        {className: "rounded-3xl w-[300px] h-[400px] bg-black mx-4"},
        {className: "w-[300px] h-[400px] bg-neutral-100 mx-4"},
        {className: "w-[300px] h-[400px] bg-neutral-200 mx-4"},
        {className: "w-[300px] h-[400px] bg-neutral-300 mx-4"},
    ]

    const [position,setPosition] = useState(0);
    const containerRef = useRef();

    function handleClick(value) {
        let newScroll = position + value;
        setPosition(newScroll)
        containerRef.current.scrollLeft = newScroll;
    }
 

    return (
        <div className="relative flex w-full h-screen column overflow-hidden bg-white">
            <div className="absolute h-10 m-4">
            <Link href="/">Back to home</Link>
            </div>
            
           
            <div ref={containerRef}
            className="absolute mx-auto top-[20%] flex h-11/12 w-[3000x] overflow-x-scroll scroll-smooth">
            {sampleData.map((item)=> (
                <div className={item.className} ></div>
            ))}

            </div>
            
            <div className="absolute flex mt-10 mx-4 h-10 top-[68%] end-0">
            <button className="bg-neutral-300 rounded-3xl w-20 mx-10" onClick={()=>{handleClick(-itemwidth)}}>←</button>    
            <button className="bg-neutral-300 rounded-3xl w-20" onClick={()=>{handleClick(itemwidth)}}>→</button>
            </div>
            
            

        </div>
    )
}