<template>
	<div>
		<Header />
		<div class="container">
			<div class="row">
				<!-- Nav tabs -->
				<ul class="nav nav-stacked col-md-6" role="tablist">
					<li role="presentation" active-class="active">
						<!-- vue中使用router-link实现路径改变 -->
						<router-link
							:to="{ name: 'home' }"
							replace
							aria-controls="home"
							role="tab"
							data-toggle="tab"
						>
							Home
						</router-link>
					</li>
					<li role="presentation" active-class="active">
						<router-link
							:to="{ name: 'about' }"
							replace
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
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Header from './components/Header.vue'
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
