import {getVerificationEvents} from "/src/scripts/services/verificationEvents.js"
const screen = {
    userProfile: document.querySelector('.profile-data'),
    async renderUser(user,userName){

        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuario" />
                           <div class=""data>
                               <h1>${user.name ?? 'Não possui nome cadastrado 😢' }</h1>
                               <p>${user.bio ?? 'Não possui Bio cadastrada 😢' }</p>
                               <div class="social"> 
                                    <p> Seguidores: ${user.followersUrl}</p>
                                    <p> Seguindo: ${user.followingUrl}</p>
                                </div>
                            </div>
                       </div>`

        let repositoriesItens = ''
        
        user.repositories.forEach(repo => repositoriesItens += `<li> 
                            <a href="${repo.html_url}"target="_blank"> 
                                <p> ${repo.name} <p>
                                <div class="repoInfo">
                                    <p>🍴${repo.forks}</p>
                                    <p>⭐${repo.stargazers_count}</p>
                                    <p>👀${repo.watchers}</p>
                                    <p>👨‍💻${repo.language ?? '❌'}</p>
                                </div>
                            </a>                        
                            </li>
                            
                            `)
                            

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                            <h2>Repositorios</h2>
                            <ul>${repositoriesItens}</ul>
                            </div>
                            <div class="repoInfo">  
                            
                            </div>`
        }
        const verificationResponse = await getVerificationEvents(userName)
        let eventsItens = ''
        
        verificationResponse.forEach (events => {
            if(events.type === "PushEvent"){
                eventsItens += `<li> 
                        <h3>${events.repo.name}</h3>    
                        <p> -${events.payload.commits[0].message ?? 'Não commitado' }  <p>
                        </li>`
                    }else if(events.type === "CreateEvent"){
                        eventsItens += `<li> 
                        <h3>${events.repo.name}</h3>
                        <p> -${events.type} <p>
                        </li>`
                    }
            }
        )
    
        if(user.events.length > 0){
            
        this.userProfile.innerHTML += `<div class="events">
                            <h2> Eventos </h2>
                            <div class="infoEvents">
                            <ul> ${eventsItens} </ul>
                            </div>
                        </div>`
    }else{
        this.userProfile.innerHTML += `<div class="events">
        <h2> Não possui eventos </h2>
    </div>`
    }
    },
    renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuario não encontrado </h3>`
    }
}

export { screen }
//.type == "PushEvent" || CreateEvent