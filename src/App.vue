<template>
  <div id="app"> 
     <NavBar class="home-nav">
      <div slot="center">驾考答题</div>
    </NavBar> 
    <Home class="topic-home"></Home>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Home from 'views/home'
export default {
  name:'App',
  components:{
    NavBar,
    Home
  },
 
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.home-nav{
    background-color: skyblue;
    color: white;
    /* 固定顶部标题名 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
  }
.topic-home{
  padding: 50px;
  border:5px solid yellow;
}
</style>
