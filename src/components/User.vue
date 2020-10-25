<template>

  <div>
    这是User组件
  <h3>用户列表页</h3>
  <table border="2">
    <tr>
      <td>ID</td>
      <td>姓名</td>
      <td>生日</td>
      <td>个人信息</td>
      <td>操作</td>
    </tr>
    <tr v-for="(user ,index) in users" :key="user.id">
      <td>{{user.id}}</td>
      <td>{{user.username}}</td>
      <td>{{user.bir}}</td>
      <td>{{user.content}}</td>
      <td><a href="javascript:;" @click="delUser(index)">删除</a>  | <router-link :to="`/detail/${user.id}`">查看用户详情</router-link></td>
    </tr>
  </table>
    <hr>
    用户名：<input type="text" v-model="username"><br>
    生日：<input type="text" v-model="bir"><br>
    个人信息：<input type="text" v-model="content"><br>
    <button @click="addUser">添加用户</button>
  </div>
</template>

<script>

export default {
  name: "User",
  data(){
    return{
      users: [
        {'id':1,username:'Dream',bir:"1999-03-02",content:"I'm Dream"},
        {'id':2,username:'George',bir:"1997-11-12",content:"I'm Gogy"},
        {'id':3,username:'Sadnap',bir:"1998-06-17",content:"I'm Sadnap"},
      ],
      username:"",
      bir:"",
      content:"",
      user_list:localStorage.users? JSON.parse(localStorage.users):[],
    }
  },
  methods:{
    addUser(){
      let username = this.username
      if (username){
        let id = this.users.length
        id++
        this.users.push({id:id,username: this.username,bir:this.bir,content:this.content})
        localStorage.users = JSON.stringify(this.users)
        this.username = ''
        this.bir = ''
        this.content = ''
      }
    },
    delUser(index){
      this.users.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
