<template>
  <div>
    <p class="title">员工绩效评比</p>
    <div id="c1"></div>
  </div>
</template>

<script>
import { Chart } from "@antv/g2";
export default {
  name: "sort",
  props: {
    tableData: Array
  },
  watch: {
    tableData: function (newVal) {
      const chart = new Chart({
        container: "c1", // 指定图表容器 ID
        width: 600, // 指定图表宽度
        height: 300 // 指定图表高度
      });

      // Step 2: 载入数据源
      chart.data(newVal);
      chart.legend("1");
      // Step 3：创建图形语法，绘制柱状图
      chart.interval().position("name*count");

      // Step 4: 渲染图表
      chart.render();
      console.log(newVal, 999)
    }
  },
  mounted () {


    // Step 1: 创建 Chart 对象

  }
};
</script>

<style scoped>
.title {
  text-shadow: 0px 0px 6px #fff, 0px 0px 42px #07a771ea, 0px 0px 72px #07a771ea,
    0px 0px 150px #07a771ea;
  font-size: 20px;
}
</style>
