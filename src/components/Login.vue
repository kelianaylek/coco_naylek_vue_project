<template>
<div class="formLogin">
    <form action="">
        <div>
            <label for="mail">Email : </label>
            <input type="email" v-model="user.mail" name="mail">
        </div>
        <div>
            <label for="password">Mot de passe : </label>
             <input type="text" v-model="user.password" name="password">
        </div>
        
        <button type="submit" @click="connexion">Se connecter</button>
    </form>
</div>
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
                      console.log(this.$store.state.userConnected)

                this.$store.commit('CONNECT_USER', this.user)
                      console.log(this.$store.state.userConnected)

            }

            else{
                console.log('Remplissez tous les champs')
            }
            
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