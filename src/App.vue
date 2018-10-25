<template>
	<div id="app">
		路由的名字--{{$route.name}}--{{$route.meta.keepAlive}}
		<transition :name="transitionName" mode="out-in">
			<keep-alive v-if="$route.meta.keepAlive">
				<router-view class="Router keepAlive"></router-view>
			</keep-alive>

		<router-view v-if="!$route.meta.keepAlive" class="Router"></router-view>

		</transition>
		<bottom v-show="this.$route.meta.show"></bottom>

	</div>
</template>

<script>
import bottom from "@/components/bottom";
export default {
  name: "App",
  components: {
    bottom
  },

  data() {
    return {
      show: this.$route.meta.show,
      transitionName: "slide-right"
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  },created:function(){
    console.log(this.$route.meta)
  }
};
</script>

<style>
.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
  top: 40px;
  bottom: 54px;
  overflow: auto;

}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>