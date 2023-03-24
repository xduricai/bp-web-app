import { computed, ComputedRef, Ref } from 'vue';
import { AnchorWallet, useAnchorWallet, useWallet } from 'solana-wallets-vue';
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { Provider, Program, Idl } from '@project-serum/anchor';
import * as anchor from '@project-serum/anchor';
import idl from '../../../../oracle-smart-contract/target/idl/oracle_smart_contract.json';

let workspace: Workspace;
const programId = new PublicKey(idl.metadata.address)

export const useWorkspace = () => workspace;

export const initWorkspace = () => {
    const { connected } = useWallet();
    const wallet = useAnchorWallet();
    const connection = new Connection('http://127.0.0.1:8899');
    //const provider = computed((): Provider => ({ connection, publicKey: wallet.value?.publicKey }));
    const provider = computed(() => new anchor.AnchorProvider(connection, wallet.value as AnchorWallet, {}));
    const program = computed(() => new Program(idl as Idl, programId, provider.value));
    const stateKeypair = anchor.web3.Keypair.generate();
    const state = stateKeypair.publicKey;

    workspace = {
        connected,
        wallet,
        connection,
        provider,
        program,
        stateKeypair,
        state
    }
}

export const initContract = async () => {
    await workspace.program.value.methods.initialize().accounts({
        state: workspace.state,
        payer: workspace.wallet.value?.publicKey
    })
    .signers([workspace.stateKeypair])
    .rpc();

    console.log('done');

    const stateAccount = await workspace.program.value.account.state.fetch(workspace.state);
    console.log(stateAccount);
}

export interface Workspace {
    connected: Ref<boolean>;
    wallet: Ref<AnchorWallet | undefined>;
    connection: Connection;
    provider: ComputedRef<Provider>;
    program: ComputedRef<Program<Idl>>;
    stateKeypair: Keypair;
    state: PublicKey;
}
