export const Cards = (props) => {
    const { ImageGame, ImageName, ImageDescription } = props
    return (


        <div className="card col-md-4" style={{ background: "yellow", border: "2px solid #ADD8E6", width: "100%", maxWidth: "350px" }}>
            <img src={ImageGame} className="card-img-top img-fluid" style={{ borderBottom: "2px solid #ADD8E6", width: "100%", height: "300px", objectFit: "cover" }} alt="..." />

            <div className="container d-flex align-items-center justify-content-center mx-auto">
                <div className="card-body text-center">
                    <div className="card-body ">
                        <h5 className="card-title">{ImageName}</h5>
                        <p className="card-text">{ImageDescription}</p>
                        <a href="#" className="btn btn-primary">Descúbreme</a>
                    </div>
                </div>
            </div>
        </div>


    )
}