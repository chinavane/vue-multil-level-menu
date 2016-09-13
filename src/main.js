import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {configRouter} from "./router.config"

Vue.use(VueRouter);

var top=Vue.extend(App);

var router= new VueRouter()

configRouter(router)

router.start(top,"#top")

