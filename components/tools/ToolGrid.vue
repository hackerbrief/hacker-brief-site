<template>
  <Content>
    <SearchBar :tags="tags" :selected="tag" @tag="tagFilter">
      <input
        v-model="search"
        type="text"
        placeholder="Search..."
        class="search"
      />
    </SearchBar>
    <div class="grid col-1-1">
      <ToolItem
        v-for="item in queryItems"
        :key="item.id"
        :item="item"
        :type="type"
      />
    </div>
    <Pagination
      v-if="count > size"
      :pages="totalPages"
      :page="page"
      @page="handlePage"
      @prev="prevPage"
      @next="nextPage"
    />
  </Content>
</template>

<script>
import Content from '~/components/partials/Content'
import SearchBar from '~/components/partials/SearchBar'
import ToolItem from '~/components/tools/ToolItem'
import Pagination from '~/components/partials/Pagination'

export default {
  components: {
    Content,
    SearchBar,
    ToolItem,
    Pagination
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      search: '',
      tag: '',
      page: 1,
      size: 18,
      totalItems: 0,
      totalPages: 0
    }
  },
  computed: {
    queryItems: function() {
      let items = this.items
      if (this.tag !== '') {
        items = this.$tagsFilter(items, this.tag)
      }
      items = items.filter(obj => {
        return this.$keywordSearch(obj, this.search)
      })
      this.setCount(items.length)
      return items.filter((row, index) => {
        const start = (this.page - 1) * this.size
        const end = this.page * this.size
        if (index >= start && index < end) return true
      })
    }
  },
  watch: {
    search: function() {
      this.page = 1
    },
    page: function() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  methods: {
    setCount: function(count) {
      this.count = count
      this.pageCount = Math.round(count / this.size) + 1
    },
    tagFilter: function(tag) {
      this.tag = this.tag === tag ? '' : tag
      this.page = 1
    },
    handlePage: function(page) {
      if (this.page !== page) this.page = page
    },
    nextPage: function() {
      if (this.page * this.size < this.count) this.page++
    },
    prevPage: function() {
      if (this.page > 1) this.page--
    }
  }
}
</script>

<style lang="scss" scoped>
input.search {
  width: 100%;
  border: 1px solid $grey;
  margin: 0;
  padding: 0;
  height: 30px;
  text-indent: 10px;
  font-size: 1rem;
  line-height: 1.2rem;
  border-radius: 2px;
}
</style>
