<template>
  <section v-if="!isSocketConnect" class="home flex column center-center">
      <div class="flex column" >
      <img class="logo" src="@/assets/images/logo.svg" alt="logo" />
    <loader />    
    </div>
  </section>
    <scanning v-else-if="isLoading && isSocketConnect" >
      <return-button slot="header" title="Scanning..." @return="cancelAction" />
    <loader  />
    </scanning>
    <div @click="resetErrorMsg()" v-else-if="errorMsg" class="flex center-center"><h1 class="error-msg">{{errorMsg}}</h1></div>
    <get-data v-else @getData="loadData" />
</template>

<script>
import getData from '@/components/GetData'
import loader from '@/components/Loader'
import scanning from '@/components/Scanning'
import returnButton from '@/components/ReturnButton'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: { getData, loader,scanning,returnButton },
  computed: {
    ...mapGetters(['isSocketConnect', 'isLoading','errorMsg']),
  },
  methods: {
    ...mapActions(['loadData','setupSocket']),
    cancelAction(){
      const data = {users:[],cities:[],criteria:[]}
      this.$store.commit({type:'setData',data})
      this.$store.commit({type:'setIsLoading',isLoading:false})
    },
    resetErrorMsg(){
      this.$store.commit({type:'setErrorMsg',errorMsg:null})
    }
  },
  created(){
    this.setupSocket()
  }
}
</script>
