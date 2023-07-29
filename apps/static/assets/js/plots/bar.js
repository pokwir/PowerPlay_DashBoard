var ctx = document.getElementById("chart-grouped-bars").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Grant Avenue", "FDA", "449X"],
            datasets: [
                {
                    label: "Boys",
                    backgroundColor: "rgb(255, 112, 112)", // Red
                    data: [55, 83, 65],
                    maxBarThickness: 50
                },
                {
                    label: "Girls",
                    backgroundColor: "rgb(93, 123, 217)", // Purple
                    data: [59, 79, 75],
                    maxBarThickness: 50
                }
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
                        drawOnChartArea: false,
                        drawTicks: false,
                    },
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                        beginAtZero: true,
                        padding: 15,
                        font: {
                            size: 11,
                            family: "Open Sans",
                            style: 'normal',
                            lineHeight: 2
                        },
                        color: '#b2b9bf'
                    },
                },
                x: {
                    grid: {
                        drawBorder: false,
                        display: true,
                        drawOnChartArea: false,
                        drawTicks: false
                    },
                    ticks: {
                        display: true,
                        padding: 0,
                        font: {
                            size: 11,
                            family: "Open Sans",
                            style: 'normal',
                            lineHeight: 2
                        },
                        color: '#b2b9bf'
                    },
                },
            },
        },
    });