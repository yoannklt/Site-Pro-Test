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

export const signUp = async (data) => {
    const response = await fetch(
        'http://localhost:4444/user/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'first_name':data.first_name,
                'last_name':data.last_name,
                'email':data.email,
                'password':data.password
            })
        }
    )
    const useradd = await response.json()
    return useradd;
}

export const deleteUser = async(data) => {
    const response = await fetch(
        'http://localhost:4444/user/delete', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'first_name':data.first_name
            })
        }
    )
}