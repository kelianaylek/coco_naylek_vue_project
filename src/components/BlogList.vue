<template>
    <div class="list-container" v-for="blog in $store.state.blogs" :key="blog">
        <div class="flex-container">
            <img :src="blog.image" alt="">
            <div>
                <h1>{{ blog.title }}</h1>
                <p>{{ blog.content }}</p>
            </div>
        </div>
        <div>
        <router-link :to="{ name: 'blog_post', params: { id: blog.id }}">Voir</router-link>

        </div>

    </div> 
</template>
<style>
    .list-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .list-container a{
        text-decoration: none;
        color: #000;
    }
    .list-container img{
            align-self: center;
    width: 100px;
    height: 100px;
    margin-right: 20px;
    }
</style>
