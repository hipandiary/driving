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
import Home from 'views/Home'
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
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.home-nav {
/* 固定顶部标题名 */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  color: white;
  background-color: skyblue;
}
.topic-home {
  padding: 50px;
  border: 5px solid yellow;
}
</style>
