import { getUser } from "/src/scripts/services/user.js"
import { getRepositories } from "/src/scripts/services/repositories.js"
import {user} from "/src/scripts/objects/users.js"
import {screen} from "/src/scripts/objects/screen.js"
import {getFollowers} from "/src/scripts/services/followers.js"
import {getFollowing} from "/src/scripts/services/followings.js"
import {getEvents} from "/src/scripts/services/events.js"

document.getElementById('btn-search').addEventListener('click',()=> {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName))return 
    getUserData(userName)

})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPress = key === 13
    
    if(isEnterKeyPress){
        if(validateEmptyInput(userName)) return 
        getUserData(userName)
    }
    
})
function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuario')
        return true
    }
}

async function getUserData(userName){
    
    const userResponse = await getUser(userName)
    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await getRepositories(userName)
    const followersResponse = await getFollowers(userName)
    const followingsResponse = await getFollowing(userName)
    const eventsResponse = await getEvents(userName)    
    user.setEvents(eventsResponse)
    user.setFollowers(followersResponse)
    user.setFollowings(followingsResponse)
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    screen.renderUser(user,userName)
}
let teste = 'https://api.github.com/users/devemdobro/events'
console.log(teste)
