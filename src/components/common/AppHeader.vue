<template>
	<header :class="{ fixed: isFixed }" ref="appHeader">
		<div>
			<router-link to="/" class="logo">
				TIL
				<span v-if="isLoggedIn">by {{ this.$store.state.user.nickname }}</span>
			</router-link>
		</div>
		<div class="navigations">
			<template v-if="!isLoggedIn">
				<router-link to="/login">Login</router-link>
				<router-link to="/signup">Sign Up</router-link>
			</template>
			<template v-else>
				<a href="javascript:;" @click="logout" class="logout-button">Logout</a>
			</template>
		</div>
	</header>
</template>

<script>
import { mapGetters } from 'vuex';
import bus from '@/utils/bus';

export default {
	computed: {
		...mapGetters(['isLoggedIn']),
	},
	data() {
		return {
			navHeight: 0,
			isFixed: false,
		};
	},
	watch: {
		$route: 'looseHeader',
	},
	methods: {
		logout() {
			bus.$emit('show:toast', 'User logged out');
			this.$store.commit('LOGOUT');
			this.$router.push('/');
		},
		checkHeight() {
			window.scrollY > 5 ? this.stickHeader() : this.looseHeader();
		},
		stickHeader() {
			this.isFixed = true;
			document.querySelector('.main').classList.add('sticky');
		},
		looseHeader() {
			this.isFixed = false;
			document.querySelector('.main').classList.remove('sticky');
		},
	},
	mounted() {
		if (this.$route.name !== 'main') {
			return;
		}
		this.navHeight = this.$refs.appHeader.offsetHeight;
		window.addEventListener('scroll', this.checkHeight);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.checkHeight);
	},
};
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	/* Use the color you like! */
	/* background-color: #3CA776; */
	/* background-color: #2e3e37; */
	background-color: #927dfc;
	z-index: 2;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
	color: #dedede;
	font-size: 18px;
}
a.logo {
	font-size: 30px;
	font-weight: 900;
	color: white;
}
.logo > span {
	font-size: 14px;
	font-weight: normal;
}
.navigations a {
	margin-left: 10px;
}
.fixed {
	position: fixed;
	top: 0;
	width: 100%;
}
.add-button {
	background: #3ca776;
	color: white;
	padding: 4px 23px;
	border-radius: 4px;
}
.logout-button {
	font-size: 14px;
}
a.router-link-exact-active {
	color: white;
	font-weight: bold;
}
</style>
