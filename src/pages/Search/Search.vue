<template>
<div class='search'>
    <div class='header' ref='header'>
        <span slot="left" class='search-left'><i class='iconfont icon-fangdajing'></i></span>
        <Header title="搜索"></Header>
    </div> 
    <div class='saerch-sou' ref='sousuo'>
        <input type="text" placeholder="请输入商家或美食名称" class='sousuokuang'>
        <button class='btn'>提交</button>
    </div>
    <div class='search-list'>
        <div class='list-sjt' v-for="i in 5" :key="i">
            <div class='tutu'><img src="../MSite/images/nav/6.jpg" class='tp'></div>
            <div class='detail'>
                <div class='de-top'>
                    <h4 class='de-title'><span class='pinpai'>品牌</span><span>杂粮煎饼</span></h4>
                    <p class='de-pj'><span>4.7</span><span>月售612单</span></p> 
                    <div class='de-sm'>
                        <p class='left'><span>$15元起送</span>|<span>配送费2.5元</span></p>
                        <p class='right'><span>654m</span>|<span>28分钟</span></p>
                    </div>
                    <p class='de-jm'><span>煎饼</span><span>品质联盟</span></p>
                </div>
               <div class='de-detail'>
                   <div class='zk'>
                        <p class='zkj'><span class='jian'>减</span><span class='zksm'>满27减16，满38减19，满49减22，满79减36</span><span class='hd'>4个活动</span></p>
                        <p class='zkz'><span class='jian'>折</span><span>折扣商品4.8折起</span></p>
                   </div>
                   <div class='sjt'>
                        <figure v-for='i in 3' :key="i" class='fb'>
                            <img src="../MSite/images/nav/6.jpg" alt="">
                            <figcaption>
                                <p class='mz'>小米粥(早餐真营养多吃点)</p>
                                <p class='je'>￥15.8</p>
                            </figcaption>
                        </figure>
                   </div>
                   
               </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Header from '../../components/Header/Header'
export default {
    components:{
        Header
    },
    methods:{
       getguding(){
            var that = this;
            window.onscroll = function(){
                var top = document.documentElement.scrollTop
                if(top>= 63){
                    that.$refs.sousuo.style.position = 'fixed';
                    that.$refs.sousuo.style.top = 63;
                }else{
                    that.$refs.sousuo.style.position = 'relative'; 
                }
            }
        },
    },
    created(){
        this.getguding()
    }
}
</script>
<style lang="stylus" scoped>
.search 
    width 100%
    height 100%
    display flex
    flex-direction column
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
.search-left
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
.saerch-sou
    margin-top 50px 
    padding 0 10px 5px 10px
    width 100%
    height 60px
    box-sizing border-box
    display flex
    justify-content center
    align-items center 
    font-weight 800
    font-size 16px
    background-color white
    z-index 100
.sousuokuang
    width 65%
    height 40px
    background-color #f2f2f2
    border-radius 4px
    color black 
    line-height 40px
    margin-right 8px
    border 1px solid #ccc
    padding 0 5px
    font-weight 800
    font-size 16px
    outline none
.btn
    width 20%
    height 40px 
    background-color #02a774
    border none 
    border-radius 4px
    font-weight 1000
    font-size 16px
    color white
.search-list
    width 100%
.list-sjt
    width 100%
    height 300px
    border 1px solid red
.tutu
    width 25%
    height 100%
    float left
    box-sizing border-box
    padding 0 2px
.tp
   display block
   width 100%
   height auto
   border 1px solid red
.detail
    width 75%
    height 100%
    float left
.de-top
    width 100%
    height 38%
    border 1px solid #ccc
.de-title
    margin 5px
    width 100%
    height 20px
    box-sizing border-box
    border 1px solid red
    font-size 14px
.pinpai
    display block
    font-size 12px
    background-color yellow 
    width 30px
    height 20px
    text-align center
    line-height 20px
    margin-right 5px
    float left
.de-pj
    width 100%
    height 20px
    margin 5px
    padding 0
    border 1px solid red
    font-size 12px
    line-height 20px
    span 
        margin-left 5px
.de-sm
    width 100%
    height 20px
    line-height 20px
    margin 5px
    padding 0
    font-size 12px
    border 1px solid red
    p 
        padding 0
        background-color yellow
        span 
            margin 0 2px
.left 
    float left
    margin 0 0 0 5px
.right
    float right 
    margin 0 10px 0 0
.de-jm
    width 100%
    height 20px
    line-height 20px
    margin 0
    padding 0
    font-size 12px
    span
        border 1px solid #ccc
        margin-left 10px
.de-detail
    width 100%
    height 60%
    border 1px solid yellow
.zk
    width 100%
    height 30%
    border 1px solid red
    margin 0
    padding 0
    box-sizing border-box
    font-size 12px
.zkj
    width 100%
    height 20px
    line-height 20px
    box-sizing border-box
    padding 0
    margin 5px 
.zkz  
    width 100%
    height 20px
    line-height 20px
    box-sizing border-box
    padding 0
    margin 5px
.jian
    width 15px
    height 20px
    background-color red
    display block
    float left
    margin-right 5px
    color white
    text-align center
.zksm
    width 180px
    height 20px
    overflow hidden
    text-overflow ellipsis  
    white-space nowrap 
    display block
    float left
    margin-right 5px
.hd
    float right 
    width 50px
    line-height 20px
    display block
    text-align center
    background-color pink
    margin-right 8px
.sjt
    width 100%  
    height 70%
.fb  
    width 30%
    height 100%
    border 1px solid red
    float left
    padding 0
    margin 0 3px
    display block
    img 
        width 100%
        height auto
        border 1px solid red
.mz
    width 100%
    height 20px
    margin 0
    padding 0
    font-size 12px
    overflow hidden
    text-overflow ellipsis  
    white-space nowrap 
.je
    width 100%
    height 20px
    margin 0
    padding 0
    font-size 14px
    color red
</style>