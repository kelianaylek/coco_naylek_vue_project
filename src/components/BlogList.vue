<template>
    <div class="list-container" v-for="blog in $store.state.blogs" :key="blog">
        <div class="flex-container">
            <img :src="blog.image" alt="#">
            <div>
                <h1>{{ blog.title }}</h1>
                <p>{{ blog.content }}</p>
            </div>
        </div>
        <router-link :to="{ name: 'blog_post', params: { id: blog.id }}">Voir</router-link>

    </div> 
</template>

