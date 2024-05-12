'use client'
 
import { useEffect } from 'react'
import Typewriter from 'react-ts-typewriter';
import Image from 'next/image'

import { Menu, MenuButton, MenuItem, MenuItems,Transition  } from '@headlessui/react'



//temporary
let code = "/gfadjhgbnafgjbnapdifjgbapfjgbapidjbgpajfbgpadjgbf3875gub-257gb-25gb2-9gb-gqi3uy4gt][q4]q15b243524352/45v/2445v/234kh5v2/34hk5vyitgvfouyvr0q8yvf4v/5v43;2h5v0y8243vf5;hvarluyrvfpiqyvfpiqwervf/q45/54v8q-gr-78hgp7yh[t8r9w-rtywertyw-etyweuytgfweikuyrtflwueryftgvrluiyqfgrtop8yqwfrtpyuiwergftp8wyfgtrpw8yrgftpw8yrgtpw89gtr[wergtu;riwe245bg-2349bg-5427bg-425bg-894725bg-94572bg-9452bg-9425bg-9425bg-984527bg-4925gb-425gb452-97gb45-297bg"

let code2= "/g09u5bbu-qg5buip5uibpb2gq--gqq--gq9u4g-4-ubqvbuygquy4tvgouyvouyvouyvuyvsfghgfadghvafyg0gqgvagg[aag]]adfg;afdghvaofuhgvoag0y0vgvyg80qvygqvy08gygvrvyglavhhlvaoihvgagfgadf-g-d-g-adgf-da-g-dafg-af-gaghuvgvurvughruvgh0afagvhgav0fhgavfh0uiagfvhu0gfvhu0agfuvh0agfvdu0hafgafdg-adf-gadgabfuaF48Q76040QFGVYVGF0Q8V0QV4G0-QV4G0QVG4Q80GV04QGVAFHVLFADHGVOUYIAZFGOAIDGPIAGFOUYASDGO8FYAGDSPYUGA]G[AFDG-AD-FGS-G-S-DFG-SDF-]GF-]SDF]G-]FDS]-G-S]G-]S]-G]-S]"


export default function Home() {
  return (
    <div className="relative flex w-full h-screen bg-zinc-800">
    
    
      <div className="">

      </div>



      <Image className="absolute ml-5 mt-1"
    src="/logo.png"
          width={20}
          height={50}
          alt="Picture of the author"
          >
      
      </Image>
    
      <Menu>
      <MenuButton className="absolute end-0 m-1 data-[hover]:">
        <Image
    src="/menu.png"
          width={40}
          height={50}
          alt="Picture of the author"
          >

      </Image>
      </MenuButton>
      <Transition
        enter="ease-out duration-250"
        enterFrom="opacity-0 scale-100 -translate-y-6"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-100 -translate-y-6"
      >
      <MenuItems anchor="top start" className="w-full  text-white top-10 origin-top transition backdrop-blur-sm">
        <MenuItem>
          <a className="block data-[focus]: m-10 w-32 h-10 text-2xl left-10" href="/chet">
            CHET BOT
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]: m-10 w-32 h-10 text-2xl left-1/4" href="/dameme">
            DAMEM-E
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]: m-10 w-32 h-10 text-2xl left-1/4" href="/showcase">
            SHOWCASE
          </a>
        </MenuItem>
      </MenuItems>
      </Transition>
    </Menu>
    
    
    
    <div className="relative top-[16%] w-11/12 mx-auto bottom-1 h-4/5 rounded-3xl text-center bg-black overflow-hidden hover:cursor-pointer	">
    <div className="absolute text-neutral-700 text-left text-wrap m-2	">
    <span className="text-lime-400">c</span>
      {code}
    {code2}
    <span className="text-lime-400">he</span>
    {code}
    {code2}
    
    {code2}
    <span className="text-lime-400">t</span>
    {code}
    {code}
    {code2}
    {code}
    {code2}
    {code}
    
    {code}
    {code2}
    {code}
    </div>

    <span className="relative top-1/2 text-white text-4xl	">
    <Typewriter speed={100} text={["WELCOME TO CHETAI         ", "EXPLORING THE INTERSECTION BETWEEN MEMES AND AI        "]}
        loop={true} delay={60} cursor={true}></Typewriter>
    </span>

    </div>
    </div>
  );
}
