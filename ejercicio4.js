/*1. Un cliente puede reservar cualquier tipo de habitación: individual, doble y familiar.
2. Las habitaciones pueden ser para fumadores o no fumadores.
3. Las mascotas solo se aceptan en habitaciones familiares.
4. El hotel cuenta con 3 habitaciones de cada tipo.
5. No se puede exceder el número de personas por habitación: individual 2 personas, 4 personas para
doble y 6 personas para familiar.

6. El hotel necesita una estadística de las reservas: nombre de quien reserva, país de origen, número de
personas, el periodo de la estadía, numero de personas que están ocupando el hotel y si el huésped trajo
mascota.*/


const reservas = [];
let i = 1;
while(i != 0){

    let nombre = prompt("Ingrese su nombre");
let pais = prompt("Ingrese su pais de origen");
let personas = parseInt(prompt("Ingrese la cantidad de personas"))
let periodoDeEstadia =prompt("ingrese su periodo de estadia")
if(personas<=2){
    tipohab="individual";   
}else if(personas <=4){
    tipohab="doble";    
}else{
    tipohab="familiar"
}
if(tipohab==="familiar"){
    let animal = prompt("desea ingresar animal (si/no)");
    let animalB = animal=="si" ? True : false;
}

reservas.push({
    nombre:nombre,
    pais:pais,
    personas:personas,
    periodoDeEstadia:periodoDeEstadia,

})

alert( "Bienvenido "+reservas[0].nombre)

    i=parseInt(prompt("1. continuar,  0.Terminar"));
}

