<template>
<div class='msite-top'>
    <div class='header'>
        <div slot="left" class='header-left'>
            <i class='iconfont icon-fangdajing'></i>
        </div>
        <Header title="上海市青浦区松润街道1178弄"></Header>
        <div slot="right" class='header-right'>
            <span>注册|登录</span>
        </div>
    </div>
    <div class="swiper-container"> 
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <figure v-for="i in 8" :key="i">
                    <img src="./images/nav/1.jpg" alt="">
                    <figcaption>甜品饮品</figcaption>
                </figure>
            </div>
            <div class="swiper-slide">
                <figure v-for="i in 8" :key="i">
                    <img src="./images/nav/2.jpg" alt="">
                    <figcaption>甜品饮品</figcaption>
                </figure>
            </div>
        </div>
         <!-- 如果需要分页器  -->
        <div class="swiper-pagination"></div>
    </div>
    <Shoplist></Shoplist>
</div> 
</template>
<script>
import Header from '../../components/Header/Header'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Shoplist from '../../components/Shoplist/Shoplist'
export default {
    mounted() {
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    components:{
        Header,
        Shoplist
    },
   
}
</script>
<style lang="stylus" scoped>
.msite-top
    width 100%
    height 100%
    background-color #f2f2f2
    border 1px solid #ccc
.header
    width 100%
    height 43px
    background-color #02a774
    color white
    box-sizing border-box
    position fixed
    left 0
    right 0
    top 0
    z-index 10
.hearder_title
    width 50%
    margin  0 auto
    text-align center
    font-size 20px
    line-height 43px
.hearder_title_text
    width 100%
    height 100%
    display block
    overflow hidden  
    text-overflow ellipsis 
    white-space nowrap
.header-left
    position absolute
    width 21px
    height 43px
    left 15px
    z-index 100
    color white
    line-height 43px
    i 
        height 21px
        width 21px
        display block
        font-size 23px
.header-right
    position absolute
    width 65px
    height 43px
    right 10px
    line-height 43px
    text-align center
    font-size 15px
    color white
    z-index 100
.swiper-container
    background-color white
    width 100%
    height 210px
    border-top 1px solid #ccc
    border-bottom 1px solid #ccc
    margin-top 43px
    overflow auto
.swiper-wrapper
    width 100%
    height 100%
.swiper-slide
    width 100%
    height 91%
    display flex
    flex-wrap wrap
    justify-content space-around
    text-align space-around 
    font-size 12px
    color #666 
    overflow auto
    figure 
        width 93px
        height 100px
        display flex
        flex-direction column
        justify-content space-around
        align-items center
        margin 0
        padding 7px 0
        box-sizing border-box
        img 
            width 42px
            height 42px
            border-radius 50%
            display block
</style>