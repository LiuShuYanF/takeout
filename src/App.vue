<template>
  <div class="main">
    <router-view></router-view>  
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'app',
  components: {
    FooterGuide,
  }
}
</script>
<style lang="stylus" rel='stylesheet/stylus'>
html,body
    width 100%
    height 100%
    margin 0
    padding 0
.main
    width 100%
    height 100%
</style>
