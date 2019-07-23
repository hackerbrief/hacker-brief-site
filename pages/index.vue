<template>
  <section id="home">
    <Header />
    <Content>
      <div class="grid">
        <Card
          v-for="item in posts"
          :key="item.id"
          :item="item"
          type="post"
        />
      </div>
      <div class="grid">
        <Card
          v-for="item in tools"
          :key="item.id"
          :item="item"
          type="tool"
        />
      </div>
    </Content>
  </section>
</template>

<script>
import Header from '~/components/partials/Header'
import Content from '~/components/partials/Content'
import Card from '~/components/partials/Card'

export default {
  components: {
    Header,
    Content
  },
  asyncData({ store }) {
    return {
      posts: store.getters.indexPosts,
      tools: store.getters.indexTools
    }
  },
  head() {
    this.homeSeo()
  }
}
</script>

<style lang="scss" scoped></style>
