var menu = document.getElementById('menu')
var tituloComandos = document.getElementById('titulo-comandos')
var descriCMD_1 = document.getElementById('descri-cmd-1')
var gitCMD_1 = document.getElementById('git-cmd-1')
var conteudo = document.getElementById('conteudo')

function gitCMD() {
    var gitCMD_1 = `<h3 class="tituloComandos">Lista de comandos git</h3><p>Inicia o git</p>
        <pre><code>git init</code></pre>`
    conteudo.innerHTML = gitCMD_1
}
function dockerCMD() {
    var docker_1 = `<h3 class="tituloComandos">Lista de comandos docker</h3><p>Cria um container docker</p>
        <pre><code id="git-cmd-2">docker run</code></pre>`
    conteudo.innerHTML = docker_1
}
