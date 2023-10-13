<template>
    <div class="group">
        <input v-model="searchText" @keyup.enter="search" type="text" placeholder="Search..." class="border-1 border-gray-300 bg-slate-500 text-white font-semibold opacity-50 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none shadow-lg"/>
        <button @click="search" class="absolute h-6 w-6 text-gray-400 -translate-x-10 translate-y-2">
            <img src="@/assets/magnifier.png" class="w-8 group-hover:animate-bounce" />
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    search() {
      this.$emit('search', this.searchText);
    },
  },
});
</script>