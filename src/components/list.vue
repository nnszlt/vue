<template>
    <div>
<ul>
    <li v-for="item in list" :key="item"> <router-link :to="{name:'list_child',params:{id:item}}"> {{item}}</router-link></li>
</ul>
<router-view></router-view>

    </div>
</template>

<script>


    export default{
    data(){
        return{
            list:[1,2,3,4,5,6]
        }
    }



    }
</script>
<style scoped>
li{
    height: 60px;
    border: 1px solid red;
}
</style>
