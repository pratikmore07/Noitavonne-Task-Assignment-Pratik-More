import sec_5 from './img/sec_5.jpg'

const Section6 = () => {
    return (
        <>
            <section class="container-fluid "> 
                <section class="row mt-5 mb-5">

                    <div class="col-12 col-lg-6 pt-5 s6d1 text-light">
                        <h1 class="h6d1ddata mb-2 mb-3 csk ">Subscribe Newsletter</h1>
                        <p class="h6d1ddata mb-2 fs-6 me-5 mb-5">Get started by choosing from one of our pre-built page
                            templates <br/> to showcase your properties</p>
                        <input type="email"   class="form-control border-0 border-bottom rounded-0 mb-2 border-light mail  text-dark"
                            id="exampleFormControlInput1" placeholder="Enter Your Email"/>
                            <button class="h6d1ddata btn1 btn btn-lg border-5 mb-5 btn-outline-info" type="button">Subscribe</button>

                    </div>
                    <div class="col-12 col-lg-6">
                        <img src={sec_5} class="card-img-top img-fluid s6img" alt="img not found"/>
                    </div>

                </section>
            </section>
        </>
    );
};
export default Section6;