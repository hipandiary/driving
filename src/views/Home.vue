<template>
  <div>
    <span v-if="condition">加载题目数据失败请刷新页面</span>
    <div v-else>
      <!-- {{$store.state.name}} -->
      <div class="question">
        <span>{{count+1}}.</span>
        <span v-for="(item,index) in question[count]" :key="index.id">{{item}}</span>
        <br />
      </div>
      <div v-if="options[count][0]== ''" class="mT" >
        <input type="radio" name="options" value="对" @click="getRadioVal(items,count)"/>对
        <input type="radio" name="options"  value="错" @click="getRadioVal(items,count)"/>错
        <!-- {{answer[count]}} -->
      </div>
      <div v-else class="mT">
        <div class="options" v-for="(items, index) in options[count]" :key="index.id">
          <input type="radio" id="options" name="options" :value="items" @click="getRadioVal(items,count)"/>
          {{items}}
        </div>
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
      score:0,
      condition: false
    };
  },
  methods: {
     getRadioVal (value,id) {
       const ques = value.slice(0,1)
       if (ques != this.answer[id]) {
         alert("答错了")
       }else{
         alert("答对了")
       }
    },

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
        this.$store.state.topic = res;
        console.log(this.$store.state.topic);
        for (let i = 0; i < res.length; i++) {
          // 获取答案
          this.answer.push(res[i].answer);
          // 获取题目
          this.question.push(res[i].question);
          // 获取选项
          // 先把四个选项数据放入一个数组
          let a1 = [];
          for (let j = 0; j < 1; j++) {
            a1.push(
              res[i].option1,
              res[i].option2,
              res[i].option3,
              res[i].option4
            );
          }
          // 然后再把选项数组放入options
          this.options.push(a1);
        }
      })
      .catch(error => {
        this.condition = true;
      });
    // getdriving()
    //   .then(res => {
    //     console.log(res);
    //     this.topic = res;
    //     console.log(this.topic);
    //     for (let i = 0; i < res.length; i++) {
    //       // 获取答案
    //       this.answer.push(res[i].answer);
    //       // 获取题目
    //       this.question.push(res[i].question);
    //       // 获取选项
    //       // 先把四个选项数据放入一个数组
    //       let a1 = [];
    //       for (let j = 0; j < 1; j++) {
    //         a1.push(
    //           res[i].option1,
    //           res[i].option2,
    //           res[i].option3,
    //           res[i].option4
    //         );
    //       }
    //       // 然后再把选项数组放入options
    //       this.options.push(a1);
    //     }
    //   })
    //   .catch(error => {
    //     this.condition = true;
    //   });
  }
};
</script>

<style scoped>
.question{
  width: 90%;
  margin-left: 0.5em;
  text-align: left;
  /* border: 0.2em solid yellow; */

}
.options {
  width: 80%;
  margin-left: 1rem;
  margin-top: 1rem;
  text-align: left;
  /* border: 0.2rem solid yellow; */
}
button {
  padding: 0.31em;
  margin: 3em 2em  ;
}
.mT {
  margin-top: 20px;
  line-height: 24px;
}
input {
  margin-right: 0.3em;
}
</style>