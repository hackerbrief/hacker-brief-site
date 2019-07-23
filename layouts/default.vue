<template>
  <div>
    <Sidenav />
    <div id="app-root">
      <Nav />
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
  }
}
</script>

<style lang="scss" scoped>
#app-root {}
</style>
