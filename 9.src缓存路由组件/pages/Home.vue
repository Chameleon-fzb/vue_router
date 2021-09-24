<template>
	<div role="tabpanel" class="tab-pane active" id="home">
		<!-- Nav tabs -->
		<h2>Home组件内容</h2>
		<ul class="nav nav-tabs" role="tablist">
			<li>
				<router-link :to="{ name: 'message' }" replace>
					Message
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'news' }" replace>
					News
				</router-link>
			</li>
		</ul>
		<!-- Tab panes -->
		<div>
			<!--  
				//!保持组件不销毁
				include 属性 指定谁不销毁
			-->
			<keep-alive include="News">
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home'
}
</script>
