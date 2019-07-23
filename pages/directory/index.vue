<template>
  <section id="directory">
    <Header title="DIRECTORY" description="DEVELOPER TOOLS & RESOURCES" />
    <ToolGrid :items="tools" :tags="tags" type="tool" />
  </section>
</template>

<script>
import Header from '~/components/partials/Header'
import ToolGrid from '~/components/tools/ToolGrid'

export default {
  components: {
    Header,
    ToolGrid
  },
  asyncData({ store }) {
    return {
      tools: store.getters.tools,
      tags: store.getters.directoryTags
    }
  },
  head() {
    this.directorySeo()
  }
}
</script>
