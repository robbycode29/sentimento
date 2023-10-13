<template>
    <div class="grid grid-flow-row">
        <div class="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            <div v-for="post in posts" :key="post.href">
                <post-card :post="post"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import PostCard from './PostCard.vue';

export default defineComponent({
    name: 'PostWall',
    props: ['posts'],
    components: {
        PostCard,
    },
});
</script>