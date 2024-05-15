'use client'
 
import { useEffect } from 'react'
import Typewriter from 'react-ts-typewriter';
import Image from 'next/image'
import Link from 'next/link'
import { Menu, MenuButton, MenuItem, MenuItems,Transition  } from '@headlessui/react'



//temporary
let code = "/gfadjhgbnafgjbnapdifjgbapfjgbapidjbgpajfbgpadjgbf3875gub-257guabg089u45ybgpiabfagagb-25gb2-9gb-gqi3uy4gt][q4]q15b243524352/45v/2445v/234kh5v2/34hk5vyitgvfouyvr0q8yvf4v/5v43;2h5v0y8243vf5;hvarluyrvfpiqyvfpiqwervf/q45/54v8q-gr-78hgp7yh[t8r9w-rtywertyw-etyweuytgfweikuyrtflwueryftgvrluiyqfgrtop8yqwfrtpyuiwergftp8wyfgtrpw8yrgftpw8yrgtpw89gtr[wergtu;riwe245bg-2349bg-5427bg-425bg-894725bg-94572bg-9452bg-9425bg-9425bg-984527bg-4925gb-425gb452-97gb45-297bg"

let code2= "/g09u5bbu-qg5buip5uibpb2gq--gqq--gq9u4g-4-ubqvbuygquy4tvgouyvouyvouyvuyvsfghgfadghvafyg0gqgvagg[aag]]adfg;afdghvaofuhgvoag0y0vgvyg80qvygqvy08gygvrvyglavhhlvaoihvgagfgadf-g-d-g-adgf-da-g-dafg-af-gaghuvgvurvughruvgh0afagvhgav0fhgavfh0uiagfvhu0gfvhu0agfuvh0agfvdu0hafgafdg-adf-gadgabfuaF48Q76040QFGVYVGF0Q8V0QV4G0-QV4G0QVG4Q80GV04QGVAFHVLFADHGVOUYIAZFGOAIDGPIAGFOUYASDGO8FYAGDSPYUGA]G[AFDG-AD-FGS-G-S-DFG-SDF-]GF-]SDF]G-]FDS]-G-S]G-]S]-G]-S]"

let code3 = `\_   ___ \|  |__   _____/  |_    /  _  \ |__| \_   ___ \|  |__   _____/  |_    /  _  \ |__| \_   ___ \|  |__   _____/  |_    /  _  \ |__| \_   ___ \|  |__   _____/  |_    /  _  \ |__| \_   ___ \|  |__   _____/  |_    /  _  \ |__| \_   ___ \|  |__   _____/  |_    /  _  \ |__| \_   ___ \|  |__   _____/  |_    /  _  \ |__| \_   ___ \|  |__   _____/  |_    /  _  \ |__| \_   ___ \|  |__   _____/  |_    /  _  \ |__| \_   ___ \|  |__   _____/  |_    /  _  \ |__| \_   ___ \|  |__   _____/  |_    /  _  \ |__|
/    \  \/|  |  \_/ __ \   __\  /  /_\  \|  | /    \  \/|  |  \_/ __ \   __\  /  /_\  \|  | /    \  \/|  |  \_/ __ \   __\  /  /_\  \|  | /    \  \/|  |  \_/ __ \   __\  /  /_\  \|  | /    \  \/|  |  \_/ __ \   __\  /  /_\  \|  | /    \  \/|  |  \_/ __ \   __\  /  /_\  \|  | /    \  \/|  |  \_/ __ \   __\  /  /_\  \|  | /    \  \/|  |  \_/ __ \   __\  /  /_\  \|  | /    \  \/|  |  \_/ __ \   __\  /  /_\  \|  | /    \  \/|  |  \_/ __ \   __\  /  /_\  \|  | /    \  \/|  |  \_/ __ \   __\  /  /_\  \|  |
\     \___|   Y  \  ___/|  |   /    |    \  | \     \___|   Y  \  ___/|  |   /    |    \  | \     \___|   Y  \  ___/|  |   /    |    \  | \     \___|   Y  \  ___/|  |   /    |    \  | \     \___|   Y  \  ___/|  |   /    |    \  | \     \___|   Y  \  ___/|  |   /    |    \  | \     \___|   Y  \  ___/|  |   /    |    \  | \     \___|   Y  \  ___/|  |   /    |    \  | \     \___|   Y  \  ___/|  |   /    |    \  | \     \___|   Y  \  ___/|  |   /    |    \  | \     \___|   Y  \  ___/|  |   /    |    \  |
 \______  /___|  /\___  >__|   \____|__  /__|  \______  /___|  /\___  >__|   \____|__  /__|  \______  /___|  /\___  >__|   \____|__  /__|  \______  /___|  /\___  >__|   \____|__  /__|  \______  /___|  /\___  >__|   \____|__  /__|  \______  /___|  /\___  >__|   \____|__  /__|  \______  /___|  /\___  >__|   \____|__  /__|  \______  /___|  /\___  >__|   \____|__  /__|  \______  /___|  /\___  >__|   \____|__  /__|  \______  /___|  /\___  >__|   \____|__  /__|  \______  /___|  /\___  >__|   \____|__  /__|
        \/     \/     \/               \/             \/     \/     \/               \/             \/     \/     \/               \/             \/     \/     \/               \/             \/     \/     \/               \/             \/     \/     \/               \/             \/     \/     \/               \/             \/     \/     \/               \/             \/     \/     \/               \/             \/     \/     \/               \/             \/     \/     \/               \/    `

export default function Home() {
  return (
    
    <div className="relative flex w-full h-screen flex-col overflow-hidden bg-[#161616]">
    
    
      <div className="">

    



      <Image className="absolute ml-5 mt-3 md:ml-[4.166%]"
    src="/logo.png"
          width={30}
          height={50}
          alt="Picture of the author"
          >
      
      </Image>

      <div className="hidden md:flex flex-row absolute mr-[4.166%] text-white mt-4 end-0">
      
      <div className="cursor-pointer"><Link href="/chet">CHET BOT</Link></div>
      
      
      <div className="cursor-pointer mx-20"><Link href="/dameme">DAMEM-E</Link></div>
      
      
      <div className="cursor-pointer"><Link href="nft">NFT</Link></div>
     
      </div>
    
      <Menu>
      <MenuButton className="block md:hidden absolute end-0 m-3">
        <Image
    src="/menu.png"
          width={50}
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
      <MenuItems anchor="bottom end" className="backdrop-blur-md w-full h-full text-white top-10 origin-top transition">
        <MenuItem>
          <a className="block data-[active]: m-20 w-32 h-10 text-2xl left-20" href="/chet">
            CHET BOT
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[active]: m-20 w-32 h-10 text-2xl left-1/4" href="/dameme">
            DAMEM-E
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[active]: m-20 w-32 h-10 text-2xl left-1/4" href="/nft">
            NFT
          </a>
        </MenuItem>
      </MenuItems>
      </Transition>
    </Menu>
    </div>
    
    
    <div className="relative top-[16%] w-11/12 mx-auto h-4/5 rounded-3xl text-center bg-gradient-to-b from-transparent via-[#1E1E1E] to-transparent overflow-hidden hover:cursor-pointer	">
    <div className="absolute text-neutral-700 from-gray-300 text-left text-wrap m-2 blur-[2px]">
    <span className="text-lime-400">c</span>
    {code3}
    <span className="text-lime-400">he</span>
    {code2}
    {code3}
    <span className="text-lime-400">t</span>
    {code}
    {code3}
    <span className="text-lime-400">c</span>
    {code3}
    <span className="text-lime-400">he</span>
    {code2}
    {code3}
    <span className="text-lime-400">t</span>
    {code3}
    </div>

    <span className="relative top-1/2 text-white text-4xl	">
    <Typewriter speed={100} text={["WELCOME TO CHETAI         ", "EXPLORING THE INTERSECTION      ", "BETWEEN MEMES AND AI        "]}
        loop={true} delay={60} cursor={true}></Typewriter>
    </span>

    </div>
    </div>
  );
}
