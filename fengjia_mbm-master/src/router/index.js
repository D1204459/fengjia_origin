import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import QApage from '../views/QApage.vue';
import Show from '../views/show.vue';
import News from '../views/news.vue';
import Article from '../views/new_article.vue';
import VenueTour from '../views/venueTour.vue';
import service_rules from '../views/service_rules.vue';
import searchTicket from '../views/searchTicket.vue';
import login from '../views/backend/loginView.vue';
import ticketManage from '../views/backend/ticketManagement.vue';
import staffManage from '../views/backend/staffManagement.vue';
import AboutUs  from "@/views/aboutUs.vue";
import ticketShop from "@/views/ticketShop.vue";
import bio from '../views/bioIdentiy.vue';
import bookingPage from '../views/OnlineBookingSystem.vue';

import { authState } from '../../Backend/auth.js';
const token = localStorage.getItem('token');

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/homepage',
        component: Home
    },
    {
        path: '/homepage/Q&A',
        name: 'Q&A問答',
        component: QApage
    },
    {
        path: '/homepage/Show',
        name: '表演活動',
        component: Show
    },
    {
        path: '/homepage/News',
        name : '最新消息',
        component: News
    },
    {
        path: '/homepage/News/article/:id',
        name: '內文',
        component: Article
    },
    {
        path: '/homepage/venueTour',
        name: '場館導覽',
        component: VenueTour
    },
    {
        path: '/homepage/about',
        name: '關於我們',
        component: AboutUs
    },
    {
        path: '/homepage/service_rules',
        name: '規範&服務',
        component: service_rules
    },
    {
        path: '/homepage/searchTicket',
        name: '訂票查詢',
        component: searchTicket
    },
    {
        path: '/homepage/TicketShop',
        name: '線上購票',
        component: ticketShop
    },
    {
        path: '/homepage/bookingPage',
        name: '線上訂票',
        component: bookingPage
    },
    {
        path: '/confirm',
        component: bookingPage, // 使用同一個組件
        props: route => ({        // 通過 props 傳遞參數
            transactionId: route.query.transactionId,
            orderId: route.query.orderId
        })
    },
    {

        path: '/homepage/bioIdentiy',
        name: '互動專區',
        component: bio
    },
    {
        path: '/backend/login',
        component: login
    },
    {
        path: '/backend/login/ticketManagement',
        component: ticketManage,
        meta: { requiresAuth: true }
    },
    {
        path: '/backend/login/staffManagement',
        component: staffManage,
        meta: { requiresAuth: true }
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});



//路由守衛，判斷是否登入，若未登入則導向登入頁面
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        const token = localStorage.getItem('token');

        // 未登入，導向登入頁面
        authState.isAuthenticated = false;
        next('/backend/login');
        } else {
            // 有 token，更新驗證狀態並放行
            authState.isAuthenticated = true;
            next();
        }
});

export default router;
