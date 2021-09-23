<template>
	<div>
		<ul>
			<li>ID:{{ $route.params.id }}</li>
			<li>TITLE:{{ $route.params.title }}</li>
			<li>CONTENT:{{ $route.params.content }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Detail',
	mounted() {
		console.log(this)
	}
}
</script>
