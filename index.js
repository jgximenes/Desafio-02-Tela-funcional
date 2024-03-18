// Mascara CEP

function mascara(i,t){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }

    if(t == "cep"){
       i.setAttribute("maxlength", "9");
       if (v.length == 5) i.value += "-";
}}

// Get CEP

async function adicionarCep(){
   const cep = document.getElementById('cep').value;
   try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      document.getElementById('logradouro').value = data.uf;
      document.getElementById('bairro').value = data.bairro;
      document.getElementById('localidade').value = data.localidade;
      console.log(data)
   }  catch(error) {
      alert('Adicione um CEP válido.')
}}

// Get previsao

async function previsao(){
   const lat = document.getElementById('latitude').value;
   const lon = document.getElementById('longitude').value;
      try {
         const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`);
         const data = await response.json();
         console.log(data)
         document.getElementById('respostaPrevisao').value = `Previsão de tempo de acordo com a região: ${parseInt(data.hourly.temperature_2m[0])}° C`
      }  catch(error) {
         alert('Adicione uma latitude e longitude válidas.')
      }}
