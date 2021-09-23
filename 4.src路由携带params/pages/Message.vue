<template>
	<div role="tabpanel" class="tab-pane" id="Message">
		<ul class="list-group">
			<li v-for="msg in messageArr" :key="msg.id" class="list-group-item">
				<router-link
					:to="`/home/message/detail/${msg.id}/${msg.title}/${msg.content}`"
				>
					{{ msg.title }}
				</router-link>
			</li>
		</ul>
		<router-view></router-view>
		<!-- <div class="alert alert-success" role="alert">
			<ul class="list-group">
				<li class="list-group-item">message01</li>
				<li class="list-group-item">message02</li>
				<li class="list-group-item">message03</li>
				<li class="list-group-item">message04</li>
			</ul>
		</div> -->
	</div>
</template>

<script>
export default {
	name: 'Message',
	data() {
		return {
			messageArr: [
				{ id: '001', title: '消息1', content: '你好,data1' },
				{ id: '002', title: '消息2', content: '你好,data2' },
				{ id: '003', title: '消息3', content: '你好,data3' }
			]
		}
	}
}
</script>
