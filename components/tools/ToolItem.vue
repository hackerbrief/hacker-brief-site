<template>
  <transition name="fade" appear>
    <div class="item col-1-1">
      <div class="container">
        <h1 class="title" v-text="item.title"></h1>
        <span v-for="tag in item.tags" :key="tag" class="tags">{{ tag }}</span>
        <div class="divider col-1-1"></div>
        <p class="description" v-text="item.description"></p>
        <div class="bottom col-1-1">
          <no-ssr>
            <a :href="item.url" target="_blank"> GITHUB <v-icon name="" /> </a>
          </no-ssr>
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
h1.title {
}
span.tags {
}
.divider {
}
p.description {
}
.bottom {
}
.bottom a {
  svg {
  }
  &:hover {
  }
}
</style>
