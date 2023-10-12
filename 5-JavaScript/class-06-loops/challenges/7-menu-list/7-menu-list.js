// Faça um Menu com as seguintes opções:
/*
    Digite a opção desejada:

    1 - Cadastrar item
        - Poder cadastrar itens enquanto não cancelar
        - Alertar usuário para adicionar item caso não informe
        - Mostrar mensagem de sucesso junto do nome ao cadastrar
        - Fazer alerta de item cadastrado caso ele já esteja cadastrado

    2 - Ver itens cadastrados
        - Mostrar itens cadastrados
        - Alertar caso a lista esteja vazia

    3 - Remover item cadastrado
        - Alertar caso a lista esteja vazia
        - Poder remover itens pelo nome enquanto não cancelar
        - Remover item automaticamente caso só tenha um na lista
        - Mostrar mensagem de sucesso junto do nome ao remover
        - Alertar usuário caso o item informado não seja encontrado

    4 - Sair do programa
        - Sair do programa quando escolher a opção 4 ou cancelar
        - Se não escolher uma das opções do menu mostrar mensagem de alerta
*/

const listItens = [];

while (true) {
  const menuOption = prompt(`
    Digite a opção desejada:

    1 - Cadastrar item
    2 - Ver itens cadastrados
    3 - Remover item cadastrado
    4 - Sair do programa
    `);

  if (menuOption === "4" || menuOption === null) {
    break;
  }

  if (menuOption === "") {
    alert("Por favor escolha alguma das opções.");
    continue;
  }

  switch (menuOption) {
    case "1":
      while (true) {
        let addItem = prompt("Digite o nome do item para adicionar:");

        if (addItem === null) {
          break;
        }

        if (addItem === "") {
          alert("Digite o nome para cadastrar.");
          continue;
        }

        if (listItens.includes(addItem)) {
          alert("Item já cadastrado!");
        } else {
          listItens.push(addItem);
          alert(`"${addItem}" cadastrado com sucesso!`);
        }
      }
      break;

    case "2":
      if (listItens.length == 0) {
        alert("Lista vazia!");
      } else {
        alert(listItens.join("-"));
      }
      break;

    case "3":
      if (listItens.length == 1) {
        alert(`Item "${listItens[0]}" foi removido com sucesso!`);
        listItens.pop();
        break;
      }

      while (true) {
        if (listItens.length == 0) {
          alert("Lista vazia!");
          break;
        } else {
          let removeItem = prompt("Digite o nome do item para remover:");

          if (removeItem == null) {
            break;
          }

          if (removeItem == "") {
            alert("Por favor, insira o nome para remover.");
            continue;
          }

          if (listItens.includes(removeItem)) {
            listItens.splice(listItens.indexOf(removeItem), 1);
            alert(`"${removeItem}" foi removido com sucesso!`);
          } else {
            alert("Item não encontrado!");
          }
        }
      }
      break;
    default:
      alert("Opção Inválida!");
  }
}

alert("Programa encerrado!");
