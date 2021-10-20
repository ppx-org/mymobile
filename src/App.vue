<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import {ref} from "vue";

const list = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }

// 加载状态结束
    loading.value = false;

// 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 2000);
};

// return {
//   list,
//   onLoad,
//   loading,
//   finished,
// };

</script>

<template>

<!--  <van-list-->
<!--      v-model:loading="loading"-->
<!--      :finished="finished"-->
<!--      finished-text="没有更多了"-->
<!--      @load="onLoad"-->
<!--  >-->
<!--    <van-cell v-for="item in list" :key="item" :title="item"/>-->
<!--  </van-list>-->

  <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
  >


      <div v-for="item in list" class="van-clearfix " style="width:180px;height:180px;border:1px solid red;float:left">
        <div class="float-item">1</div>
        <div class="float-item">2</div>
        <div class="float-item">3</div>
      </div>
    </van-list>


</template>

<script>


export default {

};


</script>

<style>
</style>
