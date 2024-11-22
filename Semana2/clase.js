function enviarForm(e){
    e.preventDefault();
    let nombre = document.getElementById("inputNombre").value;
    let Peso = document.getElementById("inputPeso").value;
    
    alert(
        `Información Enviada
        Nombre: ${nombre},
        Peso: ${peso}`
    );  
}