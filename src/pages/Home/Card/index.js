




const Card = () =>{

    return(
        <>
            <div className="grid-4 hidden card p-0">
                <div className="thumb hidden">
                    <a href="" className="p-0">
                        <img src="img/01.png" alt="" />
                    </a>
                </div>
                <div className="mt-2 px-2">
                    <h6 className="color-gray">01 Nov 2024</h6>
                    <h6 className="color-primary uppercase">Tecnologia</h6>

                    <h4>O que esperar do cinema em 2024?</h4>
                    <p className="mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit!</p>

                    <div className="my-3">
                        <a href="" className="color-primary ">Ler mais</a>
                    </div>
                 
                </div>
            </div>
        </>
    )
}


export default Card;