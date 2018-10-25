<template>
	<div>
		<button @click="back">返回</button> &nbsp;&nbsp;&nbsp;&nbsp;<button @click="home">首页</button>&nbsp;&nbsp;&nbsp;&nbsp;<button @click="go">前进</button>&nbsp;&nbsp;&nbsp;&nbsp;<button @click="query">pushquery</button>
		<br />
		<div class="group">
			<div class="title">这些是不同的 跳转方式 name 和path</div>
		<router-link tag="div" :to="{name:'luyou3-params',params:{trans:'我是params'}}">
			<h1 style="font-size: .4rem;">路由名字:luyou3--params={{$route.params.trans}}</h1>
		</router-link>
		<br></br>
		<router-link tag="div" :to="{path:'/luyou3/query',query:{query:'我是querys'}}">
			<h1 style="font-size: .4rem;">路由地址:/luyou3/query--query={{$route.query.query}}</h1>
		</router-link>
</div>
		<br />
		<br />
		<router-link  tag="div" :to="{path:'/luyou3/luyou3-zonghe/我是地址上的params'}">
			<h1 @click="con" style="font-size: .4rem;">params放在地址 路由:zonghe={{$route.params.zonghe}}</h1>
		</router-link>
		<br />
		<br />
		<router-link tag="div" :to="{path:'/luyou3/luyou3-zonghe/综合',query:{query:'append'}}">
			<h1 style="font-size: .4rem;">append</h1>
			//todo
		</router-link>
		<br />
		<br />
		<router-link tag="div" :to="{path:'/luyou3/luyou3-redirect',query:{query:'redirect'}}">
			<h1 style="font-size: .4rem;">redirect</h1>
		</router-link>
		<br />
		<br />
		<router-link tag="div" :to="{path:'/luyou3/luyou4-redirectfunction/1',query:{query:'num_1'}}">
			<h1 style="font-size: .4rem;">redirectfunction_1</h1>
		</router-link>
		<br />
		<br />
		<router-link tag="div" :to="{path:'/luyou3/luyou4-redirectfunction/2',query:{query:'num_2'}}">
			<h1 style="font-size: .4rem;">redirectfunction_2</h1>
		</router-link>
		<br />
		<br />
		<router-link tag="div" :to="{path:'/gogo',query:{query:'别名-gogo'}}">
			<h1 style="font-size: .4rem;">别名gogo</h1>
		</router-link>
		<br />
		<br />
		<router-link tag="div" :to="{path:'/papa',query:{query:'别名-papa'}}">
			<h1 style="font-size: .4rem;">别名papa</h1>
		</router-link>
		<router-view></router-view>
		<br />
		<br />
		<router-link tag="div" to="404">
			<h1 style="font-size: .4rem;">404</h1>
		</router-link>
		<br />
		<br />
		<router-link tag="div" to="/gouzi">
			<h1 style="font-size: .4rem;">路由钩子</h1>
		</router-link>

	</div>

</template>

<script type="text/babel">
export default {
  data() {
    return {
      list: [
        { name: "测试商品1", num: 1, price: 10.0 },
        { name: "测试商品2", num: 2, price: 20.0 },
        { name: "测试商品3", num: 3, price: 30.0 }
      ],
      a: "kl",
      index: "null"
    };
  },
  methods: {
    back: function() {
      this.$router.go(-1);
    },
    home: function() {
      this.$router.push("/");
    },
    go: function() {
      this.$router.go(1);
    },
    query: function() {
      this.$router.push({
        path: "/luyou3/query",
        query: { query: "push_querys" }
      });
	},
	con:function(){
		console.log(this.$route)
	}
  },
  watch: {},
  computed: {}
};
</script>
<style scoped="scoped">
p {
  font-size: 50px;
}

.transition {
  transition: 0.3s;
}

.left {
  transform: translateX(-30%);
}
.group{
	border: 1px solid red;
	margin: 20px 0;
}
.title{
	margin: 20px 0px;
	text-align: center;
}
</style>