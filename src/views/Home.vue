<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="btn" @click="handleClick">点击</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Worker from "@/worker/my.worker.js";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data(){
    return {
      myWorker: null,
    };
  },
  created() {
    this.myWorker = new Worker();
    this.myWorker.onmessage = function (event) {
      console.log(`message received from worker:${event.data}`);
    };
  },
  methods:{
    handleClick(){
      this.myWorker.postMessage('hello worker!');
    }
  },
};
</script>
<style lang="less" scoped>
.btn{
  cursor: pointer;
}
</style>
