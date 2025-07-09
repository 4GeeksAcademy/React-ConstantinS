export const Cards = (props) => {
    const {ImageGame, ImageName, ImageDescription} = props
    return (


        <div class="card" style={{width: "100%", height: "450px"}}>
            <img src={ImageGame} className="card-img-top" style={{width:"100%",height: "100%",maxWidth: "250px",maxHeight:"450px" , objectFit:"cover"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ImageName}</h5>
                <p className="card-text">{ImageDescription}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>


    )
}