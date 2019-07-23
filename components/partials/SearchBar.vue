<template>
  <div class="search-bar col-1-1">
    <div class="container">
      <slot></slot>
      <div v-for="tag in tags" :key="tag" class="search-tags col-1-1">
        <button
          :class="{ active: tag === selected }"
          @click="$emit('tag', tag)"
        >
          {{ tag }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  background-color: $primary;
  border-radius: $radius;
  box-shadow: 0 2px 8px $shadow;
}
.search-tags {
  @include flex(row, nowrap, flex-start, center);
  margin: 12px 0 0;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 0 10px;
}
.search-tags::-webkit-scrollbar {
  width: 10px;
}
.search-tags::-webkit-scrollbar-track {
  -webkit-box-shadow: var(--primary);
}
.search-tags::-webkit-scrollbar-thumb {
  background-color: var(--accent);
  outline: 1px solid var(--accent);
}
button {
  background-color: $secondary;
  padding: 8px 12px;
  font-size: 0.8rem;
  margin: 0 10px 0 0;
  border-radius: $radius;
  border: none;
  color: $white;
  cursor: pointer;
  transition: $speed;
  outline: none;
  white-space: nowrap;
  &:active {
    box-shadow: none;
  }
  &.active {
    background-color: $accent;
    color: $white;
    box-shadow: none;
  }
}
</style>
