<template>
    <Login></Login>
    <div class="connectLink">
      <router-link :to="{ name: 'register'}">Si vous n'êtes pas encore inscrits, <strong>inscrivez vous</strong></router-link>
    </div>
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
<style>
    .connectLink{
        display: flex;
        justify-content: center;
    }
    .connectLink a{
      text-decoration: none;
    }
</style>