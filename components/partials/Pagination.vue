<template>
  <div class="pagination col-1-1">
    <button @click="$emit('prev')">PREV</button>
    <button @click="$emit('next')">NEXT</button>
  </div>
</template>

<script>
export default {
  pages: {
    type: Number,
    required: true
  },
  page: {
    type: Number,
    required: true
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  @include flex(row, nowrap, center, center);
}
button {
  &:hover {
  }
  &:active {
  }
  &.active {
  }
}
</style>
