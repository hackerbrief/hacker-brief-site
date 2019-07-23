<template>
  <section id="article" class="light">
    <Header :title="post.title" :description="post.description" />
    <Content>
      <img :src="post.images.lg" :alt="post.title" class="post-image" />
      <transition name="fade" appear>
        <article v-html="article.body"></article>
      </transition>
    </Content>
  </section>
</template>

<script>
import Header from '~/components/partials/Header'
import Content from '~/components/partials/Content'

export default {
  components: {
    Header,
    Content
  },
  async asyncData({ app, store, params }) {
    const post = await store.getters.postBySlug(params.slug)
    const article = await app.$fetchArticle(post.article)
    return {
      post: post,
      article: article
    }
  },
  head() {
    this.postSeo(this.post)
  },
  validate({ store, params, error }) {
    if (store.getters.postBySlug(params.slug)) return true
    else {
      error({ statusCode: 404 })
    }
  }
}
</script>

<style lang="scss" scoped>
img.post-image {
}
article {
}
article h1 {
}
</style>
