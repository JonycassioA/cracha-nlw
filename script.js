/*function showMeSomething(id){
          alert("amigo estou aqui " + id)
        }*/

const linksSocialMidia = {
  github: 'JonycassioA',
  youtube: 'Jhomym310',
  facebook: 'jonycassio',
  instagram: 'jonycassio_almondes',
  twitter: 'jonycassio'
}

function changeSocialMediaLinks() {
  //document.getElementById('nome').textContent = "JOTA_JOTA"
  //nome.textContent = "Jonycassio"

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`

  //A função fetch() recebe o que o link retornar
  fetch(url)
    .then(response => response.json())
    .then(data => {
      nome.textContent = data.name
      imagem.src = data.avatar_url
      nickname.href = data.html_url
      descricao.textContent = data.bio
      login.textContent = data.login
    })
}

getGitHubProfileInfos()
