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
                'password':data.password,
                'admin': false,
            })
        }
    )
    const user = await response.json()
    return user;
}

export const DeleteUser = async (data) => {
    const response = await fetch(
        'http://localhost:4444/user/delete',{
            method:'DELETE',
            headers: {  
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                'first_name':data.first_name,
                'last_name':data.last_name,
                'email':data.email,
                'password':data.types
            })
        }
    )
    const user = await response.json()
    return user
}

export const updateUser = async (first_name, updatedVersion) => {
    console.log(first_name);
    const response = await fetch(
        'http://localhost:4444/user/update?name='+first_name, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'first_name':updatedVersion.first_name,
                'last_name':updatedVersion.last_name,
                'email':updatedVersion.email,
                'password':updatedVersion.password
            })
        }
    )
    const userUpdate = await response.json()
    return userUpdate;
}