<template>
<div class='small'>
    <div class='small-header'>
        <img src="./images/nav/8.jpg" class='header-tu'>
        <div class='header-main'>
            <h3 class='header-title'>风味小炒及</h3>
            <p class='header-one'><span class="sale">月售126份</span><span class='sale'>好评率88%</span></p>
            <p class='header-one jg'>￥30</p>
            <p class='header-one'>主要原料：鸡肉</p>
            <p class='hanshu'>
                <span class='yuan sub' ref='sub' @click="subcart()">-</span>
                <input class='yuan shuliang' ref='shuliang' value='0'>
                <span class='yuan add' @click="addcart()">+</span>
            </p>
        </div>
    </div>
    <carts></carts>
</div>
    
</template>
<script>
import Carts from '../../components/Carts/Carts.vue'
export default {
     components:{
        Carts
    },
    methods:{
        addcart(){
            // 点击选项加减出现
            this.$refs.shuliang.value++;
            if(this.$refs.shuliang.value > 0){
                this.$refs.shuliang.style.display = 'block';
                this.$refs.sub.style.display = 'block';
            }
        },
        subcart(){
            this.$refs.shuliang.value--;
            if(this.$refs.shuliang.value<=0){
                this.$refs.shuliang.style.display = 'none';
                this.$refs.sub.style.display = 'none';
                this.$refs.shuliang.value = 0
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.small
    width 100%
    height 100%
.header-tu
    width 100%
    max-height 85%
    display block
.header-main
    width 100%
    height 15%
    box-sizing border-box
    padding 0 10px
.header-title
    width 100%
    margin 0
    padding 5px 0
    height 20px
    font-size 16px
    font-weight 800
.header-one
    margin 0
    padding 5px 0
    width 100%
    height 20px
    line-height 20px
    font-size 12px
.sale
    display block
    margin-right 10px 
    float left
.jg
    font-size 20px
    color red
    font-weight 800
.hanshu
    width 100px
    height 20px
    position absolute
    display flex
    flex-direction row
    justify-content space-around
    bottom 180px
    right 17px
.yuan
    display block
    width 20px
    height 20px
    background-color #02a774
    line-height 20px
    text-align center
    color white
    border-radius 50%
.shuliang
    border none
    display none
.sub
    display none 
</style>