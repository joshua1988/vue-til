<template>
	<div class="contents">
		<PageHeader>Edit Post</PageHeader>
		<div class="form-wrapper">
			<form @submit.prevent="editForm" class="form">
				<div>
					<label for="title">Title</label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents</label>
					<textarea
						name="contents"
						id="contents"
						cols="30"
						rows="5"
						v-model="contents"
					></textarea>
				</div>
				<button
					type="submit"
					class="btn"
					:class="isButtonDisabled"
					:disabled="isButtonDisabled"
				>
					Edit
				</button>
			</form>
			<p class="log">
				{{ resultMessage }}
			</p>
		</div>
	</div>
</template>

<script>
import PageHeader from '@/components/common/PageHeader.vue';
import { fetchPostById, editPostById } from '@/api/posts.js';
import bus from '@/utils/bus.js';

export default {
	components: {
		PageHeader,
	},
	data() {
		return {
			title: '',
			contents: '',
			resultMessage: '',
		};
	},
	computed: {
		isButtonDisabled() {
			return !this.title || !this.contents ? 'disabled' : null;
		},
	},
	methods: {
		setForm({ title, contents }) {
			this.title = title;
			this.contents = contents;
		},
		async editForm() {
			try {
				const id = this.$route.params.id;
				const response = await editPostById(id, {
					title: this.title,
					contents: this.contents,
				});
				bus.$emit('show:toast', `${response.data.title} was editted`);
				this.$router.push('/main');
			} catch (error) {
				console.log(error);
				this.resultMessage = error.data.error.errmsg;
			}
		},
	},
	async created() {
		try {
			const id = this.$route.params.id;
			const { data } = await fetchPostById(id);
			this.setForm(data);
		} catch (error) {
			console.log(error);
		}
	},
};
</script>

<style scoped>
.btn {
	background-color: #fc5185;
	color: white;
}
.log {
	width: 420px;
}
</style>
