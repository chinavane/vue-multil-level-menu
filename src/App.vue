<template>
  <div id="app">
    <div class="header">
      <span>logo</span>
      <span>breadcrumb</span>
    </div>
    <div class="sidebar">
      <menu-tree :tree-data="leftNav"></menu-tree>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import menuTree from './components/menuTree.vue';

export default {
  data () {
    return {
      msg: 'Hello Vue!',
      leftNav:[]
    }
  },
  created(){
    this.leftNav=[
      {
        text:"user center",
        url:"/user",
        icon:""
      },
      {
        text:"rafal",
        url:"",
        icon:"",
        children:[
          {
            text:"ABC",
            url:"",
            access:true,
            children:[
              {
                text:"Foo",
                url:"/foo"
              },
              {
                text:"Bar",
                url:"/bar"
              },
              {
                text:"haha",
                url:"/haha"
              }
            ]
          },
          {
            text:"BDF",
            url:"/bdf"
          }
        ]
      },
      {
        text:"test",
        url:"",
        icon:"",
        access:true,
        children:[
          {
            text:"KUMA",
            url:"/kuma"
          },
          {
            text:"dylan",
            url:"/dylan",
            access:true
          }
        ]
      }
    ];
  },
  components:{
    menuTree
  }
}
</script>

<style scoped lang="less">
body {
  font-family: Helvetica, sans-serif;
  padding:0;
  margin:0;
  #app {
    color: #2c3e50;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    display:flex;
    flex-flow:row wrap;
    height: 100%;
    /*outline: 1px solid dodgerblue;*/
  }

  #app .header{
    flex:1 100%;
    color:#fff;
    padding:10px;
    background:#324057;
  }

  #app .sidebar{
    width:200px;
    /*outline:1px solid deepskyblue;*/
    height: calc(100%);
  }

  #app .content{
    flex:1;
    padding:10px;
    background:ghostwhite;
    /*outline:1px solid deepskyblue;*/
  }
}
</style>
