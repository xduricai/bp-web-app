<template>
    <div class="title-wrapper">
        <h1>Home Page</h1>
    </div>
    <div class="actions-container">
        <wallet-multi-button></wallet-multi-button>
        <button @click="initContract()">Initialize Contract</button>
        <button @click="redirect('/new')">New Subscription</button>
        <button @click="redirect('/all')">Active Subscriptions</button>
    </div>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { WalletMultiButton } from 'solana-wallets-vue'
import { initContract } from '@/composables';

const router = useRouter();

const redirect = (path: string) => router.push({ path });

</script>
  
<style scoped lang="scss">
.actions-container {
    display: flex;
    justify-content: center;
}
</style>