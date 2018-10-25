<template>
	<div>
	

<br />
<router-link tag="p" to="/luyou2/luyou-children">
			<h1 style="font-size: .5rem;">路由2</h1></router-link>

 <router-view name='left'></router-view>
 <router-view name='right'></router-view>
	</div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                picked: 'Lucy'
            }
        },mounted:function(){
        	console.log(this.$route.params)
        }
    }
</script>