<template>
  <div id="nav">
    <router-link v-for="route in $store.state.routes" :key="route"  :to="route.link">{{ route.content }}</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'Navbar',

}
</script>
