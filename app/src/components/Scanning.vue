<template>
   <div class="scanning flex column">
       <slot name="header"></slot>
       <slot></slot>
     </div> 
</template>
<script>
export default {
    name:'scaning-screen'
}
</script>