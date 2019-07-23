<template>
  <section id="home">
    <Header />
    <Content></Content>
  </section>
</template>

<script>
import Header from '~/components/partials/Header'
import Content from '~/components/partials/Content'

export default {
  components: {
    Header,
    Content
  }
}
</script>

<style lang="scss" scoped></style>
