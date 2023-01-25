export const getAllRoom = async () => {
    const response = await fetch(
        'http://localhost:4444/room/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const room = await response.json()
    return room
}

export const signUpRoom = async (data) => {
    const response = await fetch(
        'http://localhost:4444/room/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'nom':data.nom,
                'type':data.type,
                'description':data.description,
                'rules':data.rules
            })
        }
    )
    const roomadd = await response.json()
    return roomadd;
}