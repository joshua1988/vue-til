<template>
	<router-link to="/new" class="create-button">
		<i class="icon ion-md-add"></i>
	</router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.create-button {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	position: fixed;
	right: 20px;
	bottom: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
	background: #fe9616;
	border: 3px solid white;
}
</style>
