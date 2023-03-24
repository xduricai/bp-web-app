<template>
    <div class="title-wrapper">
        <h1>New Subscription</h1>
    </div>

    <div v-if="connected" class="form-wrapper">
        <label for="recipient">Recipient</label>
        <input class="form-field" id="recipient" placeholder="Enter recipient address..." v-model="recipient">

        <label for="length">Length</label>
        <input class="form-field" id="length" type="number" min="1" placeholder="Enter subscription length in minutes..." v-model="length">
        
        <label for="url">URL</label>
        <input class="form-field" id="url" placeholder="Enter API URL..." v-model="url">

        <label for="options">Options JSON</label>
        <textarea class="form-field" id="options" placeholder="Enter API options as JSON..." v-model="options"></textarea>

        <span class="error-message" v-if="hasError">{{ errorMsg }}</span>

        <div class="actions-wrapper">
            <button class="back-btn" @click="toHome()">Cancel</button>
            <button @click="onSubmit()">Submit</button>
        </div>
    </div>
    <div v-else class="wallet-error">
        <h1>ERROR: Wallet not connected!</h1>
    </div>

</template>
    
<script setup lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useWorkspace } from '@/composables';
//import * as anchor from '@project-serum/anchor';

const { connected, wallet, program, state } = useWorkspace();

//TODO
console.log(connected.value);
console.log(wallet.value);
console.log(state);
console.log(program);

const router = useRouter();
const recipient = ref<string>();
const length = ref<number>();
const url = ref<string>();
const options = ref<string>();
const hasError = ref<boolean>(false);
const errorMsg = ref<string>();

const toHome = () => router.push({ path: '/' });
const onSubmit = async () => {
    hasError.value = false;
    errorMsg.value = undefined;
    
    if (!url.value) {
        errorMsg.value = "Please add a valid API URL";
    }
    if (url.value && url.value.length > 100) {
        errorMsg.value = "API URL must not exceed 100 characters";
    }
    if (!length.value || typeof length.value !== "number" || length.value <= 0) {
        errorMsg.value = "Subscription lenght must be a non-negative number";
    }
    if (!recipient.value) {
        errorMsg.value = "Please add a valid recipient address";
    }
    if (recipient.value && (recipient.value.length < 32 || recipient.value.length > 45)) {
        errorMsg.value = "Invalid address";
    }
    if (errorMsg.value) {
        hasError.value = true;
        return;
    }

    let inputOptions = {};

    try {
        if(options.value && options.value.length > 800) {
            errorMsg.value = "Options length must not exceed 800 characters";
            hasError.value = true;
            return;
        }

        inputOptions = options.value ? JSON.parse(options.value) : {};
        inputOptions = { ...inputOptions, url: url.value};
    } catch (err) { 
        errorMsg.value = "JSON format invalid";
        hasError.value = true;
        return;
    }

    //const subscription = anchor.web3.Keypair.generate();

    const input: SubscriptionInput = {
        length: length.value as number,
        recipient: recipient.value as string,
        options: JSON.stringify(inputOptions)
    }

    console.log(input);
}

interface SubscriptionInput {
    length: number;
    recipient: string;
    options: string;
}

</script>
    
<style scoped lang="scss">
.form-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    width: 500px;

    label {
        font-weight: bolder;
        font-size: 12px;
        margin-bottom: 4px;
    }

    .form-field {
        border-radius: 4px;
        margin-bottom: 24px;
        border: 1px solid grey;
    }

    input {
        height: 40px;
        padding: 0 8px;
    }
    textarea {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        min-height: 120px;
        padding: 8px;
    }
    textarea::placeholder {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }

    .error-message {
        color: red;
        font-weight: bolder;
        font-size: 16px;
        margin-bottom: 12px;
    }

    .actions-wrapper {
        display: flex;
        flex-direction: row;

        button {
            height: 24px;
            color: white;
            background: rgb(46, 46, 180);
        }
    }
}

.wallet-error {
    display: flex;
    justify-content: center;
    color: red;
}

</style>
    