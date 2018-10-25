<template>
	
<div>
<template>
    <yd-timeline>
        <yd-timeline-item>
            <p>【南宁市】您的订单正在配送途中，请您准备签收，感谢您的耐心等待。京东扫码付，单单享立减。</p>
            <p style="margin-top: 10px;">2017-08-18 08:24:18</p>
        </yd-timeline-item>
        <yd-timeline-item>
            <p>【南宁市】您的订单已到达【南宁安吉站】</p>
            <p style="margin-top: 10px;">2017-08-18 07:25:08</p>
        </yd-timeline-item>
        <yd-timeline-item>
            <p>【南宁市】您的订单在京东【南宁分拨中心】发货完成，准备送往京东【南宁安吉站】</p>
            <p style="margin-top: 10px;">2017-08-17 21:44:08</p>
        </yd-timeline-item>
        ......
    </yd-timeline>
</template>




<template>
    <yd-checkbox-group v-model="checkbox2">
        <yd-checkbox val="啦啦啦"></yd-checkbox>
        <yd-checkbox val="啊啊啊"></yd-checkbox>
        <yd-checkbox val="喔喔喔"></yd-checkbox>
    </yd-checkbox-group>
    
    
    <div v-model="checkbox2">
    <input v-model="checkbox2" type="checkbox" name="" id="" value="啦啦啦" />
    <input v-model="checkbox2" type="checkbox" name="" id="" value="啊啊啊" />
    <input v-model="checkbox2" type="checkbox" name="" id="" value="喔喔喔" /></div>
</template>



</div>
</template>


<script type="text/babel">
    export default {
       data(){
       	
       	return{
       		 checkbox2: []
       	}
       	
       },created:function(){
      
       	
       	  this.$dialog.loading.open('很快加载好了');
      this.$http.get("table-list-img",{area:"青岛市"},function(d){
       	console.log(d)
       	
       })
       setTimeout(() => {
                    this.$dialog.loading.close();
                }, 2000);

       },watch:{
       	checkbox2:function(o,n){
       		console.log(o)
       		
       	}
       	
       	
       }
       
    }
</script>