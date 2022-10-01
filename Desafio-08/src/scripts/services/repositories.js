import { baseUrl, maxQuantity } from "/src/scripts/golbalVariables.js"

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${maxQuantity}`)
    return await response.json()
}
export{getRepositories}