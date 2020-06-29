<template>
  <div>
    <span v-if="condition">加载题目数据失败请刷新页面</span>
    <div v-else>
      <span>{{count+1}}.</span>
      <span v-for="(item,index) in question[count]" :key="index.id">{{item}}</span>
      <br />
      <div v-for="(items, index) in options[count]" :key="index.id">
        <input type="radio" id="options" name="options" />
        {{items}}
        <br />
      </div>
      <button @click="substrac">上一题</button>
      <button @click="addup">下一题</button>
    </div>
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
      count: 0,
      condition: false
    };
  },
  methods: {
    addup() {
      if (this.count < 19) {
        return this.count++;
      } else {
        alert("这是最后一题了");
      }
    },
    substrac() {
      if (this.count != 0) {
        return this.count--;
      } else {
        alert("不能再退后了");
      }
    }
  },
  created() {
    getdriving()
      .then(res => {
        console.log(res);

        this.topic = res;
        console.log(this.topic);
        /* 获取题目 */
        for (let i = 0; i < res.length; i++) {
          this.question.push(res[i].question);
        }
        console.log(this.question[1]);

        /* 获取答案 */
        for (let i = 0; i < res.length; i++) {
          this.answer.push(res[i].answer);
        }
        console.log(this.answer);

        /* 获取选项 */
        for (let i = 0; i < res.length; i++) {
          /* 先把四个选项数据放入一个数组 */
          let a1 = [];
          for (let j = 0; j < 1; j++) {
            a1.push(
              res[i].option1,
              res[i].option2,
              res[i].option3,
              res[i].option4
            );
          }
          /* 然后再把选项数组放入options */
          this.options.push(a1);
        }
        console.log(this.options[1]);
        //  console.log(this.topic[0]);
        // console.log(this.topic);
        // console.log(this.question[0]);
      })
      .catch(error => {
        this.condition = true;
      });
  }
};
</script>

<style scoped>
button {
  margin: 20px;
  padding: 5px;
}
</style>