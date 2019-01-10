import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import button from '@/components/button'
import cell from '@/components/cell'
import text_area from '@/components/text_area'
import input from '@/components/input'
import shop from '@/components/shop'
import luyou from '@/components/luyou'
import luyou2 from '@/components/luyou2'
import luyou3 from '@/components/luyou3'
import store from '@/components/store'
import store2 from '@/components/store2'
import touch from '@/components/touch'
import vue from '@/components/vue'
import tranistion from '@/components/tranistion'
import slot from '@/components/slot'
import props from '@/components/props'
import donghua from '@/components/donghua'
import zujian from '@/components/zujian'
import chacao from '@/components/chacao'
import watchs from '@/components/watch'
import compute from '@/components/compute/computer'
import img from '@/components/img'
import scrolllist from '@/components/scrolllist'
import click from '@/components/click'
import model from '@/components/model'
import chuanval from '@/components/chuanval'
import ajax from '@/components/ajax'
import promise from '@/components/Promise'
import es6 from '@/components/es6'
import comfun from '@/components/comfun'
import filter from '@/components/filter'
import preview from '@/components/vue-preview/preview'
import swiper from '@/components/swiper'

// import list from '@/components/list'
//http://localhost:4040/#/luyou3/query?456=querys
//http://localhost:4040/#/luyou3/luyou3-query?query=redirect
//二级模板
import son from '@/components/erji/son'
import sson from '@/components/erji/sson'
import left from '@/components/erji/left'
import right from '@/components/erji/right'
import query from '@/components/erji/query'
import params from '@/components/erji/params'
import zonghe from '@/components/erji/zonghe'
import ins from '@/components/erji/in'
import out from '@/components/erji/out'
import gouzi from '@/components/erji/gouzi'
//二级模板


// es6 模板
import es6a from '@/components/es6/a'
// es6 模板

var list_child = {
  template: `<p>{{id}}</p>`,
  props: ["id"]
}

//定义末班
const cuowu = {
  template: "<p>404</p>",
}
//  懒加载模板
var list = resolve => require(['@/components/list'], resolve)

Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
var bsae = "/cn/"


var router = new Router({
  mode: "hash", //hash
  base: "/zlt/", //   http://localhost:4040/zlt/     在地址上添加  mode 是 history
  linkActiveClass: 'link_active',
  fallback: true,

  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: "HelloWorld",
        show: true,
        keepAlive: false, //此组件不需要被缓存
      }

    },
    {
      path: '/ydui_button',
      name: 'y_button',
      component: button,
      meta: {
        title: "button",
        show: true
      }

    },
    {
      path: '/ydui_cell',
      name: 'y_cell',
      component: cell,
      meta: {
        show: true
      }
    }, {
      path: '/ydui_tr',
      name: 'y_tr',
      component: text_area
    }, {
      path: '/ydui_input',
      name: 'y_ip',
      component: input,
      meta: {
        show: true
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      meta: {
        show: true,
        keepAlive: false, //此组件不需要被缓存
      }
    },
    {
      path: '/luyou/:id/:num',
      name: 'luyou',
      component: luyou,
      meta: {
        show: true
      },
      children: [{
          name: 'son',
          path: '/luyou/:id/:num/son',
          component: son
        },
        {
          name: 'sson',
          path: '/luyou/:id/:num/sson',
          component: sson,
          meta: {
            show: true
          }
        }

      ]
    },
    {
      path: '/store',
      name: 'store',
      component: store,
      meta: {
        show: true
      }
    },
    {
      path: '/store2',
      name: 'store2',
      component: store2,
      meta: {
        show: true
      }
    }, {
      name: "luyou2",
      path: '/luyou2',
      component: luyou2,
      children: [{
        name: 'luyou-children',
        path: "/luyou2/luyou-children",
        components: {
          left: left,
          right: right

        }

      }]

    }, {
      name: 'luyou3',
      path: '/luyou3',
      component: luyou3,
      children: [{
          name: 'luyou3-query',
          path: 'query',
          component: query,
          alias: ["/gogo", '/papa'],
          meat: {
            show: true
          }

        }, {
          name: 'luyou3-params',
          path: 'params',
          component: params

            ,
          meat: {
            show: true
          }
        },
        {
          name: 'luyou3-zonghe',
          path: 'luyou3-zonghe/:zonghe',
          component: zonghe,
          meat: {
            show: true
          }
        },
        {
          name: 'luyou3-append',
          path: 'luyou3-append',
          component: zonghe,
          meat: {
            show: true
          }
        },
        {
          name: 'luyou3-redirect',
          path: 'luyou3-redirect',
          redirect: "/luyou3/query"
        },

        {
          name: 'luyou4-redirectfunction',
          path: 'luyou4-redirectfunction/:num',
          redirect: function (url) {
            if (url.query.query == "num_1") {
              return "/luyou3/query"
            } else {
              return "/luyou3/query"
            }

          }
        }

      ]

    },
    {
      name: 'gouzi',
      path: '/gouzi',
      component: gouzi,
      beforeEnter: (to, form, next) => {
        console.log(form)
        next()

      }
    },
    {
      path: '/touch',
      name: 'touch',
      component: touch,
      meta: {
        show: true
      }
    },
    {
      path: '/vue',
      name: 'vue',
      component: vue,
      meta: {
        show: true
      }
    }, {
      path: '/tranistion',
      name: 'tranistion',
      component: tranistion,
      children: [{
        path: 'in',
        name: 'in',
        component: ins
      }, {
        path: 'out',
        name: 'out',
        component: out
      }],
      meta: {
        show: true
      }
    },
    {
      name: "donghua",
      path: "/donghua",
      component: donghua,
      meta: {
        title: "动画"
      }

    },
    {
      name: "slot",
      path: "/slot",
      component: slot

    },
    {
      name: "props",
      path: "/props",
      component: props

    },
    {
      name: "zujian",
      path: "/zujian",
      component: zujian
    }, {
      name: "chuanval",
      path: "/chuanval",
      component: chuanval,
      meta: {
        keepAlive: true
      }
    },
    {
      name: "chacao",
      path: "/chacao",
      component: chacao
    },
    {
      name: "list",
      path: "/list",
      component: list, //懒加载
      children: [{
        name: 'list_child',
        path: "list_child/:id",
        component: list_child,
        props: true //直接把 ：id 传到组件
        // props: (r) => {
        // return  {
        //     id: r.params.id
        //   }
        // }
        // props: function (r) {
        //   return  {
        //       id: r.params.id
        //     }
        // }
      }]
    }, {
      name: "watch",
      path: "/watch",
      component: watchs
    }, {
      name: "compute",
      path: "/compute",
      component: compute
    }, {
      name: "img",
      path: bsae + "img",
      component: img
    }, {
      name: "scrolllist",
      path: "/scrolllist",
      component: scrolllist,
      meta: {
        keepAlive: true
      }
    }, {
      name: "click",
      path: "/click",
      component: click,
      meta: {
        keepAlive: true
      }
    }, {
      name: "model",
      path: "/model",
      component: model,
      meta: {
        keepAlive: true
      }
    }, {
      name: "ajax",
      path: "/ajax",
      component: ajax,
      meta: {
        keepAlive: true
      }
    }, {
      name: "promise",
      path: "/promise",
      component: promise,
      meta: {
        keepAlive: true
      }
    }, {
      name: "es6",
      path: "/es6",
      component: es6,
      children: [{
        name: 'es6a',
        path: "es6a",
        component: es6a
      }],
      meta: {
        keepAlive: true
      }
    }, {
      name: "comfun",
      path: "/comfun",
      component: comfun
    }, {

      name: "filter",
      path: "/filter",
      component: filter
    }, {

      name: "preview",
      path: "/preview",
      component: preview
    },

    {

      name: "swiper",
      path: "/swiper",
      component: swiper
    }

    , {
      name: "404",
      path: "*",
      component: cuowu
      //放在最后
    }

  ],

  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition)
    if (savedPosition) {
      console.log(888)
      return savedPosition
    }
  }
});
router.beforeEach(function (to, from, next) {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});
router.beforeResolve((to, from, next) => {
  // console.log("beforeResolve")
  next()
});
router.afterEach((to, from) => {
  // console.log("afterEach")
});
export default router;
