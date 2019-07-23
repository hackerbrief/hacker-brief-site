<template>
  <div class="pagination col-1-1">
    <button @click="$emit('prev')" class="prev">PREV</button>
    <div v-for="p in pages" :key="p" class="pages">
      <button @click="$emit('page', p)">{{ p }}</button>
    </div>
    <button @click="$emit('next')" class="next">NEXT</button>
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
button.prev,
button.next {
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
