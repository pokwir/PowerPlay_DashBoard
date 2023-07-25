// echarts_pie_chart.js

// Initialize the ECharts instance
var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  legend: {
    show: false,
    top: false,
  },

  aria: {
    enabled: true,
    decal: {
        show: false
    }
},
  toolbox: {
    show: false,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: [10, 105],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      labelLine: {show: false},
      label: {show: false},
      data: [
        { value: 50, name: "Black" },
        { value: 38, name: "White" },
        { value: 32, name: "Latina" },
        { value: 30, name: "Indian" },
        { value: 68, name: "Asian" },
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
if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);