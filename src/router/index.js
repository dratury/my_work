import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const original = Router.prototype.push

Router.prototype.push = function push(location) {
  return original.call(this, location).catch(err => err)
}

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
				path: "/userlist",
				name: "UserList",
				component: () => import("../views/UserList.vue")
			}
		]
	},
]

const router = new Router({
	routes
})

export default router
