<template>
  <div id="nav">
    <router-link v-for="route in $store.state.routes" :key="route"  :to="route.link">{{ route.content }}</router-link>
    <button v-if="user.isConnected">Déconnexion</button>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'Navbar',

  data: function(){
    return{
      user: {}
    }
  },

  methods: {
    findAllUsers(){
      let users = this.$store.state.users
      users.forEach(element => {
          if(element.isConnected == true){
              this.user = element
              console.log(this.user)
          }
      });
    }
  },
}
</script>
