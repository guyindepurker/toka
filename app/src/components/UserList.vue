<template>
  <ul class="clean-list user-list flex column">
    <li class="count">{{ useresNumber }}</li>
    <user-preview v-for="user in users" :user="user" :key="user.id" />
  </ul>
</template>
<script>
import userPreview from '@/components/UserPreview'
export default {
  name: 'user-list',
  props: {
    users: {
      required: true,
      type: Array,
    },
  },
  components: { userPreview },
  computed: {
    useresNumber() {
      return `${this.users.length} Found`
    },
  },
}
</script>