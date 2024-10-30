
import logo from 'svg/blog-logo2.svg'


const Footer = () =>{
    return(

        <>
           <footer className="bg-section bt-black ">
        <section className="container 0">
            <div className="row flex-center">
                <img src={logo} className="icon-l" alt="" />
            </div>


            <div className="row pb-3 bb-black">
                <div className="grid-3">
                    <h3>Posts</h3>
                    <div className="flex-start-column mt-3">
                        <a href="" className="color-gray ">Mais vistos</a>
                        <a href="" className="color-gray ">Mais comentados</a>
                        <a href="" className="color-gray ">Mais Populares</a>
                        <a href="" className="color-gray link-footer">Mais Recentes</a>
                    </div>
                    
                </div>
                <div className="grid-3">
                    <h3>Categorias</h3>
                    <div className="flex-start-column mt-3">
                        <a href="" className="color-gray ">Tecnologia</a>
                        <a href="" className="color-gray ">Games</a>
                        <a href="" className="color-gray ">Fotografia</a>
                        <a href="" className="color-gray ">Cinema</a>
                        <a href="" className="color-gray ">Entreterimento</a>
                        <a href="" className="color-gray ">Moda</a>
                    </div>
                    
                </div>
                <div className="grid-6">
                    <h3>Quer ser avisado dos novos posts do blog? </h3>
                  
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ornare urna pharetra ut ac, pellentesque.
                    </p>

                    <div className="flex-start-row mt-2"> 
                        <input type="text" name="search" id="" placeholder="Digite seu email aqui" />
                        <button className="btn ml-2">Cadastrar</button>
                    </div>
                </div>
                

            </div>

            <div className="row">
                <div className="grid-9">
                    <p>2024 | Todos os direitos reservados.</p>
                </div>

                <div className="grid-3">
                    <img src="svg/icon-facebook.svg" className="icon-s" alt="" />
                    <img src="svg/icon-instagram.svg" className="icon-s ml-2" alt=""/>
                    <img src="svg/icon-youtube.svg" className="icon-s ml-2" alt=""/>
                    <img src="svg/icon-twitter.svg" className="icon-s ml-2" alt=""/>
                </div>
            </div>
        </section>
    </footer>

        </>
    )
}


export default Footer;