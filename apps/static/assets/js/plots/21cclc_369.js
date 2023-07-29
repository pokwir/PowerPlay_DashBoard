// echarts_pie_chart.js

// Initialize the ECharts instance
var dom = document.getElementById('chart-369');
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
      radius: [15, 115],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      labelLine: {show: true},
      label: {show: true, 
      formatter: '{b} :{d}%', 
      fontSize: 10,
      fontFamily: "open sans", 
      position: 'inside', 
      padding: [0, -50, 0, 0],
      rich: {alignTo: "position"
            },
          },
      data: [
        { value: 5, name: "Under 30" },
        { value: 30, name: "30-60" },
        { value: 60, name: "61-90" },
        { value: 120, name: "90+" },
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