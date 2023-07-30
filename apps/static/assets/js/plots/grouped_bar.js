var ctx = document.getElementById("chart-grouped-bars").getContext("2d");

new Chart(ctx, {
  type: "bar",
  render: "canvas",
  data: {
    labels: ["Grant Avenue", "FDA", "449X"],
    datasets: [
      {
        label: "Boys",
        backgroundColor: "rgb(93, 123, 217)", // Blue
        data: [55, 83, 65],
        maxBarThickness: 40,
        tension: 0.4,
        borderWidth: 0,
        borderRadius: 20,
        borderSkipped: false,
      },
      {
        label: "Girls",
        backgroundColor: "rgb(159, 225, 128)", // Purple
        data: [59, 79, 75],
        maxBarThickness: 40,
        tension: 0.4,
        borderWidth: 0,
        borderRadius: 20,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      y: {
        grid: {
          drawBorder: true,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 500,
          beginAtZero: true,
          padding: 15,
          font: {
            size: 10,
            family: "Open Sans",
            style: "normal",
            lineHeight: 2,
          },
          color: '#b2b9bf',
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 500,
          beginAtZero: true,
          padding: 15,
          font: {
            size: 10,
            family: "Open Sans",
            style: "normal",
            lineHeight: 2,
          },
          color: '#b2b9bf',
        },
      },
    },
  },
});
