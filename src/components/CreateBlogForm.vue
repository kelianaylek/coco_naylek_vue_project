<template>
<div class="center">
  <h2>Créer une nouvelle page de blog</h2>
</div>


  <form action="POST">
    <div>
      <label for="title">Titre de la page : </label>
      <input v-model="blogTitle" @input="updateElement" id="blogTitle" type="text" name="title">
  </div>
    <div>

      <label for="metaTitle">Meta Title : </label>
      <input v-model="blogMetaTitle" @input="updateElement" id="blogMetaTitle" type="text" name="metaTitle">
</div>
    <div>

      <label for="metaDescription">Meta Description : </label>
      <input v-model="blogMetaDescription" @input="updateElement" id="blogMetaDescription" type="text" name="metaDescription">
</div>
    <div>

      <label for="content">Corps du post : </label>
      <textarea v-model="blogContent" @input="updateElement" type="textarea" name="content" id="blogContent">
        
      </textarea>
</div>
    <div>
      <label for="image">Ajouter une image (optionnel) : </label>
      <input v-model="blogImage" @input="updateElement" id="blogImage" type="text" name="image">
</div>
  </form>

<div class="center">
  <button @click="addItem">Envoyer</button>

</div>

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
<style>
  .center{
    display: flex;
    justify-content: center;
  }

  form{
    text-align: center;
    margin-bottom: 30px;
  }

  .center>button{
    background-color: #42b983;
    padding: 10px 15px;
    font-size: 20px;
    border: none;
    color: rgb(20, 20, 20);
  }
</style>
