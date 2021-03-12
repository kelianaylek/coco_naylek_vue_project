<template>
    <Register></Register>
    <Login></Login>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'


export default {
  name: 'App',
  components: {
    Register,
    Login
  }
}
</script>