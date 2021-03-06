
// https://vant-contrib.gitee.io/vant/v3/#/zh-CN/quickstart

import { createApp } from 'vue'
import App from './App.vue'

import { Col, Row } from 'vant';
// // 引入组件
import {Button} from 'vant';
import {List, Cell} from 'vant';

const app = createApp(App)
app.use(Button);
app.use(List);
app.use(Cell);
app.use(Col);
app.use(Row);


app.mount('#app')
