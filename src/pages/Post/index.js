// Headers and Footers

import Header from "pages/Header";
import Footer from "pages/Footer";

//userparams

import { useParams } from "react-router-dom";

//images

import IconFacebook from '../../svg/icon-facebook.svg';
import IconInstagram from '../../svg/icon-instagram.svg';
import IconYoutube from '../../svg/icon-youtube.svg';
import IconTwitter from '../../svg/icon-twitter.svg';


import ImageProfile from 'img/profile/warlison.png';

import ImageBanner from 'img/05.png';

//hookes
import { useState, useEffect } from "react";

// api

import api from "services/api";


const Post = () => {

    //variavel de estados

    const [post, setPost] = useState([])
    const [user, setuser] = useState([])

    const {idPost} = useParams();

    useEffect(() =>{
        if(idPost){
            api.get("/posts/" + idPost)
            .then((response) =>{
                setPost(response.data);


                api.get("/user/" + response.data.id_user)
                .then((response) =>{
                    setuser(response.data);
                })
            })
        }
    },[])

    return (

        <>
            <Header/>

            <section class="container">
        
                    <h5 class="color-primary text-center">{post.category}</h5>
                    <h3 class="text-center mt-2">{post.title}</h3>

                
                    <div class="img-banner mt-3 hidden">
                        <img src={post.imageUrl} alt=""/>

                    </div>

                    <div class="row my-3">
                        <h4>{post.title}</h4>
                        <p class="mt-1">
                        {post.content}
                        </p>

                        
                    </div>


                    <div class="row">
                    
                        <div class="grid-12 card">
                            <div class="row">
                                <div class="grid-3 flex-center pl-1">
                                    <div class="profile-big">
                                        <img src={user.ImageProfile} class="profile-img" alt="" />

                                    </div>
                                </div>
                                <div class="grid-6">
                                    <h6 class="color-primary">{user.name} {user.surname}</h6>
                                    <h6 class="color-gray">{user.user}</h6>

                                    <p>{post.date} - {post.duration}min</p>
                                    <p class="mt-1">
                                     {user.description}
                                    </p>

                                    <a href="" class="color-primary mt-3">Ver mais</a>
                                </div>
                                <div class="grid-3 flex-end-row">
                                    <img src={IconFacebook} className="icon-s" alt="" />
                                    <img src={IconInstagram} className="icon-s ml-2" alt="" />
                                    <img src={IconYoutube} className="icon-s ml-2" alt="" />
                                    <img src={IconTwitter} className="icon-s ml-2" alt="" />
                                </div>
                                
                            </div>
                            

                        </div>
                    </div>
    
                </section>

            <Footer/>
        </>
    )
}



export default Post;