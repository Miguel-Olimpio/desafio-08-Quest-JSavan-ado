import { baseUrl } from "/src/scripts/golbalVariables.js"

async function getEvents(userName){
        
    const response = await fetch(`${baseUrl}/${userName}/events`)

    const events =  await response.json()
    
    return await events
    }
    
export {getEvents}

