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

    blogs : [],

    blogTitle: "",
    blogMetaTitle: "",
    blogMetaDescription: "",
    blogImage: "",
    blogContent: ""

  },

  mutations: {
    ADD_ITEM(state, item){
      state.blogs.push(item)
    },

    UPDATE_ELEMENT(state, element){
      if(element.id == "blogTitle"){
        state.blogTitle = element.value
      }

      if(element.id == "blogMetaTitle"){
        state.blogMetaTitle = element.value
        console.log(state.blogMetaTitle)
      }

      if(element.id == "blogMetaDescription"){
        state.blogMetaDescription = element.value
      }

      if(element.id == "blogImage"){
        state.blogImage = element.value
      }

      if(element.id == "blogContent"){
        state.blogContent = element.value
      }
    },

    DELETE_BLOG(state, item){
      state.blogs.splice(state.blogs.indexOf(item), 1)
      console.log(state.blogs)
    }
  },

  actions: {
    addItem({ commit }){
      let item = {
        title: this.state.blogTitle,
        metaTitle: this.state.blogMetaTitle,
        metaDescription: this.state.blogMetaDescription,
        image: this.state.blogImage,
        content: this.state.blogContent
      }


      commit('ADD_ITEM', item)
      console.log(this.state.blogs)

    },
  },

  modules: {
  }

})
