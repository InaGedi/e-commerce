import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                   
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/img1.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                      
                            </div>
                          
                          
                        </div>
                        <Product/>
                    </div>
                    )
}

                    export default Home
