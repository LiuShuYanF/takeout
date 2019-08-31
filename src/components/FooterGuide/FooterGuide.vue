<template>
    <div class='footer'>
        <span class='big' :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
           <span class='meau'>
              <i class='iconfont icon-icon_im_face'></i>   
            </span>
            <span class='meau'>外卖</span> 
        </span>
        <span class='big' :class="{on: '/search'===$route.path}" @click="goTo('/search')">
            <span class='meau'>
              <i class='iconfont icon-iconset0394'></i>   
            </span>
            <span class='meau'>搜索</span> 
        </span>
        <span class='big' :class="{on: '/order'===$route.path}" @click="goTo('/order')">
            <span class='meau'>
              <i class='iconfont icon-list'></i>   
            </span>
            <span class='meau'>订单</span> 
        </span>
        <span class='big' :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
            <span class='meau'>
               <i class='iconfont icon-wode'></i>  
            </span>
            <span class='meau'>我的</span> 
        </span>
    </div>
</template>
<script>
export default {
    methods:{
        goTo (path) {
            this.$router.replace(path);
        }
    }
}
</script>
<style lang="stylus" rel='stylesheet/stylus'>
.footer
    width 100%
    height 62px
    background-color #fff
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    display flex
    border-top 1px solid #ccc
    overflow hidden
    justify-content space-around
    align-items center
.big
    display flex
    flex-direction column
    justify-content space-around
    align-items center
.iconfont
    font-size 25px
.meau
    font-size 14px
.on
    color #02a774
</style>