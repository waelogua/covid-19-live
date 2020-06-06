import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1 style={{color:"red"}}>Coronavirus Disease (COVID-19) Dashboard Live.</h1>
     <body style={{color: "red"}}>
  <div class="boxex" style={{display: "flex"}}>
  <div class="box">
    <h1 style={{color: "red" ,textAlign: "center", fontFamily: "serif"}}> Global Statistics</h1>
    <h2 id="totalC" style={{fontFamily: "serif",color:"white"}}>
    <h3 id="myDiv"></h3>
    </h2>
  </div>
  <div class="box2">
    <h1 style={{color: "red" ,textAlign: "center", fontFamily: "serif"}}>Ukraine Statistics</h1>
    <h2 id="ukraine" style={{fontFamily: "serif",color:"red"}}>
    <h3 id="myDiv"></h3>
    </h2>
  </div>
</div>
    <h1 style={{color: "red",margin:"20px",textAlign: "left"}}>Statistics by country :</h1>
    <table style={{backgroundColor: "red",margin: "20px"}}>
        <tr bgcolor="red" style={{color:"blue", fontSize: "larger"}}>
          <th>Country</th>
          <th>New confirmed</th>
          <th><span id="color" style={{color: "red"}}>New deaths</span></th>
          <th>New recovered</th>
          <th>Total confirmed</th>
          <th>Total deaths</th>
          <th>Total recovered </th>
        </tr>
        <tbody class="table table-striped table-dark" id="country-list"></tbody>
      </table>
      <canvas id="myChart"></canvas>
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      <script src="app.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
      
</body>
    </div>
  
  );
}

export default App;
