<template>
	<div role="tabpanel" class="tab-pane active" id="home">
		<!-- Nav tabs -->
		<h2>Home组件内容</h2>
		<ul class="nav nav-tabs" role="tablist">
			<li>
				<router-link to="/home/message">
					Message
				</router-link>
			</li>
			<li>
				<router-link to="/home/news">
					News
				</router-link>
			</li>
		</ul>
		<!-- Tab panes -->
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home'
}
</script>
