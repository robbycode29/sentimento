<template>
  <div class="flex justify-center bg-slate-900 w-screen h-screen">
    <div class="w-full mt-8 mx-[150px] pt-8 flex flex-col items-center gap-8">
      <div>
        <h1 class="text-white text-3xl">Scrape site</h1>
      </div>
      <search-bar @search="scrapeLink" />
      <div class="flex flex-col items-center">
        <span v-if="!posts.length && !loading" class="text-white mt-36 font-normal italic">No queries yet</span>
        <loading-buffer v-if="loading" class="mt-36"/>
        <div v-if="posts.length && !loading" class="flex flex-col">
          <div class="w-[400px] h-[400px] bg-slate-400 rounded-lg shadow-lg py-6 px-6 overflow-scroll">
            <p>{{ posts }}</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import { mapActions, mapGetters } from 'vuex';
import LoadingBuffer from '@/components/LoadingBuffer.vue';

interface PostInterface {
  genre: string;
  title: string;
  short_description: string;
  author: string;
  author_description: string;
  image: string;
  href: string;
  sentiment: string;
  words: string;
}

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      posts: [] as PostInterface[],
      loading: false,
    };
  },
  components: {
    SearchBar,
    LoadingBuffer,
  },
  methods: {
    ...mapActions('scrapeApi', ['fetchPosts']),
    async scrapeLink(link: string) {
      this.loading = true;
      await this.fetchPosts(link).then(() => {
        this.loading = false;
      });
      const posts = this.getPosts;
      posts.forEach((post: PostInterface) => {
        this.posts.push(post)
      });
    },
  },
  computed: {
    ...mapGetters('scrapeApi', ['getPosts']),
  },
});
</script>