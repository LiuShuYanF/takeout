<template>
    <div class='msite-shop-list' >
        <div class='shop-list-header'>
            <p class='sj'><i class="iconfont icon-shangjia"></i>附近商家</p>
        </div> 
            <div class='shop-list-main' v-for='(v,i) in goodslist' :key='i' @click='tiaozhuan(v.id)'> 
                <div class='main-img'><img :src="v.image"></div>
                <div class='shop-main'>
                    <div class='main-one'>
                        <p class='main-one-p1'><b class='pinpai'>品牌</b><b class='xiaoguo'>{{v.name}}</b></p>
                        <p class='main-one-p1 promise'>保准票</p>
                    </div>
                    <div class='main-one'>
                        <p class='main-one-p1'><span class='dafen'>{{v.credit}}</span><span class='month'>月销售{{v.sales}}</span></p>
                        <p class='main-one-p1'><span class='feng'>蜂鸟转售</span><span class='timer'>准时达</span></p>
                    </div>
                    <div class='main-one'>
                        <p class='main-one-p1 small'>{{v.sendamount}}元起送/配送费￥{{v.shipping}}元</p>
                        <p class='main-one-p1 small'>{{v.distance}}公里/<span class='change'>{{formatDate(v.time)}}</span></p>
                    </div>
                </div> 
            </div>
            <div ref='shopmore' class='shop-more'>
                <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>
                <span class="sr-only">Loading...</span>
             </div>
    </div>
</template>
<script>
//  import { formatDate } from '../../components/Shoplist/Shoplist.vue' 
export default {
     data(){
        return {
            goodslist:[],
            pagenum:1,
        }
    },
    methods:{
        tiaozhuan(id){
            this.$router.push({
                path:'/detail',
                query:{
                    shopId:id,
                }
            })
        },
        getgoods(pagenum){
            this.axios.get(`http://192.168.0.107:1025/api/shop?pageNum=${pagenum}&pageSize=10`).then(res=>{
               var that = this;
               if(res.data.data.length==0)
               that.$refs.shopmore.style.display = 'none';
               setTimeout(function(){
                   for(let i=0;i<res.data.data.length;i++){
                   that.$refs.shopmore.style.display = 'none';
                   var s=res.data.data[i];
                   that.goodslist.push(s);
                }
               }, 1000)
            })
        },
        deBounce(fn){
            clearTimeout(this.timer);
            this.timer = setTimeout(function(){
                fn()
            },100) 
        },
        getonscroll() {
            var that = this;
            window.onscroll = function(){
                var scrolltop = document.scrollingElement.scrollTop;
                var clientHeight = document.scrollingElement.clientHeight;
                var pageHeight = document.scrollingElement.scrollHeight
                if(scrolltop+clientHeight + 4>=pageHeight){
                    that.deBounce(function(){
                        that.pagenum++;
                        that.getgoods(that.pagenum);
                        that.$refs.shopmore.style.display = 'block';
                    })
                }
            };
        },
        formatDate(time) {
            time = String(time)
            var h = time.slice(11,13);
            var s = time.slice(14,16);
            return h+'小时'+s+'分'
        },  
    },
    created(){
        this.getgoods(this.pagenum);
        this. getonscroll();
    }
}
</script>
<style lang="stylus" scoped>
.msite-shop-list
    width 100%
    margin-top 5px
    background-color white
    border-top 1px solid #ccc
    margin-bottom 63px
.shop-list-header
    width 100%
    height 38px
    box-sizing border-box
    line-height 38px
    font-size 12px
    color #333
.sj
    display flex
    padding 0
    margin 0
.icon-shangjia
    width 14px
    height 14px
    font-size 14px
    margin 0 5px 0 10px
    display block
.shop-list-main
    width 100%
    height 104px
    padding 16px 10px
    display flex
    justify-content center
    align-items center
    border-bottom 1px solid #f2f2f2
    box-sizing border-box
.main-img
    width 60px
    height 60px
    margin 0 9px 0 0
    img 
        width 60px
        height 60px
.shop-main
    width 320px
    height 80px
    display flex
    justify-content space-around
    text-align space-around
    flex-direction column
    font-size 12px
.main-one
    padding 0 10px
    display flex
    justify-content space-between
    text-align space-around
    width 100%
    height 20px
    box-sizing border-box
.main-one-p1
    height 20px
    margin 0
    padding 0 
    display flex
    justify-content space-between
    text-align space-around
    line-height 20px
.pinpai
    background-color yellow
    width 30px
    padding 0 2px
    text-align center
    font-size 15px
.xiaoguo
    margin-left 3px
    font-size 15px
.promise
    letter-spacing 2px
    font-size 15px
.dafen
    color red
.month
    font-size 12px
.feng
    font-size 12px
    background-color #02a774
    color white
    margin-right 5px
    box-sizing border-box
    display block
    padding 0 2px
    border-radius 2px
.timer
    font-size 12px
    border 1px solid #02a774
    color #02a774
    box-sizing border-box
    display block
    padding 0 2px
    border-radius 2px
.small
    font-size 12px
.change
    color #02a774
.shop-more
    width 100%
    height 20px
    text-align center
    color #666
    padding 10px 0 20px 0
    display none
</style>