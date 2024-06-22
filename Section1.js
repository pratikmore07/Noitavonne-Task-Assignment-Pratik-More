import s1_1 from './img/s1_1.jpg';
import s1_2 from './img/s1_2.jpg';
import bed from './img/bed.svg';
import bath from './img/bath.svg';
import build from './img/building.svg';

const Section1 = () => {
    return (
        <>
         
        <section class="container-fluid ">
            <section class="container">
                <section class="row mt-5 g-0 mb-5 ">
                    <h1 class="csk text-center mt-5">Display Latest & Featured Properties</h1>
                    <p class=" text-center mt-2">Get started by choosing from one of our pre-built page templates <br/>to showcase your properties</p>

                    <div class="row mt-5 mb-5 ">
                        <div class="col-lg-4 card p-0 rounded-0 border">
                            <img src={s1_1} class="card-img-top" alt="img not found"/>
                            <div class="card-body p-4">
                                <h4 class="card-title mt-3 fs-5 text-info">$ 6728</h4>
                                <h4 class="card-title ">Apartment</h4>  
                                <p class="card-text text-secondary fs-6 mt-3">Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt uty labore et dolore magna aliqua. Ut enimd minim, quis nostrud</p>
                            </div>
                            <div class="card-footer bg-white d-flex gap-2 p-0 mx-auto pt-3 "> 
                               <img src={bed} class="card-img-top s2img" alt="img not found"/>
                               <p>2_bedroom</p>  

                               <img src={bath} class="card-img-top s2img " alt="img not found"/>
                               <p>2_bathroom</p>
    
                               <img src={build} class="card-img-top s2img" alt="img not found"/>
                               <p>1150_sq.ft</p>
                            </div>
                        </div>
                        <div class="col-lg-4 card p-0 rounded-0 border">
                            <img src={s1_2} class="card-img-top" alt="img not found"/>
                            <div class="card-body p-4">
                                <h4 class="card-title mt-3 fs-5 text-info">$ 10000</h4>
                                <h4 class="card-title ">Office</h4>
                                <p class="card-text text-secondary fs-6 mt-3">Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt uty labore et dolore magna aliqua. Ut enimd minim, quis nostrud</p>
                            </div>
                            <div class="card-footer bg-white d-flex gap-2 p-0 mx-auto pt-3 "> 
                                <img src={bed} class="card-img-top s2img" alt="img not found"/>
                                <p>2_bedroom</p>  
    
                                <img src={bath} class="card-img-top s2img " alt="img not found"/>
                                <p>2_bathroom</p>
    
                                <img src={build} class="card-img-top s2img" alt="img not found"/>
                                <p>1150_sq.ft</p>
                            </div>
                        </div>
                        <div class="col-lg-4 card p-0 rounded-0 border">
                            <img src={s1_1} class="card-img-top " alt="img not found"/>
                            <div class="card-body p-4">
                                <h4 class="card-title mt-3 fs-5 text-info">$ 8576</h4>
                                <h4 class="card-title ">Clasic Home</h4>
                                <p class="card-text text-secondary fs-6 mt-3">Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt uty labore et dolore magna aliqua. Ut enimd minim, quis nostrud</p>
                            </div>
                            <div class="card-footer bg-white d-flex gap-2 p-0 mx-auto pt-3 "> 
                                <img src={bed} class="card-img-top s2img" alt="img not found"/>
                                <p>2_bedroom</p>  
 
                                <img src={bath} class="card-img-top s2img " alt="img not found"/>
                                <p>2_bathroom</p>
 
                                <img src={build} class="card-img-top s2img" alt="img not found"/>
                                <p>1150_sq.ft</p>
                            </div>
                        </div>    
                    </div>
    
                </section>
            </section>
        </section>
         
        </>
    );
};
export default Section1;