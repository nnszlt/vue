<template>
	<div>
		{{$route.params}}

<br />


 <router-link to="/luyou/id/5/son"> <span>son</span> </router-link>        <router-link to="/luyou/id/5/sson"> <span>sson</span> </router-link>

<br /><br /><br /><br /><br /><br />
<hr />    
<router-link :to="{name:'son',params:{num:'uio'}}"> <span>son</span> </router-link>   <!--:to  绑定-->     
	  <router-view></router-view>	
		
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