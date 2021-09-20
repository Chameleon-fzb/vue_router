<template>
	<div>
		<Header />
		<div class="container">
			<div class="row">
				<!-- Nav tabs -->
				<ul class="nav nav-stacked col-md-6" role="tablist">
					<li role="presentation" class="active">
						<!-- vue中使用router-link实现路径改变 -->
						<router-link
							to="/home"
							aria-controls="home"
							role="tab"
							data-toggle="tab"
						>
							Home
						</router-link>
					</li>
					<li role="presentation">
						<router-link
							to="/about"
							aria-controls="about"
							role="tab"
							data-toggle="tab"
						>
							About
						</router-link>
					</li>
				</ul>
				<!-- Tab panes -->
				<div class="tab-content col-md-6">
					<!-- <Home />
					<About /> -->
					<router-view></router-view>
					<router-view name="h1"></router-view>
					<router-view name="h2"></router-view>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Header from './components/Header.vue'
// import Home from './pages/Home.vue'
// import About from './pages/About.vue'
export default {
	name: 'App',
	components: {
		Header
		// Home,
		// About
	}
}
</script>

<style>
.list-group-item {
	position: relative;
}

.btn {
	width: 80px;
	height: 30px;
	position: absolute;
	right: 0;
	bottom: 5px;
}
</style>
