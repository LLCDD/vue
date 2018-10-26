<template>
<!-- import Axios from 'axios'; -->
	<div>
		<h1>注册</h1>
		<mt-field label="账号" placeholder="Input username" v-model="username"></mt-field>
		<mt-field label="密码" placeholder="Input password" type="password" v-model="password"></mt-field>
		<mt-field label="手机号" placeholder="Input tel" type="tel" v-model="phone"></mt-field>
		<mt-field label="验证码" placeholder="Input number" type="number" v-model="number">
			<!-- <mt-button type="primary" style="30%" @click="send()"></mt-button> -->
			<mt-button type="default" @click="send()">点我发送验证码</mt-button>
		</mt-field>
		<mt-button type="primary" style="width:95%" @click="regiset()">注册</mt-button>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name:"Regiset",
	data(){
		return {
			username:"", // 账号
			password:"", // 密码
			phone:""  ,  // 手机号
			number:"" ,   // 验证码
			flag:false
		}
	},
	methods:{
		send(){
			var _this = this;
			var num = this.phone
			
			if(num.length > 10){
				axios({
					method:"post",
					url:"http://localhost:3000/regiset",
					
					
					// id 是1 的时候是获取验证码的功能
					// id 是2 的时候是注册的功能
					params:{phone:_this.phone,id:1}
				}).then(function(data){
					console.log(data.data);
					_this.flag = true;
					 _this.flag = true;
					console.log(_this.flag)
				})
			}else{
				alert("请输入正确的手机号")
			}
		},
		regiset(){
			if(this.flag){
				var _this = this;
				axios({
					method:"post",
					url:"http://localhost:3000/regiset",
					params:{username:_this.username,pass:_this.password,id:2,yzm:_this.number}
				}).then(function(data){
					console.log(data.data)
					if(data.data == 1){
						_this.$router.push('/login')
					}
				})
			}else{
				alert("输入有误")
			}
		}
	}
}
</script>

<style scoped>
h1{
	color: rgb(255, 228, 192)
}
</style>