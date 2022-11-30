// Faça um programa com Menu que execute as seguintes funções:

/*
    Digite a opção desejada:

    1 - Cadastrar item
    2 - Remover item cadastrado
    3 - Ver itens cadastrados
    4 - Sair do programa
*/

// Se não houver itens cadastrados mostrar mensagem de erro.
// Se houver item já cadastrado mostrar mensagem já cadastrado.

let itens = []
let menuOption

while (menuOption != 4) {
    menuOption = Number(prompt(`
        Digite a opção desejada:

        1 - Cadastrar item
        2 - Remover item cadastrado
        3 - Ver itens cadastrados
        4 - Sair do programa
    `))

    switch (menuOption) {
        case 1: let addItem = prompt('Digite o nome do item para adicionar:')
                if (itens.indexOf(addItem) == -1) {
                    itens.push(addItem)
                }
                else {
                    alert('Item já cadastrado!')
                }
                break

        case 2: if (itens.length == 0) {
                    alert('Lista vazia!')
                }
                else if (itens.length == 1){
                    alert(`Item "${itens[0]}" foi removido com sucesso!`)
                    itens.pop()
                }
                else {
                    let removeItem = prompt('Digite o nome do item para remover:')

                    if (itens.indexOf(removeItem) == -1) {
                        alert('Item não encontrado!')
                    }
                    else {
                        itens.splice(itens.indexOf(removeItem), 1)

                        alert(`Item "${removeItem}" foi removido com sucesso!`)
                    }
                }
                break

        case 3: if (itens.length == 0) {
                    alert('Lista vazia!')
                } else {
                    alert(itens.join('-'))
                }
                break

        case 4: alert('Programa encerrado!')
                break

        default: alert('Opção Inválida!')
    }
}