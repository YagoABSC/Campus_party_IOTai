document.addEventListener('DOMContentLoaded', function() {
    const temperatureElement = document.getElementById('temperature');
    const humidityElement = document.getElementById('humidity');
  
    function fetchData() {
      //fetch('http://esp32.local/data')
      fetch('http://localhost/projetomakers/php/fake_data.php')
        .then(response => response.json())
        .then(data => {


        temperatureElement.innerHTML = `<div>${data.temperature.toFixed(0)}°C</div>`;

        humidityElement.innerHTML = `<i class="icone2 fas fa-tint" style="color: rgba(85, 158, 254, 1);"></i> ${data.humidity.toFixed(0)}%`;

        if (data.temperature <= 10) {

            document.getElementById('temp-status').innerText = "Temperatura abaixo do ideal";

        }else if (data.temperature >= 26 && data.temperature <= 50){

            document.getElementById('temp-status').innerText = "Aviso: Temperatura acima do ideal";

         }else if(data.temperature > 50){
            
            document.getElementById('temp-status').innerText = "Perigo: Temperatura muito acima do normal!";

        }else if(data.temperature > 10 && data.temperature < 26){
        
            document.getElementById('temp-status').innerText = "Temperatura ideal";
        
        }

        if (data.humidity <= 30) {

            document.getElementById('humi-status').innerText = "Umidade abaixo do ideal"
        
        } else if (data.humidity >= 60){
           
            document.getElementById('humi-status').innerText = "Umidade muito alta"
        
        } else{
         
            document.getElementById('humi-status').innerText = "Umidade ideal"
       
        }

        })
        .catch(error => console.error('Erro ao buscar dados:', error));
    }
  
    // Busca os dados a cada 2 segundos, tempo de atualização do módulo
    setInterval(fetchData, 5000);
  
    // Busca os dados imediatamente ao carregar a página
    fetchData();
});

// Saudacao 
function saudacao() {
  var data = new Date();
  var hora = data.getHours();
  var saudacao;

  if (hora >= 5 && hora < 13) {
      saudacao = 'Bom dia';
  } else if (hora >= 13 && hora < 18) {
      saudacao = 'Boa tarde';
  } else {
      saudacao = 'Boa noite';
  }

  document.getElementById('saudacao').innerText = saudacao + ", Bem Vindo!";
}