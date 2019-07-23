<template>
  <article v-html="body"></article>
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
article {}
</style>
