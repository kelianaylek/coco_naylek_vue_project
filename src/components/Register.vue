<template>
<div class="formLogin">
    <form action="">
        <div>
            <label for="username">Username : </label>
            <input type="username" v-model="username" name="username">
        </div>
        <div>
            <label for="mail">Email : </label>
            <input type="email" v-model="mail" name="mail">
        </div>
        <div>
            <label for="password">Mot de passe : </label>  
            <input type="text" v-model="password" name="password">
        </div>
        
        <button @click="addUser">S'inscrire</button>
    </form>
   
</div>    
 <div class="connectLink">
        <router-link :to="{ name: 'login'}">Se connecter</router-link>
    </div>
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
<style>
    .formLogin{
        display: flex;
        justify-content: center;
        margin-top: 100px;
        margin-bottom: 50px;
    }
    form div{
        margin-bottom: 40px;
    }
    form{
        display: flex;
        text-align: center;
        flex-direction: column;
    }
  
</style>
