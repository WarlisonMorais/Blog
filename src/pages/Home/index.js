


// components

import Hero from './Hero';
import Main from './Main';
import Card from './Card';
import Banner from './Banner';

//figuras

import star from 'svg/icon-star.svg';


//api


import api from 'services/api';

// Hooks

import { useState, useEffect } from 'react';



const Home = () =>{

    //variaves de estados

    const [main, setMain] = useState([]);
    const [mostseen, setMostseen] = useState([]);
    const [banner, setBanner] = useState([]);

    // faça isso quando o componente montar 
    useEffect(() =>{

        //main post con star = 5
        api.get('/posts?star=5&_limit=2&_order=desc')
        .then((response) =>{
            setMain(response.data);
        })




        //requisição para banner


        api.get('/posts?_sort=date&_order=desc&_limit=1')
        .then((response) =>{
            setBanner(response.data);
        })


          //requisição post mais visto


        api.get('/posts?_limit=3')
        .then((response) =>{
            setMostseen(response.data);
        })
       
    } )

  
   




    return(

        <>
            <Hero/>



            <section className="container">
        <div className="row">
                <div className="grid-5">
                    <img src={star} className="icon-l" alt="" />
                

                    <h3 className="mt-2">Os melhores e mais bem votados posts do mês.</h3>
                    <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi, ipsa vero? Ut, inventore unde doloremque
                        cupiditate consectetur, 
                    </p>

                    
                </div>
            <div className="grid-7">


            {

                 main.map((item) =>{
                    return <Main key={item.id} content={item}  />
                 })
            }
            
               
            </div>
        </div>
    </section>  













    <seciton className="container">
        <h3>Posts com mais visitas</h3>
        <p>lorem lorem lorem lomre lorem lorem</p>

        <div className="row mt-4">
        
            <Card/>
            <Card/>
            <Card/>
            
        </div>
    </seciton>

    <Banner/>

        </>
    )
}


export default Home;