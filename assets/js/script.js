//SELECIONANDO A LISTA
const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes")

//ADICIONANDO ESCUTAR
listaOpcoes.addEventListener("click", identificarOpcoes)

//EXECUTANDO AÇÃO DEPOIS DO CLIQUE
function identificarOpcoes(event){

    //IDENTIFICANDO ONDE OCORREU O CLIQUE
    const li =  event.target

    //VERIFICANDO SE É UM LI
    if (li.tagName == "LI"){

        //RECUPERANDO O ID
        const id = li.id

        //SELECIONANDO UMA SEÇAO UTILIZANDO O ID ESCOLHA DO USUARIO
        const secaoEscolha = document.querySelector(`section [data-id="${id}"]`)

        //REMOVENDO CLASSE MOSTRAR
        removeClasseMostrar()

        //ADICIONAR UMA CLASSE
        secaoEscolha.classList.add("mostrar")

    }
    
}

function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container section")

    for( let i = 0; i< divs.length; i++){
        divs[i].classList.remove("mostrar")
    }
}