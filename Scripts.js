
const item = document.getElementById("item");
const number = document.getElementById("quantity");
const categoria = document.getElementById("Categoria");
const form = document.querySelector("form");
const listHtml = document.getElementById("list");
const bntRemove = document.querySelector(".icon-opcoes")
const dataAtual = new Date();

let listaDeCompras = []





form.addEventListener("submit", (event)=>{
    event.preventDefault()
    
    const novoItem = 
    {
        "id": Date.now(),
        "nomeItem": item.value,
        "quantityItem":number.value,
        "categoriaItem":categoria.value
        
    };
    

    listaDeCompras.push(novoItem);
    renderList();
    form.reset();

    
    
}) 


function renderList(){
    //Limpa a lista no HTML para não repetir itens antigos
    listHtml.innerHTML = "";

    listaDeCompras.forEach((value)=>{
         listHtml.innerHTML += `  
            <div class="item-list" id="item-list" data-id="${value.id}">
                <div class="name-item" id="name-item">
                    <form>
                        <input type="checkbox" id="check" name="check" value="check">
                    </form>
                    <div class="Descricao-item">
                        <h3>${value.nomeItem}</h3>
                        <label>${value.quantityItem} unidade</label>
                    </div><!--Descricao-item-->
                </div><!--name-item-->
                <div class="categoria-item">
                    <span class="spanCategoria">${value.categoriaItem}</span>
                    <div style="color:red; font-size:16px; cursor:pointer;" class="icon-opcoes" id="icon-opcoes">x</div>
                </div><!--categoria-item-->
            </div><!--item-list-->
            
            `
    })

}

//<img src="./assets/icon-opcoes.svg">

listHtml.addEventListener("click",(event)=>{

    

    // .closest() sobe até o container, .querySelector() desce até o h3
    const container = event.target.closest(".item-list");
    const textoH3 = container.querySelector("h3");
    const textLabelUnidade = container.querySelector("label")
    const textNameCategoria = container.querySelector("span")
    const idRemove = Number(container.dataset.id)
    

    if( event.target.type === "checkbox"){
        if(event.target.checked === true){
            textoH3.style.textDecoration = "line-through";
            textoH3.style.opacity = "0.5";
            textLabelUnidade.style.opacity = "0.2";
            textNameCategoria.style.opacity = "0.5";
            container.style.backgroundColor = "#111112";
           

            
        }else if(event.target.checked === false){
            textoH3.style.textDecoration = "none";
            textoH3.style.opacity = "1";
            textLabelUnidade.style.opacity = "1";
            textNameCategoria.style.opacity = "1";
            container.style.backgroundColor = "#252529";
        }
    };

    if(event.target.classList.contains("icon-opcoes")){
        listaDeCompras = listaDeCompras.filter(item => item.id !== idRemove)
        renderList();
    }
    

})







