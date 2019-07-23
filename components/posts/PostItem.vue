<template>
  <transition name="fade" appear>
    <div class="item col-1-1">
      <div class="container">
        <img :src="item.images.sq" :alt="item.title" />
        <n-link :to="`/article/${item.slug}`" class="title">{{
          item.title
        }}</n-link>
        <span v-for="tag in item.tags" :key="tag" class="tags">{{ tag }}</span>

        <div class="divider col-1-1"></div>

        <p class="description" v-text="item.description"></p>
        <div class="bottom col-1-1">
          <p v-if="postCheck" v-text="item.created"></p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  @include card();
}
img {
}
.title {
  &:hover {
  }
}
span.tags {
}
.divider {
}
p.description {
}
.bottom {
}
.bottom p {
}
</style>
