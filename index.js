// Función para generar un calendario
function generarCalendario(mes) {
    let dias = 31;
   
    if (mes === 'Febrero') {
      dias = 28;
    } else if (mes === 'Abril' || mes === 'Junio' || mes === 'Septiembre' || mes === 'Noviembre') {
      dias = 30;
    }
   
    console.log("Calendario para " + mes + ":");
    for (let i = 1; i <= dias; i++) {
      console.log(i);
    }
   }
   
   // Array de meses
   let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
   
   // Loop para generar el calendario para cada mes
   for (let i = 0; i < meses.length; i++) {
    generarCalendario(meses[i]);
   }
   