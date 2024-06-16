# Oracle Web Application 

Simple web application used to configure and initialize the oracle network by managing existing subscription. Serves as a proof of concept for [Internet of Value and DeFi in Solana](https://github.com/xduricai/bp-text).

## Prerequisites  

- [Solana](https://docs.solanalabs.com/cli/install)
- [Phantom](https://phantom.app/download)
- [node.js](https://nodejs.org/en)

## Setup  

The Web Application is meant to be configured after the [Smart Contract](https://github.com/xduricai/bp-smart-contract) and before the [Oracle Network](https://github.com/xduricai/bp-oracle-network)  

NOTE: The Solana Development Environment is only compatible with UNIX based operating systems and will require WSL to run on Windows

- Phantom Wallet configuration 
    - Open a web browser with the phantom wallet extension installed
    - Open the phantom wallet extension window
    - Create a new phantom wallet account
    - Enable testnet mode inside of your phantom wallet
    - Switch the solana network of your phantom wallet to "Solana testnet"
    - Copy your wallet address
    - Open a new terminal window and enter `solana airdrop 100 {WALLET_ADDRESS}`  
      
- run the web app with the following commands      
```bash 
npm install
npm run serve
```
- navigate to http://localhost:8080/#/
- Press initialize and confirm all necessary transactions (this may take a while)
- Copy the state address form the console as it will be needed later
- Setup is now complete and you may create subscriptions

