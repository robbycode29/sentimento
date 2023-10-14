<template>
    <div @click="goTo(post.href)" class="bg-white w-[300px] h-[280px] flex flex-col rounded-xl border-2 shadow-xl hover:scale-105 transition duration-200 cursor-pointer">
        <img :src="post.image" class="h-32 object-cover rounded-t-xl" />
        <div class="flex flex-col items-start p-2">
            <h2>{{ post.title }}</h2>
            <br/>
            <p>{{ post.short_description }}</p>
        </div>
        <div class="absolute -translate-x-[10px] translate-y-[260px]">
            {{ getEmoji(post.sentiment) }}
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PostCard',
    props: ['post'],
    methods: {
        goTo(href: string) {
            window.open(href, '_blank');
        },
        getEmoji(sentiment: string) {
            if (sentiment === 'positive') {
                return '😃';
            } else if (sentiment === 'negative') {
                return '😔';
            } else {
                return '😐';
            }
        },
    },
});
</script>
