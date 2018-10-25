

<template>
<div>
	<ul>
		<v-touch  v-for="(g,i) in list" tag="p" v-on:swipeleft="onTap(g,i)":key="g.num":class='{transition:true,left:i==index}'>{{i}}--Tap me!</v-touch>
   
</ul>
</div>


</template>

<script type="text/babel">
    export default {
    
        data() {
            return {
             list: [{name : "测试商品1",num : 1, price : 10.0},
                    {name : "测试商品2",num : 2, price : 20.0},
                    {name : "测试商品3",num : 3, price : 30.0}
                   
                    ],
                    a:"kl",
                    index:'null'
            
            }
        },	
        	 methods : {
     
               onTap:function(g,i){
               	console.log(i)
               	this.index=i
               console.log(g)
               
               }
        
    },
        	
       
      watch:{
  
     
      },computed:{

      }
        
    }
</script>
<style type="text/css">
	p{font-size: 50px;}
	.transition{transition: .3s;}
	.left{
		transform: translateX(-30%);
	}
</style>