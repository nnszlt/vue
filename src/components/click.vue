<template>
  <div>
    <div class="a" @click="aa">
      click 普通点击 a
      <div class="b" @click.stop="bb($event,5)">
        <p>click.stop 禁止穿透 b</p>
          <div class="z" @click.stop="zz">zz</div>
        
      </div>

    </div>
    <div @click.once="cc" class="c">
      click.once只能点击一次 c
    </div>
    <div class="d" @click="dd">
      click 普通点击 d
      <div class="e" @click.capture="ee">
        如果 粉色的click 添加 .capture 先执行粉色在执行白色<br>
        如果 白色的click 添加 .capture 先执行白色在执行粉色<br>
        即元素自身触发的事件先在此处理，然后才交由内部元素进行处理
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    aa: () => {
      alert("紫色");
    },
    bb: (e, n) => {
      console.log(e);
      alert("红色");
    },
    cc: () => {
      alert("黄色");
    },
    dd: () => {
      alert("粉色");
    },
    ee: () => {
      alert("白色");
    },
    zz: () => {
      alert("黄绿");
    }
  },
  watch: {}
};
</script>
<style lang="less" scoped>
.a {
  width: 100%;
  background: rebeccapurple;
  height: 300px;
  overflow: hidden;
  .b {
    margin-top: 100px;
    width: 50%;
    height: 50%;
    background: red;
    .z{
      width: 50%;
      height: 50%;
      background: yellowgreen;
    }
  }
}
.c {
  width: 100%;
  height: 100px;
  background: yellow;
}
.d {
  width: 100%;
  height: 200px;
  background: hotpink;
  .e {
    width: 100%;
    height: 50%;
    background: white;
  }
}
</style>
