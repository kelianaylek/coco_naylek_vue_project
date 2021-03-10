<template>


    <button>
        <router-link to="/create_page">
            Créer une page
        </router-link>
    </button>

    <div class="list-container" v-for="blog in $store.state.blogs" :key="blog">
        <div class="flex-container">
            <img src="" alt="#">
            <div>
                <h1>{{ blog.title }}</h1>
                <p>{{ blog.content }}</p>
            </div>
        </div>
        <button>Editer</button>
        <button>Supprimer</button>
    </div>    
</template>

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

</style>