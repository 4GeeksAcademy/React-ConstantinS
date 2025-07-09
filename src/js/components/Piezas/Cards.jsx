export const Cards = () => {
    return (


        <div class="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{Name}</h5>
                <p className="card-text">{descrption}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>


    )
}