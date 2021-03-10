import { createStore } from 'vuex'

export default createStore({
  state: {
    routes: [
      {
      content: "Gérer le blog",
      link: "/admin"
    },
    {
      content: "Blog",
      link: "/blog"
    },
    {
      content: "Login",
      link: "/login"
    }],

    blogs : []

  },

  mutations: {
    ADD_ITEM(state, item){
      state.blogs.push(item)
    }
  },

  actions: {
    addItem({ commit }){
      let item = {
        title: document.getElementById("blogTitle").value,
        metaTitle: document.getElementById("blogMetaTitle").value,
        metaDescription: document.getElementById("blogMetaDescription").value,
        content: document.getElementById("blogContent").value
      }

      commit('ADD_ITEM', item)

    }
  },

  modules: {
  }

})
