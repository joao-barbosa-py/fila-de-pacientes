let patient = []
let menu = ""

//alert(patient_list)
do{   
    let patient_list = ""
    for(let i = 0; i < patient.length  ;i++){
        let name = patient[i]
        patient_list += (`${i + 1}: ${name}\n`)
        }
    
    menu = prompt(`Lista de pacientes:\n${patient_list}\n\nEscolha a ação que delista de pacienteseja realizar:\n1- Adicionar novo paciente\n2- Consultar paciente\n3-Sair`)

    switch(menu){
        case "1":
            new_patient = prompt("Informe o nome do paciente: ")
            patient.push(new_patient)
            break
        case "2":
            let consulted_patient = patient.shift()
            if(consulted_patient){
                alert(`O paciente ${consulted_patient}, Já foi cosultado! Próximo`)
            }else{
                alert(`Não Há pacientes na fila!`)
            }
            
            break
        case "3":
            alert("Saindo...")
        default:
            alert("Escolha uma opção válida")
    }

}while(menu != "3")