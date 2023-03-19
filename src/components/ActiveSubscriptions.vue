<template>
    <div class="title-wrapper">
        <h1>Active Subscriptions</h1>
    </div>

    <div class="content-wrapper">
        <table>
            <tr>
                <th>#</th>
                <th>Recipient</th>
                <th>URL</th>
                <th>Remaining duration</th>
            </tr>
            <tr v-for="(item, index) in data" :key="index" class="subscription-info-wrapper">
                <td> {{ index + 1 }} </td>
                <td> {{ item.recipient }} </td>
                <td> {{ item.options }} </td>
                <td> {{ item.length }}</td>
            </tr>
        </table>

        <div class="actions-wrapper">
            <button class="back-btn" @click="toHome()">Return</button>
        </div>
    </div>
</template>
    
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const toHome = () => router.push({ path: '/' });

const data = [
    {
        client: '4DxtGPEeyJxuAVAvC9d6bn5wkmMP5GWxRSonYiJyYLjP',
        recipient: '4DxtGPEeyJxuAVAvC9d6bn5wkmMP5GWxRSonYiJyYLjP',
        length: 1230,
        options: '{"url": "www.google.com"}'
    },
    {
        client: '4DxtGPEeyJxuAVAvC9d6bn5wkmMP5GWxRSonYiJyYLjP',
        recipient: '4DxtGPEeyJxuAVAvC9d6bn5wkmMP5GWxRSonYiJyYLjP',
        length: 3848,
        options: '{"url": "www.yahoo.com"}'
    },
    {
        client: '4DxtGPEeyJxuAVAvC9d6bn5wkmMP5GWxRSonYiJyYLjP',
        recipient: '4DxtGPEeyJxuAVAvC9d6bn5wkmMP5GWxRSonYiJyYLjP',
        length: 1234,
        options: '{"url": "www.bing.com"}'
    },
]
</script>
    
<style scoped lang="scss">
.content-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;

    table {
        border-collapse: collapse;

        td, th {
            border: 1px solid grey;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #ebebeb;
        }
    }

}
</style>
    