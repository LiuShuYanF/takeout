<template>
<div class='find'>
    <div class='find-connect'>
        <div class='header'>
            <h2>为你推荐</h2>
            <p>你得口味,我都懂的</p>
        </div>
        <div class='find-main' v-for='i in 4' :key="i">
            <img src="../MSite/images/nav/1.jpg" alt="">
            <h4 class='main-title'>超值套餐</h4>
            <p class='main-pj'><span>月售94份</span><span>好评率100%</span></p>
            <p class='main-zk'><span>$29</span><span>满22减13</span></p>
            <p class='main-sj'>香喷喷木桶饭</p>
        </div>
        <div class='find-more'>
            <p>加载更多</p>
        </div>
    </div>
    <div class='find-connect2'>
        <div class='header'>
            <h2>显示好礼</h2>
            <p>金币换豪礼</p>
        </div>
        <div class='find-main' v-for='i in 6' :key="i">
            <img src="../MSite/images/nav/1.jpg" alt="">
            <h4 class='main-title'>超值套餐</h4>
            <p class='main-pj'><span>月售94份</span><span>好评率100%</span></p>
            <p class='main-zk'><span>$29</span><span>满22减13</span></p>
            <p class='main-sj'>香喷喷木桶饭</p>
        </div>
        <div class='find-more'>
            <p>加载更多</p>
        </div>
    </div> 
</div>
</template>
<style lang="stylus" scoped>
.find
    width 100%
    height 100%
    background-color #f2f2f2
.find-connect
    width 100%
    height 630px
    margin-bottom 10px
    background-color white
.header
    width 100%
    height 75px
    box-sizing border-box
    padding 10px 0
    background-color pink
    h2 
        margin 0
        padding 0
        width 100%
        height 35px
        text-align center
        line-height 35px
        font-size 18px
        border 1px solid red
    p 
        margin 0
        padding 0
        width 100%
        height 20px
        text-align center
        line-height 20px 
        font-size 12px
        border 1px solid red
.find-main
    width 50%
    height 260px
    padding 0 10px
    border 1px solid red
    box-sizing border-box
    float left
    img 
        width 100%
        height 150px
        display block
        border 1px solid red
.main-title
    margin 0
    padding 0 10px
    width 100%
    line-height 20px
    border 1px solid red
    box-sizing border-box
.main-pj
    padding 0 10px
    box-sizing border-box
    margin 0
    width 100%
    line-height 15px
    font-size 12px
    border 1px solid red
.main-zk
    margin 0
    padding 0 0 5px 10px
    box-sizing border-box
    width 100%
    line-height 25px
    font-size 14px
    color red
    border 1px solid #ccc
.main-sj
    margin 0
    padding 0 10px
    box-sizing border-box
    width 100%
    line-height 30px
    font-size 12px
    color #ccc
    border 1px solid blue
.find-more 
    width 100%
    height 40px
    font-size 14px
    color #cccccc
    line-height 40px
    text-align center
</style>