<template>
  <div>
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  mounted() {
    var chartDom = document.getElementById("main")
    var myChart = echarts.init(chartDom)
    var option

    option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          areaStyle: {}
        }
      ]
    }

    option && myChart.setOption(option)
  }
}
</script>

<style></style>
