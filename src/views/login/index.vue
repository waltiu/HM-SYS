<template>
	<div class="login">
		<el-form :model="loginForm"   ref="ruleForm" label-width="100px" >
			<el-form-item label="用户名" prop="pass">
				<el-input  v-model="loginForm.name" ></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input type="password" v-model="loginForm.password" ></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitLoginForm('ruleForm')">登陆</el-button>
				<el-button @click="registForm('ruleForm')">注册</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return {
				loginForm:{
					name:'',
					password:''
				},
				personForm:{},
				personalData:[],
				data:{}
				
			}
		},
		methods:{
			submitLoginForm(){
				let len=this.personForm.length
				for ( var i=0;i<len;i++) {
				if (this.personForm[i].username===this.loginForm.name&&
				this.personForm[i].password===this.loginForm.password)
				{
					sessionStorage.setItem('permission',JSON.stringify(this.personForm[i].permission));
					this.personalData.push(this.personForm[i])
					this.$message({
					          message: '恭喜你，登陆成功',
					          type: 'success'})
					this.$router.push('/map')
					console.log(this.personForm[i].permission)
					 var data2 = JSON.parse(sessionStorage.getItem('permission'))
					console.log(data2)

				
				}
				}
				}
			,
			registForm(){
				console.log('a')
			},
			getLoginForm(){
				axios.get('/json/person.json')
				.then((res) => {this.personForm=res.data.personalData})
				}
			
		},
		mounted() {
			this.getLoginForm()
		},
	}

</script>
