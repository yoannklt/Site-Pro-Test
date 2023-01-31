export const addBooking = async (date, begin, end, first_name, last_name,  price, phoneNumber, players, discover, code) => {
    const response = await fetch(
        'http://localhost:4444/booking/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'first_name':first_name,
                'last_name':last_name,
                'date': date,
                'begin': begin,
                'end': end,
                'price': price,
                'phoneNumber': phoneNumber,
                'players':players,
                'discover':discover,
                'code': code
            })
        }
    )
    const booking = await response.json()
    return booking;
}