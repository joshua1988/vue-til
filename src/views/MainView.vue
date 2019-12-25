<template>
	<div>
		<div class="main list-container contents">
			<PageHeader>Today I Learned</PageHeader>
			<ul v-if="postItems">
				<li v-for="item in postItems" :key="item._id">
					<div class="post-title">
						<router-link :to="`/post/${item._id}`">{{
							item.title
						}}</router-link>
					</div>
					<div class="post-contents">
						{{ item.contents }}
					</div>
					<div class="post-time">
						{{ item.createdAt | formatDate }}
						<i class="icon ion-md-create" @click="editPost(item._id)"></i>
						<i class="icon ion-md-trash" @click="removePost(item._id)"></i>
					</div>
				</li>
			</ul>
			<LoadingSpinner v-else></LoadingSpinner>
		</div>
		<CreateButton></CreateButton>
	</div>
</template>

<script>
import PageHeader from '@/components/common/PageHeader.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import CreateButton from '@/components/common/CreateButton.vue';
import { fetchPosts, deletePostById } from '@/api/posts.js';
import bus from '@/utils/bus.js';

export default {
	components: {
		CreateButton,
		PageHeader,
		LoadingSpinner,
	},
	data() {
		return {
			postItems: null,
		};
	},
	methods: {
		async fetchData() {
			try {
				const {
					data: { posts: postItems },
				} = await fetchPosts();
				this.postItems = postItems;
				return;
			} catch (error) {
				console.log(error);
			}
		},
		editPost(id) {
			this.$router.push(`/post/${id}`);
		},
		async removePost(id) {
			try {
				if (confirm('Delete it?')) {
					const response = await deletePostById(id);
					await this.fetchData();
					bus.$emit('show:toast', `${response.data.title} was deleted`);
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style scoped>
.list-container {
	padding-top: 13px;
}
.list-container.sticky {
	margin-top: 76px;
}
ul {
	display: flex;
	flex-wrap: wrap;
}
ul > li {
	position: relative;
	flex-grow: 1;
	width: 320px;
	height: 250px;
	margin: 7px;
	padding: 10px 20px;
	background: white;
	box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
	border-radius: 3px;
}
.post-title {
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 0.5rem;
}
.post-contents {
	height: 160px;
	overflow-y: auto;
	font-size: 18px;
}
.post-time {
	position: absolute;
	bottom: 4px;
	right: 5px;
	font-size: 14px;
	color: #9e9e9e;
}
.icon {
	font-size: 1.3rem;
	cursor: pointer;
	color: #364f6b;
	padding-right: 0.4rem;
}
.icon:hover {
	color: #3fc1c9;
}
.icon:active {
	color: #fc5185;
}
.ion-md-create {
	padding-left: 0.1rem;
}
</style>
