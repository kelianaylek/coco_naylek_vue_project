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
    },

    CHANGE_ACTIVE(state, item){
      if(!item.active){
        state.blogs.splice(state.blogs.indexOf(item), 1)
        item.active = true
        state.blogs.push(item)
    }

    else {
      item.active = false
      }
    },

    CHANGE_BLOG(state, item){
      state.blogs.splice(state.blogs.indexOf(item), 1)
      state.blogs.push(item)
      console.log(state.blogs)
  },
},

  actions: {
    addItem({ commit }){
      let item = {
        id: this.state.blogs.length,
        title: this.state.blogTitle,
        metaTitle: this.state.blogMetaTitle,
        metaDescription: this.state.blogMetaDescription,
        image: this.state.blogImage,
        content: this.state.blogContent,
        active: false
      }


      commit('ADD_ITEM', item)

    },

    changeBlog({ commit }, element){
      let oldId = element.id
      let oldActive = element.active

      let item = {
        id: oldId,
        title: this.state.blogTitle,
        metaTitle: this.state.blogMetaTitle,
        metaDescription: this.state.blogMetaDescription,
        image: this.state.blogImage,
        content: this.state.blogContent,
        active: oldActive
      }

      commit('CHANGE_BLOG', item)
      console.log(this.state.blogs)
    }
  },

  modules: {
  }

})
