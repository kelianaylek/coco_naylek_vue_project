<template>

    <div class="createBlog">
        <button>
            <router-link to="/create_page">
                Créer une page
            </router-link>
        </button>
    </div>


    <div class="adminBlog" v-for="blog in $store.state.blogs" :key="blog">
        <div class=list-container>
            <div class="flex-container">
                <img :src="blog.image" alt="">
                <div>
                    <h1>{{ blog.title }}</h1>
                    <p>{{ blog.content }}</p>
                </div>
            </div>
            <button @click="changeActive(blog)" class="edit">Editer</button>
            <button @click="deleteBlog(blog)" class="delete">Supprimer</button>
        </div>
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
.adminBlog{
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}

.flex-container, .list-container{
    display: flex;
}
.list-container{
    padding: 10px;
    border: 1px solid #000;
    max-width: 50%;
    border-radius: 10px;
}

.list-container>button{
    align-self: center;
    margin-right: 20px;
    }

.flex-container>img{
    align-self: center;
     width: 100px;
    height: 100px;
    margin-right: 20px;
}
.flex-container div{
    margin-right: 40px;
}
#blogEdit{
    display: none;
}
.createBlog{
    display: flex;
    justify-content: flex-end;
    margin-right: 50px;
    
}
.createBlog a{
    text-decoration: none;
    color: #000;
}
.createBlog button{
    padding: 10px;
    font-size: 20px;
    background-color: #42b983;
    padding: 15px;
    border: none;
    color: rgb(32, 32, 32);
}

.delete{
    background-color: rgb(134, 0, 0);
    color: white;
    padding: 10px;
    border: none;
    font-size: 17px;
}

.edit{
    background-color: rgb(0, 119, 255);
    color: white;
    padding: 10px;
    border: none;
    font-size: 17px;
}

.delete:hover, .edit:hover{
    cursor: pointer;
}

</style>