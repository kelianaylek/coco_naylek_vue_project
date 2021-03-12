<template >
    <p @click="getBlogs()">rthrt</p>
    <div class="flex-container">
            <img :src="this.post.image" alt="#">
            <div>
                <h1>{{ this.post.title }}</h1>
                <p>{{ this.post.content }}</p>
            </div>
        </div>
</template>

<script>
// import router from '../router/index.js'
// const router = new VueRouter({
//     routes : [
//         {path : "/blog/:titreDuPost"}
//     ]
// })
// @ is an alias to /src
export default {
    data: function(){
        return{
            blogs : this.$store.state.blogs,
            postId : this.$route.params.id,
            post : ""
        }
    },
    methods: {
        getBlogs(){
            this.post = this.blogs[this.postId]
            console.log(this.post)
        }
    },
    beforeMount(){
    this.getBlogs()
 },
}

</script>