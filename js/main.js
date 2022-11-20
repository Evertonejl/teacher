// arrays

// let idade = [10,30,40,50]
// console.log(idade)

// laços de repetição


// let idade = [10,30,40,50,80,79]
// for (let i = 0; i < 4; i++) {
//     console.log(idade[i])
// }
// console.log("termino do for")

 
// objetos

// let aluno = {
//     nome: "everton",
//     idade: 26,
//     notas: [10,8,9,7.3,8,7.5],
//     contato: {
//         telefone: "(47) 99999-9999",
//         email: "evertonejl132@gmail.com"
//     }
// }
// console.log(aluno)
// console.log(aluno.nome)
// console.log(aluno.notas[0])
// console.log(aluno.contato.email)
// console.log(aluno.idade)

// manipulando o DOM
// let elemento = document.getElementById("titulo")
// console.log(elemento)
// elemento.innerHTML = "alterado via js"


let teacherForms = document.getElementsByClassName("teacher-contract")
for (let teacherForm of teacherForms){
    teacherForm.addEventListener("submit", function(event){
        event.preventDefault()  // parâmentro para não atualizar a página quando clicar no submit.
        let price = teacherForm.price.value
        let hours = teacherForm.hours.value
        let total = price * hours

        alert("O valor total é de " + total + " R$ ")

    })
}