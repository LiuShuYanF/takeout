<template>
    <div class='login'>
        <div class='login-header'>
            <div slot="left" class='login-left'>
                <i class='iconfont icon-fangdajing' @click="$router.back()"></i>
            </div>
            <Header title='lsy外卖'></Header>
        </div>
        <div class='login_header_title'>
            <a href="#" :class="{on: loginway}" @click="loginway=true">短信登陆</a>
            <a href="#" :class="{on: !loginway}" @click="loginway=false">密码登录</a>
        </div>
        <div class='login_concent'>
            <form>
                <!-- <div> -->
                <div :class="{active: !loginway}">
                    <section class='login_message'>
                        <input type="text" placeholder="手机号" v-model="phone">
                        <button class='get_yzm' :class="{right_pnone:rightphone}" @click.prevent='getcode()'>
                            {{computertime?`已发送(${computertime})`:'获取验证码'}}
                        </button>
                    </section>
                    <section class='login_yzm'>
                        <input type="text" placeholder="验证码">
                    </section>
                    <section class='login_hint'>
                        温馨提示：未注册账户的手机号，登陆时将自动注册，且代表已同意
                        <a href='#'>《用户服务协议》</a>
                    </section>
                </div>
                <!-- <div style="display:none"> -->
                <div :class="{active: loginway}">
                    <section class='login_message'>
                        <input type="text" placeholder="手机/邮箱/用户名">
                    </section>
                    <section class='login_yzm'>
                        <input type="password" placeholder="7777 " v-if="isshow" v-model="pwd">
                        <input type="text" placeholder="密码" v-else>
                        <div @click="isshow!=isshow" class='showpwd off' :class="isshow?'off':'on'">
                            <div class='switch_circle left' :class="isshow?'left':'right'">abc</div>
                            <span class='show'></span>
                        </div>
                        
                    </section>
                    <section class='login_hint'>
                        温馨提示：未注册账户的手机号，登陆时将自动注册，且代表已同意
                        <a href='#'>《用户服务协议》</a>
                    </section>
                </div>
            </form>
            <p class='login'>登录</p>
            <a href="#" class='about_us'>关于我们</a>
        </div>
        
        <!-- <a href='#' class='go_back' @click="$router.back()">
            <i></i>
        </a> -->
    </div>
</template>
<script>
import Header from '../../components/Header/Header'
export default {
    components:{
        Header
    },
    data(){
        return {
            loginway:true,//短信登陆
            phone:'',
            computertime:0,
            isshow:true,
            pwd:'',
        }
    },
    computed:{
        rightphone(){
            return /^1\d{10}$/.test(this.phone);
        }
    },
    methods:{
        getcode(){
            // 倒计时
            if(!this.computertime){
                this.computertime = 30;
                const intervalid = setInterval(()=>{
                    this.computertime--;
                    if(this.computertime<=0){
                        clearInterval(intervalid);
                    }
                },1000)
            }
            


            // .switch_abc
            //     width 26px
            //     height 26px
            //     border 1px solid #ccc
            //     position absolute
            //     top 180px
            //     right 55px
            //     border-radius 50%
            // .switch_circle
            //     width 50px
            //     height 26px
            //     border 1px solid #ccc
            //     position absolute
            //     top 180px
            //     right 30px
            //     border-radius 5px
            //     display block
            //     font-size 12px
            //     .show
            //         display block
            //         margin -13px 0 0 0
            //         padding 0
            //         display none
            // 发送ajax请求
        }
    }
}
</script>
<style lang="stylus" rel='stylesheet/stylus'>
@import '../../common/css/index'
.login
    width 100%
    height 100%
    display flex
    background-color #f2f2f2
    flex-direction column
.login-header
    width 100%
    height 50px
    background-color #02a774
    position fixed
    color white
    display flex
    justify-content center
    align-items center
    overflow hidden
.login-left
    position absolute
    width 50px
    height 50px
    left 10px
    line-height 50px
    text-align center
    z-index 100
    i 
        height 50px
        width 50px
        display block
        font-size 20px
.login_header_title
    margin-top 50px
    width 100%
    height 50px
    background-color pink
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    a 
        display block
        width 80px
        height 40px
        line-height 40px
        text-align center
        font-size 18px
        text-decoration none
        font-weight 500
    .on 
        border 2px solid #02af774
        color #02af774
.login_concent
    width 100%
    border 1px solid red
    box-sizing border-box
    padding 10px
    box-sizing border-box
    form 
        width 100%
        .active
            width 100%
            height 100%
            display none
        .login_message
            width 100%
            height 50px
            line-height 50px
            box-sizing border-box
            padding 5px 10px
            position relative    
            input 
                border none 
                background-color white
                width 100%
                height 100%
                box-sizing border-box
                padding 0 10px
            .get_yzm 
                width 90px
                height 30px
                position absolute
                right 26px
                top 18px
                border none
                border-radius 5px
                color #ccc
                background-color white
                &.right_pnone
                    color black
        .login_yzm
            width 100%
            height 50px
            line-height 50px
            box-sizing border-box
            padding 5px 10px
            input 
                border none 
                background-color white
                width 100%
                height 100%
                box-sizing border-box
                padding 0 10px
                position relative
            .showpwd
                position absolute
                top 175px
                right 55px
                width 50px
                height 26px
                line-height 26px
                text-align center
                font-size 12px
                color white
                border-radius 15px
                border 1px solid #ccc
                &.off
                    background-color black
                &.on
                    background-color #02a774
                .show
                    width 26px
                    height 26px
                    border-radius 50%
                    margin 0
                    padding 0
                    display block
                    background-color red
                    position absolute
                    top 0
                    &.right
                        transform translateX(20px)
                    &.left
                        transform translateX(-20px)
        .login_hint
            margin-top 20px
            background-color pink
            box-sizing border-box
            padding 5px 15px
            line-height 20px
            font-size 12px
            a 
                text-decoration none 
                color #02a774
    .login
        width 100%
        margin-top 20px
        height 50px
        box-sizing border-box
        padding 5px 10px
        background-color #02a774
        border none 
        color white
        line-height 40px
        text-align center 
        font-size 18px
        font-weight 600
    .about_us
        width 100%
        height 40px
        box-sizing border-box
        padding 5px 10px
        color #999
        line-height 30px
        text-align center 
        font-size 12px
        display block
        text-decoration none
           
</style>