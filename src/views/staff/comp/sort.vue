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
  mounted() {
    const data = [
      { genre: "诡术妖姬", 销售量: 9 },
      { genre: "疾风剑豪", 销售量: 3 },
      { genre: "亡灵战神", 销售量: 2 },
      { genre: "德玛西亚", 销售量: 10 },
      { genre: "黑色玫瑰", 销售量: 15 }
    ];

    // Step 1: 创建 Chart 对象
    const chart = new Chart({
      container: "c1", // 指定图表容器 ID
      width: 600, // 指定图表宽度
      height: 300 // 指定图表高度
    });

    // Step 2: 载入数据源
    chart.data(data);
    chart.legend("1");
    // Step 3：创建图形语法，绘制柱状图
    chart.interval().position("genre*销售量");

    // Step 4: 渲染图表
    chart.render();
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
