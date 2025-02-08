import {
  WalletProvider,
  ConnectionProvider
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import React, { useMemo } from 'react';
import Airdrop from './airdrop';
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const App = () => {
 


  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/_hwmIjo3eQf1YUenjg9gttGi9WHluFfp"}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
                <WalletMultiButton />
                <WalletDisconnectButton />
                   <div>
                       <Airdrop/>
                   </div>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
);
};

export default App;
