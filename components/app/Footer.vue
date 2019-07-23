<template>
  <div id="footer col-1-1">
    <img src="/hb-logo-white.svg" alt="Hacker Brief Logo" />
    <div class="links">
      <n-link to="/">HOME</n-link>
      <n-link to="/blog">BLOG</n-link>
      <n-link to="/directory">DIRECTORY</n-link>
    </div>
    <div class="copyright">
      <no-ssr>
        <v-icon name="regular/copyright" />
        <span>Copyright 2019, Hacker Brief</span>
      </no-ssr>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#footer {
  @include flex(column, nowrap, center, center);
  background-color: $accent;
  background-image: url('/graph-bg.png');
  border-top: 1px solid $light;
}
#footer img {
  width: 260px;
}
.links {
  @include flex(row, wrap, center, center);
  padding: 0 0 20px;
}
.links a {
  color: $white;
  font-size: 1.1rem;
  text-decoration: none;
  margin: 0 0 0 15px;
  transition: $speed;
}
.links a:first-of-type {
  margin: 0;
}
.links a:hover {
  color: $primary;
}
@media screen and (max-width: $sm) {
  .links {
    @include flex(column, nowrap, center, center);
  }
  .links a {
    padding: 12px 0;
    margin: 0;
  }
}
.copyright {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 10px 0;
}
.copyright svg {
  height: 10px;
  width: 10px;
  color: var(--white);
}
.copyright span {
  font-size: 0.8rem;
  color: var(--white);
  margin: 0 0 0 5px;
}
</style>
