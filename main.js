// EX - il compleanno dello Chef
async function getChefBirthday(id) {
    try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`)
        const recipe = await response.json()
        const secondResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
        const user = await secondResponse.json()
        return user.birthDate
    } catch (error) {
        throw new Error(`Errore interno alla funzione: ${error.message}`)
    }
}

getChefBirthday(1)
    .then(birthdate => console.log(`Data di nascita dello chef: ${birthdate}`))
    .catch(error => console.error(error))