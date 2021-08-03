<template>
  <active-user
    :user="appUser"
    :age="appAge"
  />
  <user-data
    @userChange="receiveUser"
    @ageChange="receiveAge"/>
</template>

<script>

export default {
  data() {
    return {
      appUser: '',
      appAge: 0
    }
  },
  methods: {
    receiveUser(user) {
      this.appUser = user;
    },
    receiveAge(age) {
      this.appAge = Number.parseInt(age)
    }
  }
}
</script>