<template>
	<div>
		<h1>登陆组件</h1>
		<router-link to="/regiset" tag="p">去注册</router-link>
		<mt-swipe :auto="4000" style="height:200px">
			<mt-swipe-item style="background:red                                 ">
				<img src="" alt="">
			</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name:"Login",
		data(){
			return {
				mag:"shiejshieji"
			}
		},
		mounted () {
			axios({
				url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
			}).then(function(data){
				console.log(data.data.data)
			})
		}
	}
</script>

<style scoped="">
	h1{
		color: red;
	}
</style>