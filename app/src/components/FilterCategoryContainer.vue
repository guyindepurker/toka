<template>
  <div class="filter-catergory-container">
    <h3 class="filter-title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'filter-catergory-container',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>