<template>
	<div>
		<ul>
			<li>ID:{{ id }}</li>
			<li>TITLE:{{ title }}</li>
			<li>CONTENT:{{ content }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Detail',
	computed: {
		id() {
			return this.$route.params.id
		},
		title() {
			return this.$route.query.title
		},
		content() {
			return this.$route.query.content
		}
	},
	mounted() {
		console.log(this)
	}
}
</script>
