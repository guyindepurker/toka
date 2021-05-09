<template>
  <loader
    v-if="isLoading || !users.length || !cities.length || !criteria.length"
  />
  <div class="toka-app" v-else>
    <filter-by  :cities="cities" :criteria="criteria" />
    <return-button title="Resultes" v-if="filterBy" @return="resetFilterBy" />
    <user-list :users="usersToShow" />
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
import loader from '@/components/Loader'
import filterBy from '@/components/FilterBy'
import userList from '@/components/UserList'
import returnButton from '@/components/ReturnButton'
export default {
  name: 'Toka-app',
  components: { loader, filterBy, userList,returnButton },
  computed: {
    ...mapGetters(['filterBy','isLoading', 'users', 'cities', 'criteria', 'usersToShow']),
  },
  methods:{
    resetFilterBy(){
      this.$store.commit({type:'setFilterBy',filterBy:null})
    },
    ...mapActions(['turnOffSocket'])
  },
  destroyed(){
    this.turnOffSocket()
  }

}
</script>