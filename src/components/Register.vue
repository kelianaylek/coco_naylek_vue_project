<template>
    <h1>Register</h1>
    <form action="">
        <input type="username" v-model="username" name="usrname">
        <input type="email" v-model="mail" name="mail">
        <input type="text" v-model="password" name="password">
        <button @click="addUser">S'inscrire</button>
    </form>
    <!-- <router-link :to="{ name: 'login'}">Se connecter</router-link> -->
</template>

<script>

export default ({
    data: function() {
        return {
            username : "",
            mail: "",
            password: "",
            isConnected: false
        }      
    },

    methods:{
        addUser(){
            let user = {
                username : this.username,
                mail : this.mail,
                password : this.password,
                isConnected: this.isConnected

            }

            this.$store.commit('ADD_USER', user)
        }
    }
})
</script>
