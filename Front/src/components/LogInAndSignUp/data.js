import React from "React"

const data =()=>{
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                email: "",
                password: ""
            }
        })
    });
    return(
        <>
             

        </>
    )
}