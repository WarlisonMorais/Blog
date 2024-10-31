// Headers and Footers

import Header from "pages/Header";
import Footer from "pages/Footer";

//images

import ImageProfile from 'img/profile/warlison.png';



const Profile = () => {

    return (

        <>
        
            <Header/>

            <section className="container">
                <div className="row">
                    <div className="grid-6">
                        <div className="flex-start-row">
                            <div className="profile-big">
                                <img src={ImageProfile} className="profile-img" alt=""/>
                            </div>
                            <div className="ml-3">
                                <h3>Warlison Morais</h3>
                                <h6 className="color-gray">@warlisonmorais_</h6>
                            </div>
                        
                        </div>
                        <p className="mt-3">Olá, seja bem vindo Warlison Morais</p>
                    </div>
                    <div className="grid-6 flex-center">
                        <a href="" className="btn">Meus Dados</a>
                        <a href="" className="btn ml-3">Adicionar post</a>
                    </div>
                </div>
            </section>







            <section className="container">
            <h3>Adicionar um novo post</h3>
            <p className="mt-1">Preencha os campos abaixo paa adicionar um novo post ao blog.</p>

            <form action="">
                <div className="row">
                    <div className="grid-3 p-0">
                        <label for="date"><h6>Data</h6></label>
                        <input type="date" name="date" className="mt-1" id="date"/>
                    </div>
                    <div className="grid-3 p-0">
                        <label for="category"><h6>Categoria</h6></label>
                        <select  name="category" className="mt-1" id="category">
                            <option value="tecnologia">Tecnologia</option>
                            <option value="cinema">Cinema</option>
                            <option value="games">Games</option>
                            <option value="fotografia">Fotografia</option>
                        </select>
                    </div>
                    <div className="grid-6 p-0">
                        <label for="title"><h6>Titulo</h6></label>
                        <input type="text" name="title" className="mt-1" id="title"/>
                    </div>
                </div>

                <div className="row ">
                    <div className="grid-9 p-0">
                        <label for="resume"><h6>Resumo</h6></label>
                        <input type="text" name="resume" className="mt-1" id="resume"/>
                    </div>
                    <div className="grid-3 p-0">
                        <label for="duration"><h6>Duração</h6></label>
                        <select  name="duration" className="mt-1" id="duration">
                            <option value="5">5min</option>
                            <option value="7">7min.</option>
                            <option value="10">10m.</option>
                            <option value="15">15min</option>
                        </select>
                    </div>
                    
                </div>


                <div className="row">
                    <div className="grid-12">
                        <label for="description">Descrição</label>
                        <textarea name="description" rows="10" className="w-100" id="description">

                        </textarea>
                    </div>
                </div>

                <div className="row flex-end-row">
                    <button className="btn mr-2">Adicionar</button>
                </div>
            </form>
         
       </section>
            
            <Footer/>
        </>
    )
}



export default Profile;