<template>
    <div id="nav">
        <router-link v-for="user in this.$store.state.users" :key="user" v-show="user.isConnected"  to="/admin">Gérer le blog</router-link>
        <div  v-for="user in this.$store.state.users" :key="user" v-show="user.isConnected" class="navSeparateLinks"></div>
        <router-link to="/blog">Blog</router-link>
        <div class="navSeparateLinks"></div>
        <!-- <router-link v-for="user in this.$store.state.users" :key="user" v-show="user.isConnected == false" to="/login">Login</router-link> -->
        <!-- <div v-if="user == undefined ||user.username"> -->
          <router-link to="/login">Login</router-link>
      <!-- </div> -->
        <button v-for="user in this.$store.state.users" :key="user" v-show="user.isConnected" @click="deconnexion(user)">{{ user.username }}</button>

    </div>
    <router-view/>
</template>

<script>
export default {
  name: 'Navbar',

  data: function() {
        return {
            user : this.user
        }      
    },

  methods: {
    deconnexion(user){
      this.$store.commit("DECONNEXION", user)
    }
  }

}
</script>
<style>
  #nav{
    display: flex;
    align-items: center;
  }
  #nav a{
    padding: 0px 10px 0px 10px;
    text-decoration: none;
  }
  #nav .navSeparateLinks{
    background-color: #000;
    height: 15px;
    width: 2px;
  }

</style>
