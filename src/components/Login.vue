<template>
    <h1>Login</h1>

    <form action="">
        <input type="email" v-model="user.mail" name="mail">
        <input type="text" v-model="user.password" name="password">
        <button type="submit" @click="connexion">Connexion</button>
    </form>

</template>

<script>

export default ({
    data: function() {
        return {
            user : {
                id: "",
                username: "",
                mail: "",
                password: "",
                isConnected: ""
            }
        }      
    },

    methods:{
        connexion(e){
            e.preventDefault()
            if(this.user.mail != "" && this.user.password != ""){
                this.$store.commit('CONNECT_USER', this.user)
            }

            else{
                console.log('Remplissez tous les champs fdp')
            }
            
        }
    }
})
</script>