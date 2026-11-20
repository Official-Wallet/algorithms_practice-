// NUMBER 1


function switchChar(inputChar, actualChar, changeChar){

    if(actualChar.length === changeChar.length){

        let string_F_checking = "";

        let isContainDuplicate = false;

        for(let i = 0; i < actualChar.length; i++){


            for(let inner = (i + 1); inner < actualChar.length; inner++){

                if(actualChar[i] === actualChar[inner]){

                    isContainDuplicate = true;

                    break;

                } else {

                    continue;

                }

            }

        }

        if(isContainDuplicate){

            return "Repeated Value";

        } else{

            if(inputChar.length <= actualChar.length){

                let isToProceed = true;

                for(let i = 0; i < inputChar.length; i++){

                    if(actualChar.includes(inputChar[i])){

                        continue;

                    } else {

                        isToProceed = false;

                        break;

                    }

                }

                if(isToProceed){

                    let newString = "";

                    for(let i = 0; i < inputChar.length; i++){

                        for(let inn = 0; inn < actualChar.length; inn++){

                            if(actualChar[inn] === inputChar[i]){

                                newString += changeChar[inn];

                            }

                        }

                    }

                    return newString;

                } else {

                    return "-1"

                }

            } else {

                return "-1";

            }

        }


    } else {

        return "Length Mismatch";

    }

}

console.log(switchChar("cade", "abcdefgh", "grdwqsdr"));












// NUMBER 2



function stringConversion(wrd){

    let newString = "";

    let tempString = "";

    for(let i = 0; i < wrd.length; i++){

        if(wrd[i] === "-" || wrd[i] === "_"){

            tempString += wrd[i + 1];

            newString += tempString.toUpperCase();

            tempString = "";

            i += 1;

        } else {

            newString += wrd[i];

        }

    }


    return newString;

}

console.log(stringConversion("The_Stealth_Warrior"));











// NUMBER 3


function isArmstrong(int){

    let value = String(int);

    let main_int = 0;

    for(let i = 0; i < value.length; i++){

        main_int += Number(value[i]) ** value.length;

    }

    return main_int === int;

}

console.log(isArmstrong(153));