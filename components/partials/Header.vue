<template>
  <div class="header col-1-1">
    <div class="container">
      <h1 v-text="title"></h1>
      <p v-if="description != ''" v-text="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'HACKER BRIEF'
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: $accent;
  background-image: url('/images/graph-bg.png');
  min-height: 170px;
  border-bottom: 1px solid $light;
  transition: $speed;
}
h1 {
  color: $white;
  margin: 0;
  font-size: 3rem;
  text-align: center;
  transition: $speed;
}
p {
}
</style>
