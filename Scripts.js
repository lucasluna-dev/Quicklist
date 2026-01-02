
const item = document.getElementById("item")
const number = document.getElementById("quantity")
const categoria = document.getElementById("Categoria")
const form = document.querySelector("form")

const listDeCompras = []
const dataAtual = new Date();



form.addEventListener("submit", (event)=>{
    event.preventDefault()
    
    const novoItem = 
    {
        "id": Date.now(),
        "nomeItem": item.value,
        "quantityItem":number.value,
        "categoriaItem":categoria.value
    };

    console.log(novoItem.id)
    
}) 

