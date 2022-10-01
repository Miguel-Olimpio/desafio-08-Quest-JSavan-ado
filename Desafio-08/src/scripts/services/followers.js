import { baseUrl } from "/src/scripts/golbalVariables.js"


async function getFollowers(userName){
    const response = await fetch(`${baseUrl}/${userName}/followers`)
    const Followers =  await response.json()
    const numberFollowers = Followers.length
    return numberFollowers
}

export {getFollowers}