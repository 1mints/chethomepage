'use client'
import {
    ThirdwebProvider,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    phantomWallet,
  } from "@thirdweb-dev/react";
  import { ConnectWallet } from "@thirdweb-dev/react";
  import { darkTheme, lightTheme } from "@thirdweb-dev/react";
 

  const customDarkTheme = darkTheme({
    colors: {
      modalBg: "#161616",
      accentText: "green",
      // ... etc


    },
  });


export default function nft() {
 
    return(
        <ThirdwebProvider
      supportedWallets={[
        phantomWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        walletConnect(),
      ]}
      clientId="<your_client_id>"
      activeChain="solana"
    >
        <div className="relative flex w-full h-screen flex-col overflow-hidden bg-[#161616]">
            <div className="w-1/2 h-full mx-auto">
                <div>
                <div className="relative w-32 h-20 top-[150px] mx-auto text-white text-center">NFTs are loading</div>
                </div>
                <div>
                <div className="relative w-4 h-8 flex mx-auto mt-28 animate-spin bg-white rounded-3xl text-white">a</div>
                </div>
                <div>
                    <div className="w-52 mt-14 mx-auto text-white text-center">Connect wallet for now</div>

                    <div className="mt-6 mx-auto w-36">
                    <ConnectWallet className="rounded-3xl" modalSize="compact" theme={customDarkTheme}/>
                    </div>

                </div>
            </div>
        </div>
        </ThirdwebProvider>
    )
}