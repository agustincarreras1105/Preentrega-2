    /* simulador logueo en app cuenta bancaria. */
    
    
    let user = null
    let userdni = null
    let pass = null

    let login = false
    let registrado = false
    let bloqueado = false
    let intentos = 0
    
    do{
        let op = prompt("Bienvenido a AppHomeBanking.\nDesea: \n1.Registrarse \n2.Loguearse");
        console.log("numero ingresado " + op)

        switch(op){
            case "1":
                /*ingreso|recopilacion de datos*/
                user = prompt("ingrese el nombre del usurio.")
                userdni= prompt("ingrese su DNI (Documento Nacional de Identidad).")
                pass = prompt("Ingrese su contraseña.(numerica unicamente 4 digitos)")

                registrado = true;

                /*control del registro correcto PARA CORROBORAR  YO*/
                console.log("usuario registrado.\n" + 
                "usuario: " + user +"\n" + 
                "DNI: " + userdni +"\n" + 
                "Contraseña: " + pass +"\n"
                )
                break;
            case "2":
                //LOGUEO
                //CONTROL DE REGISTRO
                if(registrado === false){
                    alert("debe registrarse primero");
                    break;
                } //PROCESO LOGUEO
                    else {let loguser = prompt("Ingrese su usuario.");
                    if (loguser === user){
                    intentos = 0;
                        while(intentos <3 && login === false){
                        let logpass = prompt("ingrese su contraseña");
                            if(logpass === pass){
                             alert("Acceso correcto")
                            login = true;
                            } else {
                            intentos++;
                                
                            //CONTROL DE INTENTOS
                            if(intentos <3 ){
                            alert("contraseña incorrecta.\n"+
                            "intentos restantes: " + (3-intentos)
                            );
                            }else{
                                alert("cuenta bloqueada. Supero los 3 intentos.")
                                bloqueado = true
                            }    
                            }
                        }
                    } else {
                        alert("acceso denegado, revise su usuario.")
                    }
                break;
            }
            default:
                alert("opcion no valida.");
            break;
        };    
    }while(login === false && bloqueado === false);





