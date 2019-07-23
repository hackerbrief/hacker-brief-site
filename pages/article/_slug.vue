<template>
  <section id="article" class="light">
    <Header :title="post.title" />
    <Content>
      <div class="image">
        <img :src="article.image" :alt="post.title" />
      </div>
      <Article :body="article.body" />
    </Content>
  </section>
</template>

<script>
import Header from '~/components/partials/Header'
import Content from '~/components/partials/Content'
import Article from '~/components/partials/Article'

export default {
  components: {
    Header,
    Content,
    Article
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
    this.postSeo(article)
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
.image {}
</style>
