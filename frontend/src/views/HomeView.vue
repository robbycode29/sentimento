<template>
  <div class="flex justify-center bg-slate-900 w-screen h-screen">
    <div class="w-full mt-8 mx-[150px] pt-8 flex flex-col items-center gap-8">
      <div>
        <h1 class="text-white text-3xl">Scrape site</h1>
      </div>
      <search-bar @search="scrapeLink" />
      <div class="flex flex-col items-center">
        <span v-if="!posts.length && !loading" class="text-white mt-36 font-normal italic">No queries yet</span>
        <loading-buffer v-if="loading" class="mt-36" />
        <div v-if="posts.length && !loading" class="flex flex-col">
          <div
            class="w-[250px] h-[400px] bg-slate-400 rounded-lg shadow-lg py-6 px-6 overflow-scroll scroll-smooth sm:w-[400px] md:w-[600px]">
            <span v-html="formattedPosts(posts)"></span>
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
    formattedPosts(posts: PostInterface[]) {
      const formatted = JSON.stringify(
        posts.map((post: PostInterface) => {
          if (post.sentiment === 'neutral') {
            return {
              ...post,
              sentiment: '🤷',
            };
          } else if (post.sentiment === 'positive') {
            return {
              ...post,
              sentiment: '👍',
            };
          } else if (post.sentiment === 'negative') {
            return {
              ...post,
              sentiment: '👎',
            };
          }
        }),
        null,
        '  '
      );
      return formatted.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;&nbsp;&nbsp;&nbsp;');
    },
  },
  computed: {
    ...mapGetters('scrapeApi', ['getPosts']),
  },
});
</script>
<style scoped>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar-corner {
  display: none;
}

@media screen and (min-width: 1024px) {
  body {
    scrollbar-width: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  body:after {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background: linear-gradient(to right, transparent, transparent 30px, #000 30px, #000 31px, transparent 31px, transparent);
    z-index: 999999;
  }

  body.shift-scrolling:after {
    background: none;
  }
}
</style>