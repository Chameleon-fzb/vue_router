// 该文件是Vue中路由器文件, 路由器管理着所有路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Home2 from '../pages/Home2.vue'
Vue.use(VueRouter)

//创建一个路由器, 管理所有的路由

const router = new VueRouter({
	routes: [
		// {
		// 	path: '/home',
		// 	component: Home
		// },
		//?一个路由匹配多个组件
		{
			path: '/home',
			components: {
				h1: Home,
				h2: Home2
			}
		},
		{
			path: '/about',
			component: About
		}
	]
})

//暴露路由器
export default router
