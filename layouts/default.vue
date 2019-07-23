<template>
  <div>
    <Sidenav :open="open" @close="sidenav = false" />
    <div id="app-root">
      <Nav :open="open" @sidenav="sidenav = !sidenav" />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '~/components/app/Footer'
import Nav from '~/components/app/Nav'
import Sidenav from '~/components/app/Sidenav'

export default {
  components: {
    Footer,
    Nav,
    Sidenav
  },
  data() {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss" scoped>
#app-root {
  position: relative;
}
</style>
