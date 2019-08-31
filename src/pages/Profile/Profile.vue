<template>
<div class='profile-main'>
    <div class='header'>
        <Header title="我的"></Header>
    </div>
    <router-link to="/login" class='profile-top'>
       <img src="../MSite/images/nav/1.jpg" alt=""> 
       <div class='profile-top-right'>
           <p class='zhuce'>注册/登录</p>
           <p><i class='iconfont icon-fangdajing'></i><span>暂无绑定手机号</span></p>
           <span class='jiantou'>></span>
        </div>
    </router-link>
    <div class='profile-next'>
        <div class='profile-one'>
            <h3>0.00元</h3>
            <p>我的余额</p>
        </div>
        <div class='profile-one'>
            <h3>0.00元</h3>
            <p>我的余额</p>
        </div>
        <div class='profile-one'>
            <h3>0.00元</h3>
            <p>我的余额</p>
        </div>
    </div>
    <div class='profile-bottom'>
        <div class='profile-bottom-one'>
            <p class='last'><i class='iconfont icon-fangdajing'></i><span>我的订单</span><em class='profile-right'>></em></p>
            <p class='last'><i class='iconfont icon-fangdajing'></i><span>积分商城</span><em class='profile-right'>></em></p>
            <p><i class='iconfont icon-fangdajing'></i><span>饿了么会员卡</span><em class='profile-right'>></em></p>
        </div>
        <div class='profile-bottom-two'>
            <p class='last'><i class='iconfont icon-fangdajing'></i><span>服务中心</span><em class='profile-right'>></em></p>
            <p><i class='iconfont icon-fangdajing'></i><span>下载饿了么APP</span><em class='profile-right'>></em></p>
        </div>
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
<style lang="stylus" rel='stylesheet/stylus' scoped>
.profile-main
    width 100%
    height 100%
    display flex
    flex-direction column
    background-color #f2f2f2
.header
    width 100%
    height 50px
    background-color #02a774
    position fixed
    color white
    display flex
    justify-content center
    align-items center
    overflow hidden
.profile-top
    width 100%
    height 100px
    margin-top 50px
    background-color #02a774
    display flex
    flex-direction row
    box-sizing border-box
    padding 0 20px
    color  white
    overflow hidden
    img 
        width 80px
        height 80px
        border-radius 50%
        display block
        margin-top 10px
.profile-top-right
    width 300px
    height 80px
    margin-top 10px
    margin-left 10px
    display flex
    justify-content space-around
    align-items flex-start
    flex-direction column
    p
        padding 0
        margin 0
.icon-fangdajing
    margin-right 5px
.zhuce
    font-size 20px
    font-weight 1000
    text-align left 
    border none 
.jiantou
    width 50px
    height 50px
    position absolute
    right 0
    font-size 20px
    top 85px
.profile-next
    width 100%
    height 100px
    display flex
    flex-direction row
    justify-content space-between
    text-align center
    overflow hidden
    border-bottom 1px solid #f2f2f2
    color #999
.profile-one
    width 33.1%
    height 100%
    background-color white
.profile-bottom
    width 100%
    height 300px
.profile-bottom-one
    margin-top 5px
    width 100%
    height 150px
    box-sizing border-box
    padding 0 20px
    background-color white
    p
        width 100%
        height 50px
        line-height 50px
        margin 0 20px
        padding 0 
        box-sizing border-box
        i 
            position absolute
            width 50px
            height 50px
            left 15px
        .profile-right
            position absolute
            width 50px
            height 50px
            right  10px
            font-style normal
            text-align center
.profile-bottom-two
    background-color white
    width 100%
    height 100px
    box-sizing border-box
    padding 0 20px
    margin-top 5px
    p
        width 100%
        height 50px
        line-height 50px
        margin 0 20px
        padding 0 
        box-sizing border-box
        i 
            position absolute
            width 50px
            height 50px
            left 15px
        .profile-right
            position absolute
            width 50px
            height 50px
            right  10px
            text-align center
            font-style normal
.last
    border-bottom 1px solid #ccc
</style>