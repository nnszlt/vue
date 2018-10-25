<template>
  <div>
    <ol type="I">
      <li>
        <label for="checkbox">
          <p>设置true-value="yes" false-value="no"</p>
          <input id="checkbox" type="checkbox" v-model="toggle" true-value="yes" false-value="no">
          {{toggle}}
        </label>
      </li>
    </ol>

  </div>
</template>
<script>

export default {
  data() {
    return {
      toggle: "yes"
    };
  },
  methods: {},
  watch: {}
};
</script>
<style lang="less" scoped>
</style>
