<template>
  <section id="error-page">
    <h1>{{ error.statusCode }}</h1>
    <h2 v-if="error.statusCode === 404">Page Not Found</h2>
    <h2 v-else>An Error Occurred</h2>
    <n-link to="/">Back to Home</n-link>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
section#error-page {
  width: 100%;
  height: 100%;
  background-color: $grey;
  background-image: url('/images/graph-bg.png');
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
}
h1 {
  font-family: 'Bungee Outline', cursive;
  font-size: 6rem;
  margin: 25px 0;
  color: $red;
}
h2 {
  font-size: 1.4rem;
  margin: 0 0 40px;
}
a {
  text-decoration: none;
  font-size: 1.4rem;
  padding: 5px 7px;
  border: 2px solid $red;
  border-radius: $radius;
  color: $red;
  transition: $speed;
}
a:hover {
  background-color: $red;
  color: $white;
}
</style>
