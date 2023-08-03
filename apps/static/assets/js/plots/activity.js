var chartDom = document.getElementById('activity-chart');
    var myChart = echarts.init(chartDom);
    var option;

    const gaugeData = [
      {
        value: 30,
        name: '60',
        title: {
          offsetCenter: ['0%', '-25%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '-15%']
        }
      },
      {
        value: 60,
        name: '90',
        title: {
          offsetCenter: ['0%', '0%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '10%']
        }
      },
      {
        value: 120,
        name: '90+',
        title: {
          offsetCenter: ['0%', '25%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '35%']
        }
      }
    ];

    option = {
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 0.5,
              borderColor: 'none',
            }
          },
          axisLine: {
            lineStyle: {
              width: 100, opacity: 0.0
            }
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: gaugeData,
          title: {
            fontSize: 10
          },
          detail: {
            width: 0,
            height: 10,
            fontSize: 10,
            color: 'inherit',
            borderColor: 'inherit',
            borderRadius: 10,
            borderWidth: 1,
            formatter: '{value}'
          }
        }
    ],
    tooltip: {
      trigger: "item",
      formatter: "Hours <br/>{b} : {c} students",
      backgroundColor: "rgba(0,0,0,0.7)",
      padding: [10, 15],
      textStyle: {
        color: "#fff",
        fontSize: 13,
        fontFamily: "open sans",
      }
    },
    };

    myChart.setOption(option);