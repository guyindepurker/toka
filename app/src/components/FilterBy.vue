<template>
  <section class="filter">
    <div class="filter-header flex space-between">
      <el-input
        @input="onSetFilterBy"
        type="text"
        prefix-icon="el-icon-search"
        v-model="filterBy.query"
        placeholder="Quick search..."
      ></el-input>
    </div>
    <aside class="filter-sidebar">
      <filter-category-container title="Criteria">
        <el-checkbox-group
          @change="onSetFilterBy"
          class="checkbox-list flex column"
          v-model="filterBy.criteria"
        >
          <el-checkbox
            v-for="currCriteria in criteria"
            :value="currCriteria.criteria"
            :key="currCriteria.id"
            :label="`Criteria ${currCriteria.criteria}`"
          ></el-checkbox>
        </el-checkbox-group>
      </filter-category-container>
      <filter-category-container title="City">
        <el-checkbox-group
          @change="onSetFilterBy"
          class="checkbox-list flex column"
          v-model="filterBy.cities"
        >
          <el-checkbox
            v-for="currCity in cities"
            :key="currCity.id"
            :label="currCity.city"
          >
          </el-checkbox>
        </el-checkbox-group>
      </filter-category-container>
    </aside>
  </section>
</template>
<script>
import filterCategoryContainer from '@/components/FilterCategoryContainer'
export default {
  name: 'filter-by',
  components: { filterCategoryContainer },
  props: {
    criteria: {
      type: Array,
      requird: true,
    },
    cities: {
      type: Array,
      requird: true,
    },
  },
  data() {
    return {
      filterBy: this.emptyFilterBy(),
    }
  },
  computed: {
    filterByFromStore() {
      return this.$store.getters.filterBy
    },
  },
  methods: {
    onSetFilterBy() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy))
      this.$store.commit({ type: 'setFilterBy', filterBy })
    },
    emptyFilterBy() {
      return {
        cities: [],
        criteria: [],
        query: '',
      }
    },
  },
  watch: {
    filterByFromStore(value) {
      if (!value) {
        this.filterBy = this.emptyFilterBy()
      }
    },
  },
}
</script>