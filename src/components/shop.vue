

<template>
    <div>
    	  <input type="checkbox" name="" id="" :checked="all" value="all" @change="allf"/><br /><br />
    	  
    	  
    	  <div v-for="(g,i) in goods_list">
        <input v-model="list" type="checkbox" name="" id="" :value="g.price" />{{g.name}}-{{"No。"+i}}<br />
         </div>
         {{ctotle}}
    </div>
</template>

<script type="text/babel">
    export default {
    
        data() {
            return {
            
               list:[],
                all: false,
                goods_list: [{name : "测试商品1",num : 1, price : 10.0},
                    {name : "测试商品2",num : 2, price : 20.0},
                    {name : "测试商品3",num : 3, price : 30.0}
                   
                    ]
            }
        },methods:{
        	
        	allf:function(el){
        		this.all!=this.all
        		var vues=this
        		if(this.all==false){
        		this.goods_list.forEach(function(v,i){
        			vues.list.push(v.price)
        		})
        	}else{
        		vues.list=[]
        	}
        		
        	}
        	
        },
      watch:{
      	list:function(o,n){
if(o.length==this.goods_list.length){
	
	this.all=true
}else{
	this.all=false
}
      		
      	},
     
      },computed:{
      	ctotle:function(){
      		var sum=0
      		this.list.forEach(function(v){
      			sum+=parseInt(v)
      			
      		})
      		console.log(sum)
      		return sum
      		
      		
      	}
      }
        
    }
</script>