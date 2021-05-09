<template>
  <div class="get-data">
    <logo />
    <div @click="onGetData()" class="grow get-data-btn flex center-center">
      <h1 class="start-btn">Start</h1>
    </div>
    <app-footer />
  </div>
</template>
<script>
import logo from '@/components/Logo'
import appFooter from '@/components/Footer'
import loader from '@/components/Loader'
export default {
  name: 'get-data',
  components: { logo, appFooter, loader },
  methods: {
    onGetData() {
      this.$emit('getData')
    },
  },
}
</script>