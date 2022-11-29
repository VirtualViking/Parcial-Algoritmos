
let menu = true;
let i = 0;
let letter = "";
while(menu == true){
    i++;
    id = prompt("Digite el numero de cedula");
    clientes = prompt("Digite 1 si es cliente de la cooperativa, Digite 2 si es cliente externo");
    atencion = prompt("Digite A si desea pagos, Digite B si desea una asesoria");

    if (clientes ==1)
    letter = "c";
else if(clientes ==2){
    letter = "E";
}

alert("Señor con la cedula{id}su turno asignado es ${letter}${id}M${i}dirijase al modulo que aparece despues de la M cuando lo llamen");
menu = confirm("Desea volver al menu inicial?") ? true : false;

}
function x(atencion){
    let mensaje = atencion;
    return mensaje;
}
let mensaje = x(atencion);
console.log(mensaje);