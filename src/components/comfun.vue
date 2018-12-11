<template>
  <div>

  </div>
</template>
<script>
import {formatDate} from "../assets/js/date.js";
import returnUrl from "../assets/js/returnUrl.js";
export default {
  data() {
    return {};
  },
  mounted() {
    var data = new Date(1544497120000);
    console.log(formatDate(data, "yyyy-MM-dd hh:mm:ss"));
    console.log(returnUrl.isNull("45"))
    console.log(returnUrl.GetQueryString())
    console.log(returnUrl.Browser())
    console.log(returnUrl.isWechat())
    
  }
};
</script>
<style lang="less" scoped>
</style>
