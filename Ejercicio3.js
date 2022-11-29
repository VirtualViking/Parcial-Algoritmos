// Construya un algoritmo con JavaScript” para las estadísticas de atención
// de una universidad teniendo en cuenta los siguientes requisitos:
// 1. Hay dos módulos de atención: terminal para llamada telefónica y
// oficina.
// 2. El sistema brinda las estadísticas de todo el proceso de atención:
// • Cantidad de usuarios atendidos.
// • Atendidos por día y especificación por segmento (Estudiante –
// docente) en cada uno de los módulos de atención.
// • Se permite trasferir de modulo de atención y se debe generar
// estadística de esta trasferencia.

let isActive = true;
let funcionalidad;
let contadorUsuarios = 0;

let contadorDeTranseferencias = 0;

let atenciones = [];

const filtro= (condicion1, condicion2)=>{
    return atenciones.filter(object => object.tipoUsuario === condicion1 && object.moduloAtencion==condicion2)
    .length;
}



while(isActive){                   

    funcionalidad = prompt("Ingrese lo que quiere hacer " + "\n"+
    "1.Atender un usuario." + "\n"+
    "2. Consultas de estadisticas" + "\n"+
    "3. Transferir de modulo de atención" + "\n"+
    "4. Estadisticas de transferencias " + "\n"+
    "5. Salir del sistema");

    switch(funcionalidad){
        case  "1":
            let option = prompt("Ingrese el modulo de atención: 1.LlamadaTelefonica // 2.Cubiculo");
            let tipo = prompt("Ingrese el tipo de usuario: 1.clientebancolombia // 2.clienteOtrosBancos");
            let name = prompt("Ingrese el nombre de la persona");
            const consulta ={
                moduloAtencion : option == "1" ? "LlamadaTelefonica" : "cubiculo",
                tipoUsuario : tipo == "1" ? "clienteBancolombia" : "clienteOtrosBancos",
                nombreUsuario : name
            }
            atenciones.push(consulta);
            contadorUsuarios++
            break;
        case "2":
            alert("Usuarios totales atendidos: "+ contadorUsuarios);

            let clientesBancolombiaConsultaLlamada = filtro("clientesBancolombia", "LlamadaTelefonica")

            alert("clientesBancolombia atendidos y de consulta llamadaTelefonica: "+ clientesConsultaLlamadaTelefonica);

            let clientesBancolombiaConsultaCubiculo = filtro("clientesBancolombia","Cubiculo");
            
            alert("clientesBancolombia atendidos y de consulta cubiculo: "+ clientesBancolombiaConsultaCubiculo);

            let clienteOtrosBancosConsultaLlamadaTelefonica = filtro("clientesOtrosBancos","LlamadaTelefonica");

            alert("clientesOtrosBancos atendidos de modulo llamadaTelefonica: "+ clienteOtrosBancosConsultaLlamadaTelefonica);

            let clienteOtrosBancosConsultaCubiculo = filtro("clienteOtrosBancos","Cubiculo");

            alert("clienteOtrosBancos atendidos de modulo cubiculo: "+ clientesOtrosBancosConsultacubiculo);
            break;    
        case "3":
            let username = prompt("Ingrese el nombre  del usuario");
            let moduloAtencionDeseado = prompt("Ingrese el modulo de atencion al que va a cambiar 1.LlamadaTelefonica // 2.Cubiculo");
            let consultaEncontrada = atenciones.find(consulta=>consulta.nombreUsuario === username);

            if(consultaEncontrada){

                consultaEncontrada.moduloAtencion= moduloAtencionDeseado == "1"? "LlamadaTelefonica" : "Cubiculo";
                contadorDeTranseferencias++;

            }else alert("No se encontro ningun usuario con ese nombre");
            break;

        case "4":
            alert("Se han transferido "+ contadorDeTranseferencias);
            break;

        case "5":
            isActive=false;
            break;
    }
    
}

