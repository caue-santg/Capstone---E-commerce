//REFERENCIANDO HTML
const ListaProdutos = document.querySelector("ul")

//FUNCAO PERCORRER LISTA PRODUTOS
function listarPodutos (listaProduto){

  for (let i = 0; i < listaProduto.length; i++){

    const products = listaProduto[i]

    const cardProduto = CriarCardProdutos(products)

    ListaProdutos.appendChild(cardProduto)
  }

}
listarPodutos(data)


//FUNCAO CRIAR CARDPRODUTOS
function CriarCardProdutos (Produto){

//PEGAR INFOMAÇOES
const id            = Produto.id    
const img           = Produto.img
const nome          = Produto.nameItem
const descricao     = Produto.description
const valor         = Produto.value
const adcCard       = Produto.addCart
const tag           = Produto.tag

//CRIAR ELEMENTOS CARD
const tagLi               = document.createElement("li")
const tagFigure           = document.createElement("figure")
const tagImage            = document.createElement("img")
const tagContainerCard    = document.createElement("div")
const tagBtnTipoProduto   = document.createElement("button")
const tagNomeProduto      = document.createElement("p")
const tagDescricaoProduto = document.createElement("p")
const tagPreco            = document.createElement("p")
const tagAdcCarrinho      = document.createElement("button")

// ALIMENTAR ELEMENTOS CARD
tagLi.classList.add("cardProduto")
tagImage.src = `./img/${img}`
tagImage.alt = nome
tagContainerCard.classList.add("containercard")
tagBtnTipoProduto.classList.add("tipoProduto")
tagBtnTipoProduto.innerText = tag
tagNomeProduto.classList.add("nomeProduto")
tagNomeProduto.innerText = nome
tagDescricaoProduto.classList.add("descricaoProduto")
tagDescricaoProduto.innerText = descricao
tagPreco.classList.add("preco")
tagPreco.innerText = `R$${valor},00`
tagAdcCarrinho.classList.add("adcCarrinho")
tagAdcCarrinho.innerText = adcCard

//ADC ELEMENTOS A ARVORE
tagFigure.appendChild(tagImage)
tagLi.appendChild(tagFigure)
tagContainerCard.appendChild(tagBtnTipoProduto)
tagContainerCard.appendChild(tagNomeProduto)
tagContainerCard.appendChild(tagDescricaoProduto)
tagContainerCard.appendChild(tagPreco)
tagContainerCard.appendChild(tagAdcCarrinho)
tagLi.appendChild(tagContainerCard)


//RETORNAR CARD MONTADO
return tagLi
}







