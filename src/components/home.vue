<template>
  <div>
    <input type="text" v-model="msg">
    <input type="button" value="添加留言" @click="add_note">

    <ul>
      <li v-for="(note , index) in notebook" :key="index">
        <span>{{note}}</span>
        <a href="javascript:;" @click="delNote(index)">删除</a>
      </li>
    </ul>
    <span>留言总数量：{{notebook.length}}</span>
    <br>
    <input type="button" value="删除所有" @click="delAll" v-show="isShow">
  </div>
</template>

<script>
export default {
  name: "home",
  data: function (){
    return{
      notebook:localStorage.msgs ?JSON.parse(localStorage.msgs) : [],
      msg:"",
      isShow:true
    }
  },
  methods:{
    add_note(){
      let msg = this.msg;
      if (msg){
        this.notebook.unshift(this.msg);
        localStorage.msgs = JSON.stringify(this.notebook);
        this.msg=''
      }
    },

    delNote(index){
      if (this.notebook.length==0){
        this.isShow = false
      }
      this.notebook.splice(index, 1)
      if (this.notebook.length==0){
        this.isShow = false
      }
    },

    delAll(){

      this.notebook.splice(0)
      this.isShow = false
    }
  }
}
</script>

<style scoped>

</style>
