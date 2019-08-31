<template>
    <div class='carts'>
        <div class='carts-left'>
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> 
            <p class='xuangou'>
                <span class='xuangou-one'>未选购商品</span>
                <span class='xuangou-one'>零需配送费0.5元</span>
            </p>  
        </div>
        <div class='carts-right'>
           <h5>￥15元起送</h5> 
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
.carts
    width 100%
    height 62px
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    z-index 100
.carts-left
    border 1px solid #666
    width 70%
    height 100%
    padding-left 10px
    box-sizing border-box
    background-color #666
.fa-shopping-cart
    position absolute
    width 45px
    height 45px
    border 5px solid #999
    line-height 40px
    text-align center
    top -15%
    border-radius 50%
    background-color #666
.xuangou
    width 100%
    height 100%
    box-sizing border-box
    padding-left 60px
.xuangou-one
    display block
    margin 0
    padding 0
    font-size 12px
    color #f2f2f2
    margin 5px 0
.carts-right
    width 30%
    height 100%
    box-sizing border-box
    background-color #999
    text-align center
    line-height 63px
    h5
        color white
        font-weight 600
        font-size 16px
        margin 0
        padding 0
</style>