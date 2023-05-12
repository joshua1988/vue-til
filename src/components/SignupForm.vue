<template>
  <form @:submit.prevent="submitForm">
    <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username">
    </div>
    <div>
        <label for="password">pw: </label>
        <input id="password" type="text" v-model="password">
    </div>
    <div>
        <label for="nickname">nickname:</label>
        <input id="nickname" type="text" v-model="nickname">
    </div>
    <button type="submit">lgoin</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            nickname: '',
        };
    },
    methods:{
        submitForm(){
            console.log('폼 제출');
        },
    },
}
</script>

<style>

</style>