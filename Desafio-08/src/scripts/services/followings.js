import { baseUrl } from "/src/scripts/golbalVariables.js"


async function getFollowing(userName){
    const response = await fetch(`${baseUrl}/${userName}/following`)
    const Followings =  await response.json()
    const numberFollowings = Followings.length
    return numberFollowings
}

export {getFollowing}