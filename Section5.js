import s4_1 from './img/s4_1.jpg';
import s4_2 from './img/s4_2.jpg';
import s4_3 from './img/s4_3.jpg';
import s4_4 from './img/s4_4.jpg';

const Section5 = () => {
    return (
        <>
            <section class="container-fluid sec-5"> 
                <section class="container">
                    <section class="row mt-5  ">

                        <h1 class="csk text-center mt-5"> Our Agents</h1>
                        <p class=" text-center mt-2"> Get started by choosing from one of our pre-built page <br/> templates to
                            showcase your properties</p>

                        <div class="card-group  gap-3">
                            <div class="card border-0 rounded-0 ">
                                <img src={s4_1} class="mt-5 card-img-top mx-auto " id="s5img" alt="img not found"/>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Nick R Bocker</h5>
                                        <p class="mb-2 fs-6 mb-5">Real Estate Agent</p>
                                    </div>
                            </div>
                            <div class="card border-0 rounded-0 ">
                                <img src={s4_2} class="mt-5 card-img-top mx-auto " id="s5img" alt="img not found"/>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Jimmy Changa</h5>
                                        <p class="mb-2 fs-6 mb-5">Real Estate Agent</p>
                                    </div>
                            </div>
                            <div class="card border-0 rounded-0 ">
                                <img src={s4_3} class="mt-5 card-img-top mx-auto " id="s5img" alt="img not found"/>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Buster Hyman</h5>
                                        <p class="mb-2 fs-6 mb-5">Real Estate Agent</p>
                                    </div>
                            </div>
                            <div class="card border-0 rounded-0 ">
                                <img src={s4_4} class="mt-5 card-img-top mx-auto " id="s5img" alt="img not found"/>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Holly Grahman </h5>
                                        <p class="mb-2 fs-6 mb-5">Real Estate Agent</p>
                                    </div>
                            </div>
                        </div>

                    </section>
                </section>
            </section>
        </>
    );
};
export default Section5;