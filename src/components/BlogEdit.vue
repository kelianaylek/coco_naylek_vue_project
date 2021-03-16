<template>
<div class="editBlog">

  <form action="POST">
      <label for="title">Titre de la page</label>
      <input v-model="newItem.blogTitle" @input="updateElement" id="blogTitle" type="text" name="title">

      <label for="metaTitle">Meta Title</label>
      <input v-model="newItem.blogMetaTitle" @input="updateElement" id="blogMetaTitle" type="text" name="metaTitle">

      <label for="metaDescription">Meta Description</label>
      <input v-model="newItem.blogMetaDescription" @input="updateElement" id="blogMetaDescription" type="text" name="metaDescription">

      <label for="image">Ajouter une image</label>
      <input v-model="newItem.blogImage" @input="updateElement" id="blogImage" type="text" name="image">

      <label for="content">Corps du post</label>
      <input v-model="newItem.blogContent" @input="updateElement" type="textarea" name="content" id="blogContent">
  </form>
    <div class="center">
    <button @click="changeBlog(blog)">Envoyer</button>
    </div>
</div>
</template>

<script>
    
    export default{
        name: 'BlogEdit',
        props: ['blog'],

        data: function () {
            return {
                newItem : {          
                    blogTitle: this.blog.title,
                    blogMetaTitle: this.blog.metaTitle,
                    blogMetaDescription: this.blog.metaDescription,
                    blogImage: this.blog.image,
                    blogContent: this.blog.content
                } 
            }
        },
       
        methods: {
            changeBlog (item) {
                this.$store.dispatch('changeBlog', item);
            },

            updateElement (input) {
                this.$store.commit('UPDATE_ELEMENT', input.target)
            },
        }
    }

</script>
<style>
    .editBlog{
    margin-right: 200px;
      padding: 10px;
    border: 1px solid #000;
    border-radius: 10px;
}
</style>