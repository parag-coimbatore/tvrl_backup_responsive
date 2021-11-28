import React from 'react'
import HeroSection from '../components/HeroSection'

function Home() {
    return (
        <div>
            <h1 className="text-center">Home page</h1>
            <HeroSection />
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col mx-3" style={{width: '23rem'}}> 
                    <div class="card text-center">
                        <img src="images/img-8.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">About our services</h3>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href={"http://localhost:3000/services"} class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                
                <div class="col mx-3" style={{width: '23rem'}}>
                    <div class="card text-center">
                        <img src="/images/img-8.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Learn</h3>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href={"http://localhost:3000/services"} class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                
                <div class="col mx-3" style={{width: '23rem'}}>
                    <div class="card text-center">
                        <img src="/images/img-8.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Card title</h3>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <a href={"http://localhost:3000/services"} class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class="col mx-3" style={{width: '23rem'}}> 
                    <div class="card text-center">
                        <img src="/images/img-8.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title text-center">Know about me</h3>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href={"http://localhost:3000/about"} class="btn btn-primary">Go somewhere</a>
                            
                        </div>
                    </div>
                </div>

                <div class="col mx-3" style={{width: '23rem'}}>
                    <div class="card text-center">
                        <img src="/images/img-8.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Card title</h3>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href={"http://localhost:3000/services"} class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                
                <div class="col mx-3" style={{width: '23rem'}}>
                    <div class="card text-center">
                        <img src="/images/img-8.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Card title</h3>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <a href={"http://localhost:3000/services"} class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
