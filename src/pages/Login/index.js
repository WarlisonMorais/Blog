// Headers and Footers

import Header from "pages/Header";
import Footer from "pages/Footer";

//images
import logo from 'svg/blog-logo2.svg'


const Login = () => {

    return (

        <>
                <Header/>
                <section className="container">
                    <div className="row">
                        <div className="grid-4 disappear">

                        </div>
                        <div className="grid-4">
                            <div className="flex-center">
                                <img src={logo} className="icon-l" alt="" />
                            </div>
                            <h5 className="text-center">Olá, faça o login para continuar</h5>


                            <form>
                                <input type="text" name="user" className="mt-3" placeholder="digite seu usuario"/>
                                <input type="password" name="password" className="mt-2" placeholder="digite sua senha"/>





                                <div className="card-danger p-2 my-1">
                                    <h6 className="h7 color-red">Olá, isso é uma mensagem de erro</h6>
                                </div>
                
                                <div className="card-success p-2 my-1">
                                    <h6 className="h7 color-green">Olá, isso é uma mensagem de erro</h6>
                                </div>
                
                                <div className="card-warning p-2 my-1">
                                    <h6 className="h7 color-yellow">Olá, isso é uma mensagem de erro</h6>
                                </div>
                
                                <div className="card-info p-2 my-1">
                                    <h6 className="h7 color-primary">Olá, isso é uma mensagem de erro</h6>
                                </div>
                
                                <button className="btn w-100 mt-4">Entrar</button>
                            </form>
                        </div>
                        <div className="grid-4 disappear">
                            
                        </div>
                    </div>
             </section>

                <Footer/>
        </>
    )
}



export default Login;