var ctx2 = document.getElementById("donations-line").getContext("2d");

var gradientStroke_board = ctx2.createLinearGradient(0, 230, 0, 50);

gradientStroke_board.addColorStop(1, 'rgb(68, 255, 255)');
gradientStroke_board.addColorStop(0.2, 'rgb(72,72,176,0.0)');
gradientStroke_board.addColorStop(0, 'rgb(203,12,159,0)'); //purple colors

var gradientStroke1 = ctx2.createLinearGradient(0, 230, 0, 50);

gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

var gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 50);

gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [{
        label: "Board",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "rgb(68, 255, 255, 0.8)", // green color,
        borderWidth: 3,
        backgroundColor: "rgb(68, 255, 255, 0.02)",
        fill: true,
        data: [500, 300, 150, 220, 215, 190, 450, 700, 620],
        maxBarThickness: 6

      },
      {
        label: "Junior Board",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "rgb(200, 18, 161, 0.8)", // deep purple color,
        borderWidth: 3,
        backgroundColor: "rgb(200, 18, 161, 0.02)",
        fill: true,
        data: [300, 300, 420, 215, 300, 500, 620, 512, 100],
        maxBarThickness: 6

      },
      {
        label: "In-Kind",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "rgb(246, 159, 0, 0.8)", // light yellow color,
        borderWidth: 3,
        backgroundColor: "rgb(246, 159, 0, 0.02)",
        fill: true,
        data: [315, 300, 400, 220, 320, 512, 580, 600, 170],
        maxBarThickness: 6

      },
      {
        label: "Foundations",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "rgb(130, 214, 21, 0.8)", // light green color,
        borderWidth: 3,
        backgroundColor: "rgb(130, 214, 21, 0.02)",
        fill: true,
        data: [170, 212, 325, 325, 320, 437, 513, 550, 349],
        maxBarThickness: 6

      },
      {
        label: "Individual",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "rgb(93, 123, 217, 0.8)", // light blue color,
        borderWidth: 3,
        backgroundColor: "rgb(93, 123, 217, 0.02)",
        fill: true,
        data: [190, 200, 500, 600, 700, 750, 800, 800, 812],
        maxBarThickness: 6

      },
      {
        label: "Corporate",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "white",
        borderWidth: 3,
        backgroundColor: gradientStroke2,
        fill: true,
        data: [360, 520, 700, 800, 770, 516, 444, 615, 524],
        maxBarThickness: 6
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          padding: 10,
          color: '#b2b9bf',
          font: {
            size: 11,
            family: "Open Sans",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          color: '#b2b9bf',
          padding: 20,
          font: {
            size: 11,
            family: "Open Sans",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
    },
  },
});