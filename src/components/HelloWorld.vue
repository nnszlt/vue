<template>
	<div class="hello">

		<ul>

			<router-link tag="li" to="/luyou/id/5">
				<h1 style="font-size: .5rem;">路由1</h1>
			</router-link>
			<router-link tag="li" to="/luyou2">
				<h1 style="font-size: .5rem;">路由2</h1>
			</router-link>
			<router-link tag="li" to="/luyou3">
				<h1 style="font-size: .5rem;">路由3</h1>
			</router-link>
			<router-link tag="li" to="/store">
				<h1 style="font-size: .5rem;">vuex</h1>
			</router-link>
			<router-link tag="li" to="/store2">
				<h1 style="font-size: .5rem;">vuex2</h1>
			</router-link>
			<router-link tag="li" to="/touch">
				<h1 style="font-size: .5rem;">touch</h1>
			</router-link>
			<router-link tag="li" to="/vue">
				<h1 style="font-size: .5rem;">vue</h1>
			</router-link>
			<router-link tag="li" to="/tranistion">
				<h1 style="font-size: .5rem;">tranistion-动画</h1>
			</router-link>
			<router-link tag="li" to="/donghua">
				<h1 style="font-size: .5rem;">动画</h1>
			</router-link>
			<router-link tag="li" to="/slot">
				<h1 style="font-size: .5rem;">slot</h1>
			</router-link>
			<router-link tag="li" to="/props">
				<h1 style="font-size: .5rem;">props</h1>
			</router-link>
			<router-link tag="li" to="zujian">
				<h1 style="font-size: .5rem;">组件</h1>
			</router-link>
			<router-link tag="li" to="chuanval">
				<h1 style="font-size: .5rem;">组件传值</h1>
			</router-link>

			<router-link tag="li" to="chacao">
				<h1 style="font-size: .5rem;">插槽</h1>
			</router-link>
			<router-link tag="li" to="list">
				<h1 style="font-size: .5rem;">列表路由</h1>
			</router-link>
			<router-link tag="li" to="watch">
				<h1 style="font-size: .5rem;">watch</h1>
			</router-link>
			<router-link tag="li" to="/cn/img">
				<h1 style="font-size: .5rem;">static照片引用</h1>
			</router-link>
			<router-link tag="li" to="/scrolllist">
				<h1 style="font-size: .5rem;">路由和列表</h1>
			</router-link>
			<router-link tag="li" to="/click">
				<h1 style="font-size: .5rem;">点击</h1>
			</router-link>
			<router-link tag="li" to="/model">
				<h1 style="font-size: .5rem;">原生表单</h1>
			</router-link>
						<router-link tag="li" to="/ajax">
				<h1 style="font-size: .5rem;">ajax拦截</h1>
			</router-link>
						<router-link tag="li" to="/promise">
				<h1 style="font-size: .5rem;">promise</h1>
			</router-link>
				<router-link tag="li" to="/es6">
				<h1 style="font-size: .5rem;">es6</h1>
			</router-link>
				<router-link tag="li" to="/comfun">
				<h1 style="font-size: .5rem;">公共方法</h1>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created: function() {
    console.log(this.$store.state.name);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  font-size: 80px;
}

ul {
  padding: 0;
}

li {
  margin: 0 1rem;
  list-style: decimal-leading-zero;
}

a {
  color: #42b983;
}
</style>