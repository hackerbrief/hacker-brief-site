<template>
  <section>
    <Header />
    <Content>
      <div class="grid">
        <PostItem v-for="item in posts" :key="item.id" :item="item" />
      </div>
      <div class="grid">
        <ToolItem v-for="item in tools" :key="item.id" :item="item" />
      </div>
    </Content>
  </section>
</template>

<script>
import Header from '~/components/partials/Header'
import Content from '~/components/partials/Content'
import PostItem from '~/components/posts/PostItem'
import ToolItem from '~/components/tools/ToolItem'

export default {
  components: {
    Header,
    Content,
    PostItem,
    ToolItem
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
