<template>
  <div @click="onReturn" class="reutrun-button flex align-center">
    <img src="@/assets/images/arrow-left.svg" alt="arrow left" />
    <span>{{title}}</span>
  </div>
</template>
<script>
export default {
  name: 'return-button',
  props:{
    title:{
      type:String,
      default:'Return'
    }
  },
  methods: {
    
    onReturn() {
      this.$emit('return')
    },
  },
}
</script>