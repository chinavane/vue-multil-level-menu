/**
 * Created by dylan on 9/13/16.
 */
export function configRouter(router) {
    router.map({
        '/foo':{
            component:function (resolve) {
                require(['./components/Foo.vue'],resolve)
            }
        },
        '/bar':{
            component:function (resolve) {
                require(['./components/Bar.vue'],resolve)
            }
        },
        '/user':{
            component:function (resolve) {
                require(['./components/User.vue'],resolve)
            }
        },
        '/bdf':{
            component:function (resolve) {
                require(['./components/Bdf.vue'],resolve)
            }
        },
        '/kuma':{
            component:function (resolve) {
                require(['./components/Kuma.vue'],resolve)
            }
        },
        '/dylan':{
            component:function (resolve) {
                require(['./components/Dylan.vue'],resolve)
            }
        },
        '/haha':{
            component:function (resolve) {
                require(['./components/Haha.vue'],resolve)
            }
        }
    });
}