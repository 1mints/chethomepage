'use client'
import Link from 'next/link'
import AppWalletProvider from '../components/AppWalletProvider'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Ubuntu_Mono } from "next/font/google";




export default function nft() {
  
 
    return(
        <div className="relative flex w-full h-screen flex-col overflow-hidden bg-[#161616]">
        <div className="absolute h-10 m-4 text-white">
            <Link href="/">HOME</Link>
            </div>

        

        <div className="relative w-[400px] md:w-[600px] h-2/3 mx-auto m-10 mt-20 bg-black rounded-3xl text-2xl text-white border-[1px] border-white">
        <div className="relative max-w-fit mx-auto top-[40%] text-white">
          <div className="max-w-fit mx-auto text-lg">NFTS COMING SOON</div>
          <div className="max-w-fit m-4 mx-auto animate-spin h-7 w-3 bg-white">|</div>
        </div>
          <div className="relative mt-96 m-4 max-w-fit mx-auto">GET READY TO MINT</div>
          <div className="w-64 text-center mx-auto">
          <WalletMultiButton className="rounded-3xl" style={{color:'black', backgroundColor:'white', fontFamily:'monospace'}} />
          </div>
        </div>

        </div>
        
    )
}