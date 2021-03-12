<template>
    <Login></Login>
    <router-link :to="{ name: 'register'}">Si vous n'êtes pas encore inscrits, <strong>inscrivez vous</strong></router-link>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'


export default {
  name: 'App',
  components: {
    Login
  }
}
</script>