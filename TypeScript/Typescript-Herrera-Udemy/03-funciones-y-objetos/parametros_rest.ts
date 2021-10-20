
function nombreCompletoRest( nombre:string, ...losDemasParametros:string[]):string{
    return nombre + " " + losDemasParametros.join(" ");
}


let superman:string = nombreCompletoRest("Clark", "Joseph", "Kent");

let ironman:string = nombreCompletoRest("Anthony", "Edward", "Tony", "Stark");


console.log(superman);
console.log(ironman);
