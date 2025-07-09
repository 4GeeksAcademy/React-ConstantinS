export const Cards = (props) => {
    const {ImageGame, ImageName, ImageDescription} = props
    return (


        <div className="card col-md-4" style={{width: "100%",maxWidth:"300px", height:"450px"}}>
            <img src={ImageGame} className="card-img-top" style={{width:"100%",height: "300px", objectFit:"cover"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ImageName}</h5>
                <p className="card-text">{ImageDescription}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>


    )
}