// echarts_pie_chart.js

// Initialize the ECharts instance
var dom = document.getElementById('lapsed');
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
      radius: [100, 130],
      center: ['50%', '50%'],
      roseType: 'pie',
      itemStyle: {
        borderRadius: 20
      },
      labelLine: {show: true},
      label: {show: true, 
      formatter: '{b} :{d}%', 
      fontSize: 11,
      fontFamily: "open sans", 
      position: 'normal', 
      padding: [0, -50, 0, -50],
      rich: {alignTo: "position"
            },
            
          },
      data: [
        { value: 25, name: "This Year" },
        { value: 24, name: "Last Year" },
        { value: 15, name: "Last Five" },
        { value: 34, name: "Some Year" },
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