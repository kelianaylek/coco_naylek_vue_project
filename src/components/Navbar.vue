<template>
  <div id="nav">
    <router-link to="/admin_blog">Gérer le blog</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/login">Login</router-link>

  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'Navbar',

}
</script>
