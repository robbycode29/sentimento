import { ActionContext } from "vuex";
import axios from "axios";

const state = {
  posts: [],
  error: null,
};
const getters = {
  getPosts: (state: { posts: object[] }) => state.posts,
  getError: (state: { error: object }) => state.error,
};
const mutations = {
  setPosts: (state: { posts: object[] }, posts: object[]) => {
    state.posts = posts;
  },
  setError: (state: { error: any }, error: any) => {
    state.error = error;
  },
  unsetError: (state: { error: any }) => {
    state.error = null;
  },
};
const actions = {
  async fetchPosts({ commit }: ActionContext<StaticRange, object>, url: string) {
    try {
      const response = await axios.get(`/scrape?url=${url}`);
      commit("setPosts", response.data);
    } catch (error) {
      commit("setError", error);
    }
  },
  unsetError({ commit }: ActionContext<StaticRange, object>) {
    commit("unsetError");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
