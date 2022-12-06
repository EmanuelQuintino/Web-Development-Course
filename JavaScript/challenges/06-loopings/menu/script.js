// Faça um Menu com as seguintes opções:
/*
    Digite a opção desejada:

    1 - Cadastrar item
    2 - Remover item cadastrado
    3 - Ver itens cadastrados
    4 - Sair do programa
*/

// Fazer alerta de item cadastrado caso o mesmo já esteja cadastrado
// Se não houver itens cadastrados mostrar mensagem de alerta nas opções
// Mostrar mensagem de sucesso junto do nome ao cadastrar ou remover ítem
// O programa também deve ser encerrado em caso do usuário não digitar valor.

const itens = []

while (true) {
    menuOption = Number(prompt(`
        Digite a opção desejada:

        1 - Cadastrar item
        2 - Remover item cadastrado
        3 - Ver itens cadastrados
        4 - Sair do programa
    `))

    if (menuOption == 0 || menuOption == 4) {
        alert("Programa encerrado!")
        break;
    } else {
        switch (menuOption) {
            case 1:
                let addItem = prompt('Digite o nome do item para adicionar: ')
                if (itens.indexOf(addItem) == -1) {
                    alert(`"${addItem}" cadastrado com sucesso!`)
                    itens.push(addItem)
                }
                else {
                    alert('Item já cadastrado!')
                }
                break;

            case 2:
                if (itens.length == 0) {
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
                break;

            case 3:
                if (itens.length == 0) {
                    alert('Lista vazia!')
                } else {
                    alert(itens.join('-'))
                }
                break;

            default: alert('Opção Inválida!')
        }
    }
}