<template>
  <p>Formulaire</p>
  <form action="POST">
      <label for="title">Titre de la page</label>
      <input id="blogTitle" type="text" name="title">

      <label for="metaTitle">Meta Title</label>
      <input id="blogMetaTitle" type="text" name="metaTitle">

      <label for="metaDescription">Meta Description</label>
      <input id="blogMetaDescription" type="text" name="metaDescription">

      <label for="postImage">Ajouter une image</label>
      <input id="blogPostImage" type="file" name="postImage">

      <label for="content">Corps du post</label>
      <input id="blogContent" type="textarea" name="content">

  </form>

  <button @click="addItem">Envoyer</button>

</template>

<script>
import { mapActions } from 'vuex'

export default{
  methods: {
    ...mapActions(['addItem'])
  }
}

</script>
