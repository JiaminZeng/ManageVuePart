import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: 'login',
    },
    {
        path: '/user_validate',
        name: 'UserValidate',
        component: () => import('../views/EnterUser/UserValidate.vue'),
        meta: {displayName: '注册验证'}
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: () => import('../views/EnterUser/Statistics.vue'),
        meta: {displayName: '数据统计'}
    },
    {
        path: '/recruitment',
        name: 'Recruitment',
        component: () => import('../views/EnterUser/RecruitmentManage.vue'),
        meta: {displayName: '招聘管理'}
    },
    {
        path: '/enter',
        name: '/enterInformation',
        component: () => import('../views/EnterUser/EnterInfor.vue'),
        meta: {displayName: '信息管理'}
    },
    {
        path: '/job_infor',
        name: 'JobInfor',
        component: () => import('../views/NormalUser/JobInfor.vue'),
        meta: {displayName: '招聘信息'}
    },
    {
        path: '/self_infor',
        name: 'SelfInfor',
        component: () => import('../views/NormalUser/SelfInfor.vue'),
        meta: {displayName: '个人信息'}
    }, {
        path: '/communication',
        name: 'Communication',
        component: () => import('../views/NormalUser/Communication.vue'),
        meta: {displayName: '消息界面'}
    },
    {
        path: '/user_manage',
        name: 'UserManagement',
        component: () => import('../views/ManageUser/UserManage.vue'),
        meta: {displayName: '用户管理'}
    },
    {
        path: '/job_manage',
        name: 'JobManagement',
        component: () => import('../views/ManageUser/JobManage.vue'),
        meta: {displayName: '招聘管理'}
    },
    {
        path: '/type_manage',
        name: 'TypeManagement',
        component: () => import('../views/ManageUser/TypeManage.vue'),
        meta: {displayName: '类别管理'}
    },
    {
        path: '/register_0',
        name: 'Register_0',
        component: () => import('../views/Register/Register_0.vue'),
        meta: {displayName: '求职用户注册'}
    },
    {
        path: '/register_1',
        name: 'Register_1',
        component: () => import('../views/Register/Register_1.vue'),
        meta: {displayName: '企业管理用户注册'}
    },
    {
        path: '/register_2',
        name: 'Register_2',
        component: () => import('../views/Register/Register_2.vue'),
        meta: {displayName: '企业普通用户注册'}
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register/Register.vue'),
        meta: {displayName: '注册'}
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: {displayName: '登录'}
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
