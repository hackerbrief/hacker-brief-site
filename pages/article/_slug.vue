<template>
  <section class="light">
    <Header :title="post.title" :description="post.description" />
    <PostArticle :post="post" :article="article" />
  </section>
</template>

<script>
import Header from '~/components/partials/Header'
import PostArticle from '~/components/posts/PostArticle'

export default {
  components: {
    Header,
    PostArticle
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

<style lang="scss" scoped></style>
