<template>
  <div id="nav col-1-1">
    <div class="links">
      <n-link to="/">
        <img
          src="/hb-logo-green.svg"
          alt="Hacker Brief Logo"
          class="show-at-sm"
        />
      </n-link>
      <n-link to="/" class="nav-link">HOME</n-link>
      <n-link to="/blog" class="nav-link">BLOG</n-link>
      <n-link to="/directory" class="nav-link">DIRECTORY</n-link>
    </div>
    <div class="socials hide-at-sm">
      <a :href="$store.getters.github" target="_blank"
        ><v-icon name="brands/github-square"
      /></a>
      <a :href="$store.getters.facebook" target="_blank"
        ><v-icon name="brands/facebook-square"
      /></a>
      <a :href="$store.getters.twitter" target="_blank"
        ><v-icon name="brands/twitter-square"
      /></a>
      <a :href="$store.getters.instagram" target="_blank"
        ><v-icon name="brands/instagram"
      /></a>
      <a :href="$store.getters.youtube" target="_blank"
        ><v-icon name="brands/youtube-square"
      /></a>
    </div>
    <div
      :class="[{ active: open }, 'sidenav-icon', 'show-at-sm']"
      @click="$emit('sidenav')"
    >
      <div class="bar b1"></div>
      <div class="bar b2"></div>
      <div class="bar b3"></div>
    </div>
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
#nav {
  @include position(fixed, 0, 0, null, 0);
  @include flex(row, nowrap, space-between, center);
  background-color: $primary;
  border-bottom: 1px solid $light;
}
.links {
  @include flex(row, nowrap, flex-start, center);
}
.links a img {
  width: 50px;
}
.links a.nav-link {
  text-decoration: none;
  padding: 15px 18px;
  font-size: 1.1rem;
  color: $white;
  transition: $speed;
  border-bottom: 2px solid transparent;
  &:hover {
    background-color: $secondary;
  }
  &.nuxt-link-exact-active {
    color: $light;
    border-bottom: 2px solid $light;
  }
}
.socials {
  @include flex(row, nowrap, flex-end, center);
  a {
    text-decoration: none;
    padding: 0 10px;
    color: $white;
    transition: $speed;
  }
  a:hover {
    color: $accent;
  }
  a svg {
    width: 20px;
    height: 20px;
  }
}
.sidenav-icon {
  display: inline-block;
  cursor: pointer;
  padding: 12px 18px;
}
.sidenav-icon .bar {
  width: 34px;
  height: 4px;
  background-color: $white;
  transition: $speed;
  border-radius: 5px;
  margin: 6px 0;
  &.b2 {
    width: 22px;
    margin: 6px 0 6px auto;
    transition: 0.5s;
  }
}
.sidenav-icon.active {
  .bar.b1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-7px, 6px);
    background-color: $light;
  }
  .bar.b2 {
    opacity: 0;
    width: 0;
  }
  .bar.b3 {
    -webkit-transform: rotate(45deg) translate(-9px, -7px);
    transform: rotate(45deg) translate(-7px, -7px);
    background-color: $light;
  }
}
</style>
