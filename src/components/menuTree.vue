<template>
        <ul class="menuContainer">
            <li v-for="item in treeData" class="eachLi" v-show="showMenu(item.access)">
                <a v-link="convertLink(item.url)" class="eachMenu"><i v-if="item.icon" :class="iconStyle(item.icon)" v-></i>{{item.text}}<i v-if="item.children" class="arrow-left glyphicon glyphicon-menu-right"></i></a>
                <menu-tree v-if="item.children" class="childrenMenu" :tree-data="item.children"></menu-tree>
            </li>
        </ul>
</template>
<style scoped lang="less">

    @menu_height:50px;

    @child_menu_height:-(@menu_height);

    .menuContainer{
        list-style:none;
        padding: 0;
        margin: 0;
        background-color: #336ca6;
        .eachLi{
            height:@menu_height;
            line-height:@menu_height;
            width:100%;
            .eachMenu{
                box-shadow: inset 0 -1px rgba(0,0,0,0.2);
                text-shadow: 0 0 1px rgba(255,255,255,0.1);
                outline: none;
                transition: background 0.4s, box-shadow 0.4s;
                    height:@menu_height;
                    line-height:@menu_height;
                    /* use inline-block */
                    display: block;
                    color:#fff;
                    letter-spacing:2px;
                    text-decoration:none;
                    cursor:pointer;
                    padding-left:25px;
                    padding-right:15px;

                    i:first-child:not(.arrow-left){
                        margin-right:17px;
                    }
                    i.arrow-left{
                        float:right;
                        top:50%;
                        transform:translateY(-50%);
                    }

            }
            .childrenMenu{
                background-color: #336ca6;
                z-index:5;
                display: none;
                position:relative;
                width: 100%;
                top:@child_menu_height;
                left:100%;
                box-shadow: 1px 1px 4px rgba(0,0,0,0.6)
            }
            /* must be applyed on li not inner a link */
            &:hover{
                 >a{
                      background: rgba(0,0,0,0.2);
                      /*background:#335786;*/
                      box-shadow: inset 0 -1px rgba(0,0,0,0);
                 }
                 >.childrenMenu{
                      display: block;
                 }
            }


        }

        .active-menu{
            background:rgba(29, 54, 93 , 0.7);
            /*background:#244C75;*/
        }
    }

</style>
<script>
    export default {
        name:"menu-tree",
        props:{
            treeData:{
                type: Array,
                default: []
            }
        },
        methods:{
            convertLink(url){
                let link={
                    path:url,
                    activeClass:'active-menu'

                };
                return link;
            },
            iconStyle(icon){
                let icon_style=[icon];
                return icon_style;
            },
            showMenu(access){
                return Object.is(access,undefined)?true:access;
            }
        }
    }
</script>