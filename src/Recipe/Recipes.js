import React, { useEffect } from 'react';
// import './restaurantlist.css';

function Myrecipelist() {

    // GET all myrestaurants
    useEffect(() => {
        fetch("/recipes")
        .then((r) => r.json())
        .then(res => console.log(res))
    })

    // Delete
    function handleDelete(id){
        fetch(`/recipes/${id}`, {
            method: "DELETE",
        }).then()
    }

    return(
        <div className="main">

            <div className="card">
            
            <button onClick={() => handleDelete()}>DELETE</button>

            </div>

        </div>
    )

}

export default Myrecipelist;