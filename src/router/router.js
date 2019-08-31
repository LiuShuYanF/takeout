import Vue from 'vue';
import VueRouter from 'vue-router';
import MSite from '../pages/MSite/MSite.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Search from '../pages/Search/Search.vue';
import Login from '../pages/Login/Login.vue';
import Detail from '../pages/MSite/Detail.vue';
import Small from '../pages/MSite/SmallDetail';
import Find from '../pages/Search/Find.vue'


Vue.use(VueRouter);


export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:MSite,
            name:'MSite',
            meta:{
                showFooter:true
            },
        },   
        {
            path:'/detail',
            component:Detail,
            name:'Detail',
        },
        {
            path:'/small',
            component:Small,
            name:'Small',
        },
        {
            path:'/order',
            component:Order,
            name:'Order',
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            name:'Profile',
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            name:'Search',
            meta:{
                showFooter:true
            }
        },
        {
            path:'/find',
            component:Find,
            name:'Find',
        },
        {
            path:'/login',
            component:Login,
            name:'Loginn',
        },
        {
            path:'/',
            redirect:'/msite',
        }
    ]
})