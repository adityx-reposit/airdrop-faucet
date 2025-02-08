// component for creating the airfrop component

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import React from "react";

function Airdrop() {
  const wallet = useWallet();
  const {connection}=useConnection();   
   const amount =document.getElementById("text")

    async function sendAirdrop(){
      await connection.requestAirdrop(wallet.publicKey,amount.value*1000000000);
       alert("sol airdroped"+amount)
     
     }
  return (
    <div>

    
      <input  id="text" type="text" placeholder="Amount" />
      <button onClick={sendAirdrop}>Send Airdrop</button>
    </div>
  );
}

export default Airdrop;
