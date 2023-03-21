import { computed } from 'vue';
import { useAnchorWallet, useWallet } from 'solana-wallets-vue';
import { Connection, PublicKey } from '@solana/web3.js';
import { Provider, Program } from '@project-serum/anchor';
//import idl from '../../../target/idl/orace-smart-contract.json';
//TODO

let workspace = {};
//const programID = new PublicKey(idl.metadata.address)

export const useWorkspace = () => workspace;

export const initWorkspace = () => {
    const { connected } = useWallet();
    const wallet = useAnchorWallet();
    const connection = new Connection('http://127.0.0.1:8899');
    const provider = computed((): Provider => ({ connection, publicKey: wallet.value?.publicKey }));
    //const program = computed(() => new Program(idl, programID, provider.value));

    workspace = {
        connected,
        wallet,
        connection,
        provider,
        //program
    }
}
