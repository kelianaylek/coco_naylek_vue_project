<template>
  <p>Formulaire</p>
  <form action="POST">
      <label for="title">Titre de la page</label>
      <input type="text" name="title">

      <label for="metaTitle">Meta Title</label>
      <input type="text" name="metaTitle">

      <label for="metaDescription">Meta Description</label>
      <input type="text" name="metaDescription">

      <label for="postImage">Ajouter une image</label>
      <input type="file" name="postImage">

      <label for="content">Corps du post</label>
      <input type="textarea" name="content">

  </form>


</template>

<script>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

store.commit('increment')

console.log(store.state.count) // -> 1

new Vue({
  el: '#app',
  store: store,
})
</script>
