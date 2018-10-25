
使用请参看右侧代码。

<template>
  <yd-accordion>
    <yd-accordion-item  title="1.let 和 const 命令">
      <div style="padding: .24rem;">
        <div class="">
          <h3>1.let</h3>
          <ul type="I" class="ul">
            <li>
              <div class="div">
                <h4 class="title">1 let 只存在块级作用域</h4>
                <pre>
{
let a = 10;
var b = 1;
}

console.log(a) //a is not defined.
console.log(b) // 1
              </pre>

                <pre>
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
 a[6](); // 10

var a = [];
for (var let = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
 a[6](); // 6

</pre>

              </div>

            </li>
            <li></li>
          </ul>

        </div>

      </div>
    </yd-accordion-item>

        <yd-accordion-item open title="2.变量的解构赋值">
      <div style="padding: .24rem;">
        <div class="">
          <h3>1.数组</h3>
          <ul type="I" class="ul">
            <li>
              <div class="div">
                <h4 class="title">1 基本用法</h4>
              <pre>
let [a, b, c] = [1, 2, 3];

console.log(a)//1


              </pre>

              </div>

            </li>
            <li></li>
          </ul>

        </div>

      </div>
    </yd-accordion-item>
  </yd-accordion>
</template>

<script type="text/babel">
import es from "../zj/es6.js";
export default {
  data() {
    return {
      picked: "Lucy"
    };
  },
  created: function() {
  
  }
};
</script>
<style lang="less" scoped>
h3 {
  font-size: 15px;
}
.ul > li {
  margin: 10px 0px;
}
.div {
  margin: 10px 0;
  border-bottom: 1px dashed palevioletred;
}
.title {
  color: red;
  margin: 10px 0px;
  margin-left: 0.2rem;
}
pre {
  margin-left: 0.5rem;
  border-bottom: 1px solid green;
  padding: 10px 0px;
}

.yellow {
  color: yellow;
}
</style>
