const comandosGit = ["git init", "git add"," git status", "git clone", "git commit"]
const descricaoGit = ["Inicializa um novo repositório Git vazio no diretório atual", "Adiciona as alterações dos arquivos especificados", "Exibe o estado do seu diretório de trabalho e da área de staging", "Cria uma cópia local de um repositório remoto", "Salva as alterações da área de staging no histórico do repositório local"]

const comandosDocker = ["docker run", "docker start"]
const descricaoDocker = ["Cria um container", "Inicia o container"]

function gitCMD() {
    tituloComandos.innerHTML = "Lista de comandos git"
    exemploCMD.style.display = 'none'
    exenploDescricao.style.display = 'none'
    for (let i = 0; i < comandosGit.length; i++) {
        var showGit = `<p>${descricaoGit[i]}</p>
        <pre><code>${comandosGit[i]}</code></pre>`
        conteudo.innerHTML += showGit
    }
}
function dockerCMD() {
    tituloComandos.innerHTML = "Lista de comandos docker"
    exemploCMD.style.display = 'none'
    exenploDescricao.style.display = 'none'
    var showDocker = `<p>${descricaoDocker}</p>
        <pre><code id="git-cmd-2">${comandosDocker}</code></pre>`
    conteudo.innerHTML += showDocker
}