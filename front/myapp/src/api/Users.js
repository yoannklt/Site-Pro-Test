export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/user/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const user = await response.json()
    return user
}