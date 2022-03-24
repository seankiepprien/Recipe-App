<template>
<Nav />
    <main>
      <router-view />
    </main>
</template>
<script>
import Nav from './components/Navbar.vue'
export default {
  name: "App",
  components: {
    Nav
  }
}
</script>
