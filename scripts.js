// Variáveis - um pedacinho de memório do computador
//Funções - é um pedacinho de código que só executa quando é chamado. 
//console.log("") mostra algo que eu quero na tela
//JS - Toda vez que eu quero digitar um texto, "" ou ''

//document = html
//querySelector buscar alguém no HTML

//fetch - ferramenta para se comunicar com algo fora do código
/*
[x] Descobrir quando o botão foi clicado
[x] Pegar o que escrito no Input
[x] Enviar para o N8N
[x] Receber o que o N8N Respondeu
[x] Colocar na Tela o que ele respondeu*/


let webhook = "https://gabrielsaantos7.app.n8n.cloud/webhook/animacao-css"

//função assíncrona é a função que sai do código para ir em busca de algo
async function cliqueiNoBotao(){
    let textoInput = document.querySelector(".input-animacao").value
    let codigo = document.querySelector(".area-codigo")
    let areaResultado = document.querySelector(".area-resultado")

    let botao = document.querySelector(".botao-magica")

    botao.disabled = true;
    botao.textContent = "Criando..."
    botao.style.background = '#888888'

    //fetch - 1)O endereço 2)configurações 3) os dados
    //JSON - O formato de dados que usamos na internet

    let resposta = await fetch(webhook, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({pergunta: textoInput})
    })
    
    let resultado = await resposta.json()

    let info = JSON.parse(resultado.resposta)

    console.log(info)

    codigo.innerHTML = info.code
    areaResultado.innerHTML = info.preview

    document.head.insertAdjacentHTML('beforeend', "<style>" + info.style +"</style>")

    botao.disabled = false;
    botao.textContent = "Criar Mágica ✨"
    botao.style.background = '#37E359'
   
}

 //let button = document.querySelector(".botao-magica")
    //button.disabled = true;

    //ENVIAR PARA A IA