// EX - il compleanno dello Chef
// async function getChefBirthday(id) {
//     try {
//         const response = await fetch(`https://dummyjson.com/recipes/${id}`)
//         const recipe = await response.json()
//         const secondResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
//         const user = await secondResponse.json()
//         return user.birthDate
//     } catch (error) {
//         throw new Error(`Errore interno alla funzione: ${error.message}`)
//     }
// }

// getChefBirthday(1)
//     .then(birthdate => console.log(`Data di nascita dello chef: ${birthdate}`))
//     .catch(error => console.error(error))


// Bonus 1
// async function getChefBirthday(id) {

//     let recipe;
//     try {
//         const response = await fetch(`https://dummyjson.com/recipes/${id}`)
//         recipe = await response.json()
//     } catch (error) {
//         throw new Error(`Errore durante il fetch della ricetta ${id}: ${error.message}`)
//     }

//     if (recipe.message) {
//         throw new Error(recipe.message)
//     }

//     let user
//     try {
//         const secondResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
//         user = await secondResponse.json()
//     } catch (error) {
//         throw new Error(`Errore durante il fetch dell'user ${recipe.userId}: ${error.message}`)
//     }

//     if (user.message) {
//         throw new Error(user.message)
//     }

//     return user.birthDate
// }

// getChefBirthday(1)
//     .then(birthdate => console.log(`Data di nascita dello chef: ${birthdate}`))
//     .catch(error => console.error(error))
//     .finally(() => console.log(`Fine dell'operazione`))


// Importa dayjs
const dayjs = require('dayjs');

// Bonus 2
async function getChefBirthday(id) {

    let recipe;
    try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`)
        recipe = await response.json()
    } catch (error) {
        throw new Error(`Errore durante il fetch della ricetta ${id}: ${error.message}`)
    }

    if (recipe.message) {
        throw new Error(recipe.message)
    }

    let user
    try {
        const secondResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
        user = await secondResponse.json()
    } catch (error) {
        throw new Error(`Errore durante il fetch dell'user ${recipe.userId}: ${error.message}`)
    }

    if (user.message) {
        throw new Error(user.message)
    }

    return dayjs(user.birthDate).format('DD/MM/YYYY')
}

getChefBirthday(1)
    .then(birthdate => console.log(`Data di nascita dello chef: ${birthdate}`))
    .catch(error => console.error(error))
    .finally(() => console.log(`Fine dell'operazione`))