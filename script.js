//alternar entre modo claro e escuro
const temabtn = document.getElementById("temabtn");
let modoescuro=false;

temabtn.addEventListener("click", ()=>{
    modoescuro=!modoescuro;
    document.body.style.backgroundColor=modoescuro?"#1c1c1c":"#f0f8ff"
    document.body.style.color=modoescuro?"#f0f8ff":"#333";
    temabtn.textContent=modoescuro?"Modo Claro":"Modo Escuro";
});
//botão mostrar mais
const mostrarmaisbtn=document.getElementById("mostrarmaisbtn");
const extra=document.getElementById("extra");

mostrarmaisbtn.addEventListener("click", ()=>{
    if(extra.classList.contains("oculto")){
        extra.classList.remove("oculto");
        mostrarmaisbtn.textContent="Mostrar menos";
    }else{
        extra.classList.add("oculto");
        mostrarmaisbtn.textContent="Mostrar mais";
    }
});
//Adicionar novos projetos dinamicamente em memória
document.getElementById("adicionarbtn").addEventListener("click",function(){
    const nomeprojeto=document.getElementById("nomeprojeto").ariaValueMax;
    const descricaoprojeto=document.getElementById("descricaoprojeto").value;

    if (nomeprojeto && descricaoprojeto){
        const grid=document.querySelector(".projetos-grid");

        const novocard=document.createElement("div");
        novocard.className="projeto-card)"
        novocard.innerHTML=`
        <h3>${nomeprojeto}</h3>
        <p class="projeto-descricao">${descricaoprojeto}</p>
        <div class="projeto-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
        </div>
        <div class="projeto-links">
            <button class="btn-secundario>Ver demo</button>
            <button class="btn-secundario>Código</button>
        </div>
    `;

    grid.appendChild(novocard);
    //limpar inputs
    document.getElementById("nomeprojeto").value="";
    document.getElementById("descricaoprojeto").value="";
    }else{
        alert("por favor, preencha o nome e a descrição do projeto!");
    }
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
