<template>
  <div>
    <home-header></home-header>
    <home-tab></home-tab>
  </div>
</template>

<script>
  import HomeHeader from '@/pages/home/components/Header'
  import HomeTab from '@/pages/home/components/Tab'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeTab
    }
  }
</script>

<style lang="stylus" scoped>

</style>
