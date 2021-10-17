
// https://vant-contrib.gitee.io/vant/v3/#/zh-CN/quickstart

import { createApp } from 'vue'
import App from './App.vue'


// // 引入组件
// import Button from 'vant/es/button';
import {Button } from 'vant';
// 引入组件对应的样式，若组件没有样式文件，则无须引入
//  import 'vant/es/button/style';

const app = createApp(App)

// import Vant from 'vant';
// import 'vant/lib/index.css';
// app.use(Vant);


app.use(Button);

app.mount('#app')
