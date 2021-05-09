<template>
  <li class="user-preview flex space-between align-center">
    <div class="user-info-container flex align-center">
      <div class="user-avatar-container flex center-center">
        <img :src="userImg" alt="user image" />
      </div>
      <div class="user-details flex column">
        <span class="user-city">{{ user.city }}</span>
        <span class="user-full-name">{{ userFullName }}</span>
      </div>
    </div>
    <div class="criteria-container flex center-center">
      {{ userCriteria }}
    </div>
  </li>
</template>
<script>
export default {
  name: 'user-preview',
  props: {
    user: {
      required: true,
      type: Object,
    },
  },
  computed: {
    userImg() {
      return `https://robohash.org/${this.user.id}?set=set5&size=56x56`
    },
    userFullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    },
    userCriteria() {
      return `criteria ${this.user.criteria}`
    },
  },
}
</script>