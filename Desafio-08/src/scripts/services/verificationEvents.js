import {getEvents} from "/src/scripts/services/events.js"
import {user} from "/src/scripts/objects/users.js"


async function getVerificationEvents(userName){

const eventsResponse = await getEvents(userName)
user.setEvents(eventsResponse)
let contador = []

for(let i=0 ; i < 11; i++){
    
    if(eventsResponse[i].type === 'PushEvent' || eventsResponse[i].type === 'CreateEvent'){
         contador.push ( eventsResponse[i])
    }}
    
    return contador
}

export {getVerificationEvents}