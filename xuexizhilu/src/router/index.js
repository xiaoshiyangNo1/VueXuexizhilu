import Vue from "vue"

import Router from "vue-router"

import good from "@/good/index"

import shangxia from "@/shangxia/index"

import jiazaikuang from "@/jiazaikuang/index"




Vue.use(Router)



export default new Router({
  routes: [
    {path: 'aaa', component: good},
    {path: 'rod',component:shangxia},
    {path: '/', component:jiazaikuang}


    
  ]
})
