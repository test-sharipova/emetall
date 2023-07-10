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
  });
  