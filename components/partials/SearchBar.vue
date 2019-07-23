<template>
  <div class="search-bar col-1-1">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
