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

export const createRoom = async (data) => {
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
    const room = await response.json()
    return room;
}

export const DeleteRoom = async (data) => {
    const response = await fetch(
        'http://localhost:4444/room/delete',{
            method:'DELETE',
            headers: {  
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                'name':data.name,
                'type':data.type,
                'desc':data.desc,
                'rules':data.rules
            })
        }
    )
    const room = await response.json()
    return room
}