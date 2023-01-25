export const getAllPage = async () => {
    const response = await fetch(
        'http://localhost:4444/page/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pages = await response.json()
    return pages
}

export const signUpPage = async (data) => {
    const response = await fetch(
        'http://localhost:4444/page/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'name':data.name,
                'title':data.title,
                'desc':data.desc,
                'rules':data.rules,
                'img': data.img
            })
        }
    )
    const pageAdd = await response.json()
    return pageAdd;
}