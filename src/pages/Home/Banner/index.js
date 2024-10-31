
import { Link } from "react-router-dom";

const Banner = ({content}) =>{

    return(
        <>
        <section className="container">
            <div className="img-banner hidden">
                <img src={content.imageUrl} alt="" />
            </div>
            <div className="row mt-3">
                    <h6 className="color-gray text-center">{content.date}</h6>
                    <h6 className="color-primary text-center uppercase">{content.category}</h6>


                    <Link to={"/post/" + content.id} className="link-title">
                    <h2 className="text-center">{content.title}</h2>

                    </Link>
                    
                    <p className="mt-1 text-center">{content.resume}</p>

                    <div className="my-3 flex-center">
                            <a href="" className="color-primary ">Ler mais</a>
                    </div>
            </div>
        </section>
        </>
    )
}


export default Banner;