import fetch from 'node-fetch'

export default class RegisterUserService {
    constructor() {}
    async register(user) {
        console.log(user)
        // Save the user details to Fauna
        let reg = await fetch(`/.netlify/functions/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        return await reg.json()
        // Register the user with NU_ID

        //
    }
}
