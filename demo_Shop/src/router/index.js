import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: '/login'
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/LoginView.vue")
	},

	{
		path: "/home",
		name: "home",
		component: () => import("../views/HomeView.vue"),
		children: [
			{
				path: "/",
				redirect: '/users'
			},
			{
				path: "/users",
				name: "users",
				component: () => import("../views/usersView.vue")
			},
			{
				path: "/power",
				name: "power",
				component: () => import("../views/powerView.vue")
			},
			{
				path: "/examples",
				name: "examples",
				component: () => import("../views/examplesView.vue")
			},
		]
	},
]

const router = new VueRouter({
	routes
})

export default router
