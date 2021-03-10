<template>


    <button>
        <router-link to="/create_page">
            Créer une page
        </router-link>
    </button>

    <div class="list-container" v-for="blog in $store.state.blogs" :key="blog">
        <div class="flex-container">
            <img :src="blog.image" alt="#">
            <div>
                <h1>{{ blog.title }}</h1>
                <p>{{ blog.content }}</p>
            </div>
        </div>
        <button @click="changeActive(blog)">Editer</button>
        <button @click="deleteBlog(blog)">Supprimer</button>
        <BlogEdit v-if="blog.active" :blog="blog"></BlogEdit>

    </div>    

</template>


<script>
import BlogEdit from "../components/BlogEdit.vue"
import { mapActions } from 'vuex'

export default{
    components:{
        BlogEdit
    },

    methods: {
        ...mapActions(['editBlog']), 
        deleteBlog (item) {
            this.$store.commit('DELETE_BLOG', item)
        },

        changeActive (item){
            this.$store.commit('CHANGE_ACTIVE', item)

        }
    }
}
</script>


<style>
.flex-container, .list-container{
    display: flex;
}

.list-container>button{
    max-height: 20px;
    align-self: center;
}

.flex-container>img{
    align-self: center;
}

#blogEdit{
    display: none;
}
</style>