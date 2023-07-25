// echarts_pie_chart.js

// Initialize the ECharts instance
var chartDom = document.getElementById("chart-container");
var myChart = echarts.init(chartDom);

// Configuration for the pie chart
var option = {
  legend: {
    show: false,
  },
  series: [
    {
      name: "Ethinicity",
      type: "pie",
      radius: [10, 100],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 15,
      },
      data: [
        { value: 40, name: "Black" },
        { value: 38, name: "White" },
        { value: 32, name: "Latina" },
        { value: 30, name: "Indian" },
        { value: 28, name: "Asian" },
        { value: 26, name: "Other" },
      ],
    },
  ],
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
};


// Set the configuration and render the chart
myChart.setOption(option);