# pf-petcare-server


# Dejar corriendo el escuchador del boton
modificar en feederButton-daemon.js la linea que dice
var commandToExecForFeed = "echo hola";
remplazando echo hola, por el commando a ejecutar por consola
node feederButton-daemon.js &
