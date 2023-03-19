<template>
    <div class="title-wrapper">
        <h1>Active Subscriptions</h1>
    </div>

    <div class="content-wrapper">

        <div class="actions-wrapper">
            <button class="back-btn" @click="toHome()">Return</button>
        </div>
    </div>
</template>
    
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const toHome = () => router.push({ path: '/' });
</script>
    
<style scoped lang="scss">
.content-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    width: 500px;
}
</style>
    