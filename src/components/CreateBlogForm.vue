<template>
  <p>Formulaire</p>
  <form action="POST">
      <label for="title">Titre de la page</label>
      <input v-model="blogTitle" @input="updateElement" id="blogTitle" type="text" name="title">

      <label for="metaTitle">Meta Title</label>
      <input v-model="blogMetaTitle" @input="updateElement" id="blogMetaTitle" type="text" name="metaTitle">

      <label for="metaDescription">Meta Description</label>
      <input v-model="blogMetaDescription" @input="updateElement" id="blogMetaDescription" type="text" name="metaDescription">

      <label for="content">Corps du post</label>
      <input v-model="blogContent" @input="updateElement" type="textarea" name="content" id="blogContent">

      <label for="image">Ajouter une image (optionnel)</label>
      <input v-model="blogImage" @input="updateElement" id="blogImage" type="text" name="image">

  </form>

  <router-link to="/admin">
    <span @click="addItem">Envoyer</span>
  </router-link>

  <div id="errors"></div>
</template>

<script>
import { mapActions } from 'vuex'

export default{
  methods: {
    ...mapActions(['addItem']), 

    updateElement (input) {
      this.$store.commit('UPDATE_ELEMENT', input.target)
    },
  }
}

</script>
