# multilayer-menu

> multilayer menu with vue 1

![alt tag](https://github.com/kuma0605/vue-multilayer-menu/blob/master/demo.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

##Usage:

``` bash
# used as a component of vue
<template>
    <menu-tree :tree-data="leftNav"></menu-tree>
</template>
<script>
import menuTree from '../components/menuTree.vue'
export default {
    data(){
        return {
            leftNav:[
                {
                    text:"user center", // show text
                    url:"/user", // link which will be matched in router , it could also be '' which depend your project structure.
                    icon:"", // optional, if you wanna add icon before text
                    access:true //optional, default true, if you wanna hide current menu ,set it to false
                    children:[
                        {   //child can have all option above, nest it as you need.
                            text:"ABC",
                            url:""
                        }

                    ]
                }
            ]
        }
    },
    components:{
        menuTree
    }
}
</script>

