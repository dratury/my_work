import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "/login"
	},
	{
		path: "/login",
		name: "login",
		component: () => import('../views/login/Login.vue')
	},
	{
		path: "/regist",
		name: "regist_view",
		component: () => import("../views/login/Regist.vue")
	},
	{
		path: "/home",
		name: "Home",
		component: () => import("../views/Home/Home.vue"),
		children: [
			{
				path: '/home',
				redirect: "/ZQ/user"
			},
			{
				path: '/ZQ/user',
				component: () => import("../views/ZQ/user/index.vue"),
			},
			{
				path:'/ZQ/my',
				component: () => import("../views/ZQ/my/index.vue"),
			},
			{
				path: '/ZQ/list',
				component: () => import("../views/ZQ/list/index.vue"),
				children: [
					{
						path: '/',
						redirect: "/ZQ/one"
					},
					{
						path: "/ZQ/one",
						component: () => import("../views/ZQ/one/index.vue"),
					},
					{
						path: "/ZQ/two",
						component: () => import("../views/ZQ/two/index.vue"),
					},
					{
						path: "/ZQ/three",
						component: () => import("../views/ZQ/three/index.vue"),
					},
				]
			},
			{
				path: "/organ",
				name: "organ",
				component: () => import("../views/organization/Organ.vue")
			},
			{
				path: "/wzj",
				name: "wzj",
				component: () => import("../views/check on-work-attendance/check_on_work_attendance.vue"),
			},
		]
	},
]

const router = new VueRouter({
	routes
})

export default router
