<template>
    <div>
<!-- <father></father> -->
chacao
    </div>
</template>
<script>
var childs = {
  template: `
   <div slot-scope="user">
        <ul>
          <li v-for="item in user.sj">{{item}}</li>
        </ul>
      </div>`,
    data(){
        return{
              sj: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
        }
    }
};
var father = {
  template: `

  <div class="father">
        <h3>这里是父组件</h3>
         <child>
            <div class="tmpl">
              <span>菜单1</span>
              <span>菜单2</span>
              <span>菜单3</span>
              <span>菜单4</span>
              <span>菜单5</span>
              <span>菜单6</span>
            </div>
       </child>
    </div>
`,
 components: {
    "child": childs
  }
};


export default {
  data() {
    return {
      name: "zlt"
      
    };
  },
  components: {
    "father": father,
    "child": childs
  }
};
</script>