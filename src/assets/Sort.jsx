import React from 'react'

function Sort() {
let date1 = [{date:2020-1-5},{date:2020-1-5},{date:2020-1-5},{date:2020-1-5}]

    let sortedDates = date1.sort((a, b) => new Date(a.date) - new Date(b.date))
    return (
        <>
        <h1>{sortedDates}</h1>
        <h1>hello world</h1>
        </>
    )
    
}

export default Sort
