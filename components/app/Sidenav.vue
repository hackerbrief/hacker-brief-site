<template>
  <div id="sidenav" :class="{ active: open }">
    <n-link to="/">HOME</n-link>
    <n-link to="/blog">BLOG</n-link>
    <n-link to="/directory">DIRECTORY</n-link>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
#sidenav {
  @include flex(column, nowrap, flex-start, center);
  @include position(fixed, 0, null, 0, 0);
  height: 100%;
  width: 0;
  z-index: 5;
  transition: $speed;
  background-color: $primary;
}
#sidenav.active {
  width: 100%;
  a {
    opacity: 1;
  }
}
#sidenav a {
  color: $white;
  font-size: 1.4rem;
  text-decoration: none;
  padding: 20px 0;
  opacity: 0;
  transition: $speed;
  margin: 20px 0 0;
}
</style>
