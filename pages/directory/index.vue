<template>
  <section id="directory">
    <Header title="DIRECTORY" />
    <Grid :items="tools" :tags="tags" type="tool" />
  </section>
</template>

<script>
import Header from '~/components/partials/Header'
import Grid from '~/components/partials/Grid'

export default {
  components: {
    Header,
    Grid
  },
  asyncData({ store }) {
    return {
      tools: store.getters.allTools,
      tags: store.getters.directoryTags
    }
  }
  head() {
    this.directorySeo()
  }
}
</script>
