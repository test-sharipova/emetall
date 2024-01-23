document.addEventListener('DOMContentLoaded', () => {  
  //график в медиа баннеры  
  Chart.defaults.plugins.legend.display = false;
    new Chart( 
      document.querySelector('.chart'), 
      { 
        type: 'line', 
        data: { 
          labels: ['31.08', '2.09', '4.09', '6.09', '8.09', '10.09', '12.09', '14.09', '16.09', '18.09', '20.09', '22.09', '24.09', '26.09', '28.09', '30.09'], // метки по оси X
          datasets: [ 
            { 
                label: 'Переходы по ссылке из баннера', 
                data: [1, 0, 13, 0, 0, 6, 15, 8, 16, 10, 8, 16, 5, 0, 8, 16], 
                borderColor: '#2764E0',
                borderWidth: 1.3,
                pointStyle: 'circle',
                pointRadius: 0,
                pointHoverRadius: 15,
                
            }
          ]
        },
        
        options: {
            
            scales: {
              
                y: {
                  suggestedMin: 0,
                  suggestedMax: 45,
                  beginAtZero: true, 
                  pointStyle: false,
                  border: {
                    display: false
                  },
                },
              //   yAxes: [{
              //     grid: {
              //       display: false
              //     },
              //     display: false,
              //     ticks: {
              //         beginAtZero: true,
              //         steps: 10,
              //         stepValue: 5,
              //         max: 15
              //     }
              // }],
                x: {
                  grid: {
                    display: false
                  },
                  ticks: {
                    color: 'black',
                    font: {
                      size: '12',
                      weight: 600,
                      
                    }
                  }
                },
                
            },
           
        } 
      }
    );
     
    
  //график в статистике
  Chart.defaults.plugins.legend.display = false;
  new Chart( 
    document.querySelector('.chart2'), 
    { 
      type: 'line', 
      data: { 
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь'], // метки по оси X
        datasets: [ 
          { 
              label: 'Просмотры', 
              data: [0, 20, 60, 50, 60, 119, 90, 110, 80, 90, 140], 
              borderColor: '#2764E0',
              borderWidth: 1.3,
              pointStyle: 'circle',
              pointRadius: 0,
              pointHoverRadius: 15,
              
          },
          { 
            label: 'Переходы из таблицы', 
            data: [0, 10, 45, 35, 60, 88, 77, 95, 63, 88, 130], 
            borderColor: '#DD0858',
            borderWidth: 1.3,
            pointStyle: 'circle',
            pointRadius: 0,
            pointHoverRadius: 15,
            
        },
        { 
          label: 'Другое', 
          data: [0, 7, 20, 10, 15, 7, 20, 22, 28, 30, 65], 
          borderColor: '#3F9C59',
          borderWidth: 1.3,
          pointStyle: 'circle',
          pointRadius: 0,
          pointHoverRadius: 15,
          
      }
        ],
       
      },
      
      options: {
          
          scales: {
            
              y: {
                suggestedMin: 0,
                suggestedMax: 180,
                beginAtZero: true, 
                pointStyle: false,
                border: {
                  display: false
                },
              },
            //   yAxes: [{
            //     grid: {
            //       display: false
            //     },
            //     display: false,
            //     ticks: {
            //         beginAtZero: true,
            //         steps: 10,
            //         stepValue: 5,
            //         max: 15
            //     }
            // }],
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: 'black',
                  font: {
                    size: '12',
                    weight: 600,
                    
                  }
                }
              },
              
          },
         
      } 
    }
  );
  //кольцевая диаграмма в статистике
  //топовые категории
  var circleChart = document.getElementById("profile__circle-chart");
  var circleData = {
    labels: [
        "Отводы",
        "Квадрат",
        "Труба",
        "Лист",
        "Полоса"
    ],
    datasets: [
        {
            data: [16, 31, 24, 8, 21],
            backgroundColor: [
                "#a095e4",
                "#dd0858",
                "#a13960",
                "#3f9c59",
                "#2764e0"
            ],
            borderColor: "black",
            borderWidth: 0
        }]
};

var chartOptions = {
  // rotation: -Math.PI,
  cutout: 99,
  // circumference: Math.PI,
  responsive: false,
  maintainAspectRatio: false,
  width: 228,
  height: 228,
  plugins: {
    tooltip: {
      backgroundColor: 000,
      zindex: 10,
      padding: 12,
      usePointStyle: true,
      
      callbacks: {
          labelPointStyle: function(context) {
              return {
                  pointStyle: 'circle',
                  rotation: 0,
                  
              };
          }
      }
      
  },
  },
 
 
  animation: {
    animateRotate: false,
    animateScale: true
  },

};

var pieChart = new Chart(circleChart, {
  type: 'doughnut',
  data: circleData,
  options: chartOptions
});
//mob
var circleChart = document.getElementById("profile__circle-chart-mob");
  var circleData = {
    labels: [
        "Отводы",
        "Квадрат",
        "Труба",
        "Лист",
        "Полоса"
    ],
    datasets: [
        {
            data: [16, 31, 24, 8, 21],
            backgroundColor: [
                "#a095e4",
                "#dd0858",
                "#a13960",
                "#3f9c59",
                "#2764e0"
            ],
            borderColor: "black",
            borderWidth: 0
        }]
};

var chartOptions = {
  // rotation: -Math.PI,
  cutout: 99,
  // circumference: Math.PI,
  responsive: false,
  maintainAspectRatio: false,
  width: 228,
  height: 228,
  plugins: {
    tooltip: {
      backgroundColor: 000,
      zindex: 10,
      padding: 12,
      usePointStyle: true,
      
      callbacks: {
          labelPointStyle: function(context) {
              return {
                  pointStyle: 'circle',
                  rotation: 0,
                  
              };
          }
      }
      
  },
  },
 
 
  animation: {
    animateRotate: false,
    animateScale: true
  },

};

var pieChart = new Chart(circleChart, {
  type: 'doughnut',
  data: circleData,
  options: chartOptions
});

//топовые стандарты
var circleChart2 = document.getElementById("profile__circle-chart2");
var circleData2 = {
  labels: [
      "8734-75",
      "8732-78",
      "14-3p-55-2001",
      "10704-91",
      "3262-7"
  ],
  datasets: [
      {
          data: [16, 31, 24, 8, 21],
          backgroundColor: [
              "#a095e4",
              "#dd0858",
              "#a13960",
              "#3f9c59",
              "#2764e0"
          ],
          borderColor: "black",
          borderWidth: 0
      }]
};



var pieChart = new Chart(circleChart2, {
type: 'doughnut',
data: circleData2,
options: chartOptions
});
//mob
var circleChart2 = document.getElementById("profile__circle-chart2-mob");
var circleData2 = {
  labels: [
      "8734-75",
      "8732-78",
      "14-3p-55-2001",
      "10704-91",
      "3262-7"
  ],
  datasets: [
      {
          data: [16, 31, 24, 8, 21],
          backgroundColor: [
              "#a095e4",
              "#dd0858",
              "#a13960",
              "#3f9c59",
              "#2764e0"
          ],
          borderColor: "black",
          borderWidth: 0
      }]
};



var pieChart = new Chart(circleChart2, {
type: 'doughnut',
data: circleData2,
options: chartOptions
});

//топовые стали
var circleChart3 = document.getElementById("profile__circle-chart3");
var circleData3 = {
  labels: [
      "20",
      "09Г2С",
      "30ХГСА",
      "12Х1МФ",
      "40Х"
  ],
  datasets: [
      {
          data: [16, 31, 24, 8, 21],
          backgroundColor: [
              "#a095e4",
              "#dd0858",
              "#a13960",
              "#3f9c59",
              "#2764e0"
          ],
          borderColor: "black",
          borderWidth: 0
      }]
};



var pieChart = new Chart(circleChart3, {
type: 'doughnut',
data: circleData3,
options: chartOptions
});
  
//mob
var circleChart3 = document.getElementById("profile__circle-chart3-mob");
var circleData3 = {
  labels: [
      "20",
      "09Г2С",
      "30ХГСА",
      "12Х1МФ",
      "40Х"
  ],
  datasets: [
      {
          data: [16, 31, 24, 8, 21],
          backgroundColor: [
              "#a095e4",
              "#dd0858",
              "#a13960",
              "#3f9c59",
              "#2764e0"
          ],
          borderColor: "black",
          borderWidth: 0
      }]
};



var pieChart = new Chart(circleChart3, {
type: 'doughnut',
data: circleData3,
options: chartOptions
});
  });