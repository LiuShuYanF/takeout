<template>
  <div class="detail">
    <div class="detail-header">
      <div class="header-bj"></div>
      <div class='hearder-out'><img src="./images/nav/1.jpg" alt class="header-logo" /></div>
      <h4 class="header-title">无望太考级</h4>
      <p class="header-pj">
        <span>评价4.7</span>
        <span>月售156</span>
        <span>蜂鸟快递月20分钟</span>
      </p>
      <div class="header-yhj">
        <p class="header-yhj-one">
          <span>22减20</span>
          <span>55减27</span>
          <span>75减36</span>
          <span>99减46</span>
        </p>
        <p class="header-yhj-two">6个优惠</p>
      </div>
      <p class="header-anno">公告：快餐，麻辣香锅，长期供应</p>
    </div>
    <div class="detail-main">
        <div class='mainnavone' ref='guding'>
            <ul class="main-nav">
                <li>
                    <a href="#">点餐</a>
                </li>
                <li>
                    <a href="#">评价</a>
                </li>
                <li>
                    <a href="#">商家</a>
                </li>
            </ul>
        </div>
        <div class="main-main">
            <h4 class="main-sj">商家推荐</h4>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="./images/nav/1.jpg" alt />
                        <p class='small-title'>好吃的饼</p>
                        <p class='small-pj'><span class='small-pj-one'>月售63</span> <span class='small-pj-two'>好评率100%</span></p>
                        <p class='small-pj'><span class='small-pj-three'>40元起</span><span class='small-pj-four'>+</span></p>
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/nav/2.jpg" alt />
                        <p class='small-title'>好吃的饼</p>
                        <p class='small-pj'><span class='small-pj-one'>月售64</span> <span class='small-pj-two'>好评率100%</span></p>
                        <p class='small-pj'><span class='small-pj-three'>40元起</span><span class='small-pj-four'>+</span></p>
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/nav/3.jpg" alt />
                        <p class='small-title'>好吃的饼</p>
                        <p class='small-pj'><span class='small-pj-one'>月售65</span> <span class='small-pj-two'>好评率100%</span></p>
                        <p class='small-pj'><span class='small-pj-three'>40元起</span><span class='small-pj-four'>+</span></p>
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/nav/4.jpg" alt />
                        <p class='small-title'>好吃的饼</p>
                        <p class='small-pj'><span class='small-pj-one'>月售66</span> <span class='small-pj-two'>好评率100%</span></p>
                        <p class='small-pj'><span class='small-pj-three'>40元起</span> <span class='small-pj-four'>+</span></p>
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/nav/5.jpg" alt />
                        <p class='small-title'>好吃的饼</p>
                        <p class='small-pj'><span class='small-pj-one'>月售67</span> <span class='small-pj-two'>好评率100%</span></p>
                        <p class='small-pj'><span class='small-pj-three'>40元起</span> <span class='small-pj-four'>+</span></p>
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/nav/6.jpg" alt />
                        <p class='small-title'>好吃的饼</p>
                        <p class='small-pj'><span class='small-pj-one'>月售68</span> <span class='small-pj-two'>好评率100%</span></p>
                        <p class='small-pj'><span class='small-pj-three'>40元起</span> <span class='small-pj-four'>+</span></p>
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/nav/7.jpg" alt />
                        <p class='small-title'>好吃的饼</p>
                        <p class='small-pj'><span class='small-pj-one'>月售69</span> <span class='small-pj-two'>好评率100%</span></p>
                        <p class='small-pj'><span class='small-pj-three'>40元起</span> <span class='small-pj-four'>+</span></p>
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/nav/8.jpg" alt />
                        <p class='small-title'>好吃的饼</p>
                        <p class='small-pj'><span class='small-pj-one'>月售70</span> <span class='small-pj-two'>好评率100%</span></p>
                        <p class='small-pj'><span class='small-pj-three'>40元起</span><span class='small-pj-four'>+</span></p>
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/nav/9.jpg" alt />
                        <p class='small-title'>好吃的饼</p>
                        <p class='small-pj'><span class='small-pj-one'>月售78</span> <span class='small-pj-two'>好评率100%</span></p>
                        <p class='small-pj'><span class='small-pj-three'>40元起</span> <span class='small-pj-four'>+</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class='detail-list'>
            <div class='detail-nav' ref='nav'>
                <p v-for="(v,i) in goodsClassifyList" :key="i" @click='classify(i)'>{{v.name}}</p>
            </div>
            <div class='detail-meau'>
                <p><span>热销</span><i>大家喜欢才是真的好</i></p>
                <div class='caidan' v-for='(v,i) in goodsModelList' :key='i'>
                    <img :src="v.img" class='caidan-tu'>
                    <div class='caidan-right'>
                        <h5 class='caidan-title'>{{v.name}}</h5>
                        <p class='caindan-one'>主料：牛肉</p>
                        <p class='caindan-one'><span class='ziti'>月售{{v.sale}}份</span><span class='ziti'>好评率100%</span></p>
                        <p class='caindan-one'><span>${{v.price}}元</span><span class='sub' ref='sub' @click="subcart(i-1)">-</span><input class='shuliang' ref='shuliang' value='0'><span class='add' @click="addcart(i-1)">+</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <carts></carts>
 </div>
</template>
<script>
import Swiper from "swiper";
import Carts from '../../components/Carts/Carts.vue'
export default {
    data(){
        return {
            shop:{},
            goodsClassifyList:[],
            goodsModelList:[]

        }
    },
    components:{
        Carts
    },
    mounted() {
        new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination"
        }
        });
    },
    methods:{
        // ajax请求
        getgoodslist(){
            let url = location.href;
            let arr = url.split('?');
                arr = arr[1].split('=');
            let shopId = arr[1];
            this.axios.get( `http://192.168.0.107:1025/api/shop/detail?shopId=`+shopId).then(res=>{
                this.shop = res.data.data
                this.goodsClassifyList = this.shop.goodsClassifyList;
                this.goodsModelList = this.goodsClassifyList[0].goodsModelList 
                console.log( this.goodsClassifyList);
                // console.log( this.goodsModelList);
                // goodsClassifyList
            })
        },
        // 类别
        classify(id){
            console.log(id)
            console.log(this.goodsModelList); 
            this.goodsModelList = [];
            this.goodsModelList = this.goodsClassifyList[id].goodsModelList;
            console.log( this.goodsModelList); 
        },
        getguding(){
            var that = this;
            window.onscroll = function(){
                var top = document.documentElement.scrollTop
                if(top>= 220){
                    that.$refs.guding.style.position = 'fixed';
                    that.$refs.guding.style.top = 0;
                }else{
                    that.$refs.guding.style.position = 'relative'; 
                }if(top>= 480){
                    that.$refs.nav.style.position = 'fixed';
                    that.$refs.nav.style.top = 0;
                     that.$refs.nav.style.left = 0;
                }else{
                   that.$refs.nav.style.position = 'relative'; 
                }
            }
        },
        addcart(i){
            this.$refs.shuliang[i].value++;
            if(this.$refs.shuliang[i].value > 0){
                this.$refs.shuliang[i].style.display = 'block';
                this.$refs.sub[i].style.display = 'block';
            }
        },
        subcart(i){
            this.$refs.shuliang[i].value--;
            if(this.$refs.shuliang[i].value<=0){
                this.$refs.shuliang[i].style.display = 'none';
                this.$refs.sub[i].style.display = 'none';
                this.$refs.shuliang[i].value = 0
            }
        }
    },
    created(){
        this. getguding()
        this.getgoodslist()
        // this.classify()
    }
}
</script>
<style lang="stylus" scoped>
.detail
    width 100%
    height 100%
.detail-header 
    width 100%
    height 220px
    box-sizing border-box
.header-title
    width 100%
    height 20px
    margin-top 20px
    text-align center
    line-height 20px
    margin-bottom 0
    box-sizing border-box
.header-pj
    width 60%
    height 20px
    font-size 12px
    text-align center
    line-height 20px
    margin 5px auto
    padding 0
    box-sizing border-box
    display flex
    justify-content space-around
    text-align center
.header-bj
    width 100%
    height 100px
    background-color #ccc
.hearder-out
    width 80px
    height 80px
    position absolute
    left 50%
    top 6%
.header-logo
    display block
    position absolute
    width 80px
    height 80px
    border-radius 50%
    right 50%
.header-yhj
    width 100%
    height 20px
    font-size 12px
    display flex
    flex-direction row
    justify-content space-around
.header-yhj-one
    width 60%
    height 20px
    margin 0
    padding 0
    font-size 13px
    display flex
    flex-direction row
    justify-content space-between
    span
        width 50px
        height 20px
        line-height 20px
        display block
        border 1px solid red
        color red
.header-yhj-two
    width 60px
    height 20px
    margin 0
    padding 0
    font-size 13px
    color #999
.header-anno
    width 85%
    height 20px
    margin 5px auto
    font-size 12px
    box-sizing border-box
    padding 0 10px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
.detail-main
    flex 1
    overflow auto
    width 100%
    box-sizing border-box
.mainnavone
    width 100%
    height 40px
    background-color pink
    z-index 100
.main-nav
    width 100%
    height 40px
    line-height 40px
    border-border 1px solid #cccccc
    box-sizing border-box
    display flex
    flex-direction row
    justify-content space-around
    text-align center
    margin 0
    padding 0
    li 
        list-style none
        a
            text-decoration none
            color black
            display block
            line-height 40px
.main-main
    width 100%
    box-sizing border-box
.main-sj
    width 100%
    height 20px
    padding 0 15px
    box-sizing border-box
    margin 10px 0
.swiper-container
    height 190px
.swiper-wrapper
    height 190px
.swiper-slide
    height 190px
    img
        width 100px
        height 100px
        display block
        border-radius 5px
    p 
        margin 0
        padding 0
        width 100%
        box-sizing border-box
.small-title
    font-size 14px
    font-weight 600
.small-pj
    width 100%
    height 20px
    font-size 12px
    display flex
    justify-content space-between
    text-align center
.small-pj-three
    display block
    width 50%
    font-size 14px
    font-weight 500
.small-pj-four
    display block
    width 18px
    height 18px
    text-align center
    background-color #02a774
    color white
    border-radius 50% 
    line-height 18px
.detail-list
    width 100%
.detail-nav
    width 25%
    float left
    background-color #f2f2f2
    p
        width 100%
        height 20px
        line-height 20px
        text-align center
        padding 5px 0
.detail-meau
    width 70%
    float right 
    margin-right 10px
    p 
        font-size 14px
        font-weight 500
        i 
            font-style normal 
            margin-left 5px
            font-size 12px
.caidan
    width 95%
    height 100px
    display flex
    flex-direction row
    align-items center
    box-sizing border-box
    padding 5px 0
.caidan-tu
    width 90px
    height 90px
    display block
.caidan-right
    width 90%
    height 100%
.caidan-title
    margin 0
    padding 0 5px
    width 100%
    height 20px
    font-size 14px
    font-weight 500 
.caindan-one
    width 92%
    height 20px
    line-height 20px
    margin 0
    padding 0 5px
    display flex
    flex-direction row
    justify-content space-between
.ziti
    font-size 12px
    display block
.add
    position absolute
    width 15px
    text-align center
    line-height 15px
    border-radius 50%
    height 15px
    background-color #02a774
    color white
    right 5px
.sub
    position absolute
    width 15px
    text-align center
    line-height 15px
    border-radius 50%
    height 15px
    background-color #02a774
    color white
    right 55px
    display none
.shuliang 
    position absolute
    width 15px
    text-align center
    line-height 15px
    border-radius 50%
    height 15px
    background-color #ccc
    color white
    right 30px
    display none
    border none
</style>