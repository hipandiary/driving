<template>
  <div>
    <span v-for="(item, index) in topic[count].question" :key="index">{{item}}</span><br>
    <button @click="substrac">上一题</button>
    <button @click="addup">下一题</button>
  </div>
</template>

<script>
import { getdriving } from "network/home";
export default {
  name: "home",
  data() {
    return {
      topic: [],
      explain: [],
      answer: [],
      question: [],
      options: [],
      count: 0
    };
  },
  methods: {
    addup() {
      if (this.count <= 20) {
        return this.count++;
      } else {
        alert("这是最后一题了");
      }
    },
    substrac() {
      if (this.count != 0) {
        return this.count--;
      } else {
        alert("不能再最后了");
      }
    }
  },
  created() {
    getdriving().then(res => {
      this.topic = res;
      console.log(this.topic);
      //  console.log(this.topic[0]);
      // console.log(this.topic);
      // console.log(this.question[0]);
    });
  }
};
</script>

<style scoped>
button{
  margin: 20px;
  padding: 5px;
}
</style>