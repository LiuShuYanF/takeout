<template>
<div class='header'>
    <slot name='left' class='left'></slot>
    <div class='hearder_title'>
        <span class='hearder_title_text'>
            {{title}}
        </span>
    </div>
    <slot name='right'></slot>
</div>
</template>
<script>
export default {
    props:{
        title:String,
    }
}
</script>
<style lang="stylus" rel='stylesheet/stylus' scoped>
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
</style>