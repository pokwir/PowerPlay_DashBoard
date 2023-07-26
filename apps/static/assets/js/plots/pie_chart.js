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
      radius: [10, 115],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      labelLine: {show: false},
      label: {show: true, 
      formatter: '{b} : {c} ({d}%)', 
      fontSize: 10,
      fontFamily: "open sans", 
      position: 'inside', 
      padding: [0, -50, 0, 0],
      rich: {alignTo: "labelLine"
            },
          },
      data: [
        { value: 100, name: "Black" },
        { value: 75, name: "White" },
        { value: 75, name: "Latina" },
        { value: 44, name: "Indian" },
        { value: 68, name: "Asian" },
        { value: 10, name: "Other" },
      ],
    },
  ],
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: [10, 15],
    textStyle: {
      color: "#fff",
      fontSize: 13,
      fontFamily: "open sans",
    }
  },
};


// Set the configuration and render the chart
myChart.setOption(option);
if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);