const criarls=(jogos)=>localStorage.setItem("jogos",JSON.stringify(jogos))
const pegarls=()=>JSON.parse(localStorage.getItem("jogos"))??[]
const lerlista=()=>pegarls()
function indexatual(){return JSON.parse(localStorage.getItem("jogos")).length};

const novalinha = (usuario) => {
    const novalinha=document.createElement("tr")
    novalinha.innerHTML=`
    <td>${usuario.index}</td>
    <td>${usuario.nome}</td>
    <td>${usuario.idade}</td>
    <td>${usuario.formacao}</td>
    <td>${usuario.genero}</td>
    `;
    document.querySelector("#tabela>tbody").appendChild(novalinha)
}

const apagatabela=()=>{
    const linhas=document.querySelectorAll("#tabela>tbody tr")
    linhas.forEach(linha=>linha.parentNode.removeChild(linha))
}

function atualiza(){
    const jogos=lerlista();
    apagatabela();
    jogos.forEach(novalinha);
}

function criarusuario(){
    var indexTemp;
    if(pegarls()[0] != null){
        indexTemp = pegarls()[indexatual() - 1].index + 1;
    }else{
        indexTemp = 0;
    }
    var usuario = {
        index: indexTemp,
        nome: document.querySelector("#nome").value,
        idade: document.querySelector("#idade").value,
        formacao: document.querySelector("#formacao").value,
        genero: document.querySelector("#genero").value
    }
        const lista = pegarls()
        lista.push(usuario)
        criarls(lista)
}

function excluir(){
    var index = document.querySelector("#index").value
    if(index => 0 &&  index < pegarls().length){
        var usuario = lerlista()
        usuario.splice(index,1)
        criarls(usuario)
    }
    else{
        alert("Index inválido!!!!")
    }
}

function editar(){
    var indexa =document.querySelector("#index").value
    var indexTemp;
    if(pegarls()[0] != null){
        indexTemp = pegarls()[indexatual() - 1].index + 1;
    }else{
        indexTemp = 0;
    } 
    var usuario = {
        index: indexTemp,
        nome: document.querySelector("#nome").value,
        idade: document.querySelector("#idade").value,
        formacao: document.querySelector("#formacao").value,
        genero: document.querySelector("#genero").value
    }
    if(indexa => 0 &&  indexa < pegarls().length){
        const lista = lerlista()
        lista[indexa]=usuario
        criarls(lista)
    }
    else{
        alert("Index inválido!!!!")
    }
}
setInterval(atualiza,10)