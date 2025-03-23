// EX - il compleanno dello Chef
// async function getChefBirthday(id) {
//     try {
//         const response = await fetch(`https://dummyjson.com/recipes/${id}`)
//         const recipe = await response.json()
//         const secondResponse = await fetch(`https://dummyjson123.com/users/${recipe.userId}`)
//         const chef = await secondResponse.json()
//         return chef.birthDate
//     } catch (error) {
//         throw new Error(`Errore interno alla funzione: ${error.message}`)
//     }
// }

// getChefBirthday(1)
//     .then(birthdate => console.log(`Data di nascita dello chef: ${birthdate}`))
//     .catch(error => console.error(error))

// (async () => {
//     try {
//         const result = await getChefBirthday(1)
//         console.log(`Data di nascita dello chef: ${result}`);
//     } catch (error) {
//         console.error(error)
//     }
// })();


// Bonus 1
// async function getChefBirthday(id) {

//     let recipe;
//     try {
//         const response = await fetch(`https://dummyjson.com/recipes/${id}`)
//         recipe = await response.json()
//         if (recipe.message) {
//             throw new Error(recipe.message)
//         }
//     } catch (error) {
//         throw new Error(`Errore durante il fetch della ricetta ${id}: ${error.message}`)
//     }

//     let chef
//     try {
//         const secondResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
//         chef = await secondResponse.json()
//         if (chef.message) {
//             throw new Error(chef.message)
//         }
//     } catch (error) {
//         throw new Error(`Errore durante il fetch dello chef ${recipe.userId}: ${error.message}`)
//     }

//     return chef.birthDate
// }

// getChefBirthday(1)
//     .then(birthdate => console.log(`Data di nascita dello chef: ${birthdate}`))
//     .catch(error => console.error(error))
//     .finally(() => console.log(`Fine dell'operazione`))

// (async () => {
//     try {
//         const result = await getChefBirthday(1)
//         console.log(`Data di nascita dello chef: ${result}`);
//     } catch (error) {
//         console.error(error)
//     }
// })();


// // Bonus 2
async function getChefBirthday(id) {

    let recipe;
    try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`)
        recipe = await response.json()
        if (recipe.message) {
            throw new Error(recipe.message)
        }
    } catch (error) {
        throw new Error(`Errore durante il fetch della ricetta ${id}: ${error.message}`)
    }

    let user
    try {
        const secondResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
        user = await secondResponse.json()
        if (user.message) {
            throw new Error(user.message)
        }
    } catch (error) {
        throw new Error(`Errore durante il fetch dell'user ${recipe.userId}: ${error.message}`)
    }

    return dayjs(user.birthDate).format('DD/MM/YYYY')
}

// getChefBirthday(1)
//     .then(birthdate => console.log(`Data di nascita dello chef: ${birthdate}`))
//     .catch(error => console.error(error))
//     .finally(() => console.log(`Fine dell'operazione`))

(async () => {
    try {
        const result = await getChefBirthday(1)
        console.log(`Data di nascita dello chef: ${result}`);
    } catch (error) {
        console.error(error)
    }
})();