// Headers and Footers

import Header from "pages/Header";
import Footer from "pages/Footer";

//images

import logo from 'svg/blog.svg';



const About = () => {

    return (

        <>
            <Header/>

            <section class="container">
                    <div class="row ">
                        <div class="grid-6">
                            <h1 class="h0">Blog<span>.</span></h1>
                            <p class="mt-1">
                              O Blog é um projeto desenvolvido para treinar e aprender em React.js 
                              para ajudar na busca de vagas para vagas de Front End.
                            </p>
                            <a href="#" class="btn mt-4">Saber mais</a>
                        </div>
                        <div class="grid-6">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
            </section>

            <Footer/>
        </>
    )
}



export default About;