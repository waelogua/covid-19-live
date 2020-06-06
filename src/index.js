import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery' ;
import Chart from 'chart.js';


let ctx = 'myChart';
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});
//fetch data
$.getJSON("https://api.covid19api.com/summary",function(data){
  console.log(data);
  console.log(data.Countries[174]);
  console.log(data.Countries);

   // Set ukraine statistics
    $("#ukraine").append(
    "<h2>" + "New Confirmed "+ "</h2>" +"<h3>"+data.Countries[174].NewConfirmed+ "</h3>"+
    "<h2>" + "Total Confimed "+ "</h2>" +"<h3>"+ data.Countries[174].TotalConfirmed+ "</h3>"+
    "<h2>" + "New Deaths "+ "</h2>" +"<h3>"+ data.Countries[174].NewDeaths+ "</h3>"+
    "<h2>" + "Total Deaths "+ "</h2>" +"<h3>"+ data.Countries[174].TotalDeaths+ "</h3>"+
    "<h2>" + "New Recovered "+ "</h2>" +"<h3>"+ data.Countries[174].NewRecovered+ "</h3>"+
    "<h2>" + "Total Recovered "+ "</h2>" +"<h3>"+ data.Countries[174].TotalRecovered+ "</h3>",

    );
    
  // Global statistics
  $.each(data.Global, function(key,value){
    $("#totalC").append("<h2>" + key + "<h3>" +  value + "</h3>"+ "</h2>");
    
  });
  
  // Stats by country
$.each(data.Countries,function(key,value){
  $('#country-list').append(`<tr><td>${value.Country}</td><td>${value.NewConfirmed}</td><td>${value.NewDeaths}</td><td>${value.NewRecovered}</td><td>${value.TotalConfirmed}</td><td>${value.TotalDeaths}</td><td>${value.TotalRecovered}</td></tr>`);
})

// Date
$('.title').append("<h1>" + data.Date +"</h1>")

}


);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
