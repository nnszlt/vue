<template>
	
    <yd-tabbar fixed  color="#343434" >
        <yd-tabbar-item title="首页" link="/">
            <yd-icon name="home" slot="icon" size="0.54rem" ></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item class="active" title="购物车" link="/shop" >
            <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/ydui_cell">
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="图片" link="/ydui_input" >
            <img slot="icon" style="hight:20px;" src="http://static.ydcss.com/ydui/img/logo.png">
        </yd-tabbar-item>
    </yd-tabbar>
</template>

<style type="text/css">
	.router-link-active{
	color:red !important;
	}
    .yd-tabbar-icon{
        height: 30px;
    }
</style>

<script type="text/babel">
    export default {
       data(){
       	
       	return{
       		
       	}
       	
       },created:function(){
//     	console.error(this.$route.meta)
       }
    }
</script>