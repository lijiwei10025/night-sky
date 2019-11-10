<template>
  <div class="footer">
    <ul>
      <li @click="tabHome()">
        <img src="images/tabBar/home.png" v-show="$route.path!=='/home'">
        <img src="images/tabBar/homepage.png" v-show="$route.path=='/home'">
        <span :class="{'tabColor': $route.path=='/home'}">首页</span>
      </li>
      <li @click="tabNew()">
        <img src="images/tabBar/new.png" v-show="$route.path!=='/new'">
        <img src="images/tabBar/newpage.png" v-show="$route.path=='/new'">
        <span :class="{'tabColor': $route.path=='/new'}">发现</span>
      </li>
      <li @click="tabanniversary()">
        <img src="images/tabBar/anniversary.png" v-show="$route.path!=='/anniversary'">
        <img src="images/tabBar/anniversarypage.png" v-show="$route.path=='/anniversary'">
        <span :class="{'tabColor': $route.path=='/anniversary'}">周年庆</span>
      </li>
      <li @click="tabBook()">
        <img src="images/tabBar/bookshelf.png" v-show="$route.path!=='/bookshelf'">
        <img src="images/tabBar/bookshelfpage.png" v-show="$route.path=='/bookshelf'">
        <span :class="{'tabColor': $route.path=='/bookshelf'}">书架</span>
      </li>
      <li @click="tabMy()">
        <img src="images/tabBar/my.png" v-show="$route.path!=='/my'">
        <img src="images/tabBar/mypage.png" v-show="$route.path=='/my'">
        <span :class="{'tabColor': $route.path=='/my'}">我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods: {
    tabHome(){
      if(this.$route.path !== '/home'){
        this.$router.push("/home")
      }
    },
    tabNew(){
      if(this.$route.path !== '/new'){
        this.$router.push("/new")
      }
    },
    tabanniversary(){
      if(this.$route.path !== '/anniversary'){
        this.$router.push("/anniversary")
      }
    },
    tabBook(){
      if(this.$route.path !== '/bookshelf'){
        this.$router.push("/bookshelf")
      }
    },
    tabMy(){
      if(this.$route.path !== '/my'){
        this.$router.push("/my")
      }
    }
  }
}
</script>

<style>
.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #eee;
}
.footer ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer li{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 5px 0;
}
.footer img{
  width: 30px;
}
.footer span{
  font-size: 14px;
  color: #90959b;
  font-weight: 200;
}
.footer .tabColor{
  color: #000;
  font-weight: 500;
}
</style>