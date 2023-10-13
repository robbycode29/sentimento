import { ActionContext } from "vuex";
import axios from "axios";

const state = {
  posts: [],
};
const getters = {
  getPosts: (state: { posts: object[] }) => state.posts,
};
const mutations = {
  setPosts: (state: { posts: object[] }, posts: object[]) => {
    state.posts = posts;
  },
};
const actions = {
  async fetchPosts({ commit }: ActionContext<StaticRange, object>) {
    try {
      const response = await axios.get("/scrape");
      commit("setPosts", response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
