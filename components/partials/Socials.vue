<template>
  <no-ssr>
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
  </no-ssr>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  padding: 0 10px;
  color: $white;
  transition: $speed;
  margin: 0 10px 0 0;
  &:last-of-type {
    margin: 0;
  }
  &:hover {
    color: $accent;
  }
}
a svg {
  width: 20px;
  height: 20px;
}
</style>
