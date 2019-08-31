<template>
<div class='order-main'>
    <div class='header'>
        <span slot="left" class='order-left'><i class='iconfont icon-fangdajing'></i></span>
        <Header title="订单列表"></Header>
    </div>
</div>
       
</template>
<script>
import Header from '../../components/Header/Header'
export default {
    components:{
        Header
    }
}
</script>
<style lang="stylus" scoped>
.header
    width 100%
    height 50px
    background-color #02a774
    position fixed
    color white
    display flex
    justify-content center
    align-items center
.hearder_title
    width 200px
    height 100%
    display block
.hearder_title_text
    width 100%
    height 100%
    overflow hidden
    text-overflow hidden 
    white-space nowrap
    background-color red
    display block
.order-left
    position absolute
    width 50px
    height 50px
    left 10px
    line-height 50px
    text-align center
    z-index 100
    display block
    i 
        height 50px
        width 50px
        display block
        font-size 20px
</style>