<template>
  <Content>
    <img :src="post.images.lg" :alt="post.title" class="post-image" />
    <transition name="fade" appear>
      <article v-html="article.body"></article>
    </transition>
  </Content>
</template>

<script>
import Content from '~/components/partials/Content'

export default {
  components: {
    Content
  },
  props: {
    post: {
      type: Object,
      required: true
    },
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
img.post-image {
}
article {
}
article img {
}
article h1 {
}
article h2 {
}
article h3 {
}
article p {
}
article p a {
}
article ul {
}
article ul li {
}
</style>
