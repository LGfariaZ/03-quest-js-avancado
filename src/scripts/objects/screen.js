const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user){
        this.userProfile.innerHTML = `<div class = "info">
                                            <img src="${user.avatarUrl}" alt= "Foto de perfil do usuário" />
                                            <div class = "data">
                                                <h1> ${user.name ?? 'Não possui nome cadastrado'}</h1>
                                                <p class = "bio"> ${user.bio ?? 'Não possui bio cadastrada'}</p>
                                                <p><span>${user.followers}</span> Seguidores</p>
                                                <p><span>${user.following}</span> Seguindo</p>
                                            </div>
                                      </div>`;
        
        let repositoriesItens = '';
        user.repositories.forEach(repository => repositoriesItens += `<li class = "repository-item">
                                                                          <a href = "${repository.url}" target = "_blank">${repository.name}
                                                                            <ul>
                                                                                <li>🍴${repository.forks}</li>
                                                                                <li>⭐️${repository.stars}</li>
                                                                                <li>👀${repository.watchers}</li>
                                                                                <li>#️⃣${repository.language}</li>
                                                                            </ul>
                                                                           </a>
                                                                     </li>`);

        if (user.repositories.length>0){
            this.userProfile.innerHTML += ` <div class= "repositories">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItens = '';
        user.events.forEach(event => eventsItens += `<tr><th>${event.name}</th><th>${event.message}</th></tr>`);

        if (user.events.length>0){
            this.userProfile.innerHTML += ` <div class= "events">
                                                <h2>Eventos</h2>
                                                <table>${eventsItens}</table>
                                            </div>`
        }

    },

    renderNotFound(){
        this.userProfile.innerHTML = `<h3> Usuário não encontrado </h3>`
    }
}

export{screen};