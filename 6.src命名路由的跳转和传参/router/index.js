// 该文件是Vue中路由器文件, 路由器管理着所有路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'
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
			component: Home,
			name: 'home',
			// ?二级三级路由的使用
			children: [
				{
					// path: '/home/message',
					path: 'message',
					component: Message,
					name: 'message',
					children: [
						{
							//path: 'detail/:id/:title/:content', // ? 声明接收params参数
							// path: 'detail', //query参数无需声明即可接收
							path: 'detail/:id', //同时接收query和params参数,要先声明params
							component: Detail,
							name: 'detail'
						}
					]
				},
				{
					path: 'news',
					component: News,
					name: 'news'
				}
			]
		},
		{
			path: '/about',
			component: About,
			name: 'about'
		}
	]
})

//暴露路由器
export default router
