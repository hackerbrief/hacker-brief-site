<template>
  <div class="header col-1-1">
    <h1 v-text="title"></h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'HACKER BRIEF'
    }
  }
}
</script>

<style lang="scss" scoped></style>
