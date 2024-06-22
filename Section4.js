import s3_1 from './img/s3_1.svg';
import s3_2 from './img/s3_2.svg';
import s3_3 from './img/s3_3.svg';
import s3_4 from './img/s3_4.svg';

const Section4 = () => {
    return (
        <>
            <section class="container-fluid sec-4">
                <section class="container">
                    <section class="row mt-4 pt-5 pb-5">

                        <div class="col-12 col-md-4 text-dark">
                            <h1 class="mb-2 mb-3 csk p-0">Explore <br /> by Property Type</h1>
                            <p class="mb-2 fs-6 me-5 mb-5">Get started by choosing from one of our pre-built page templates to
                                showcase your properties </p>
                            <button class="btn1 btn btn-lg border-5 mb-5 btn-outline-primary" type="button">View All Properties</button>

                        </div>
                        <div class="col-12 col-md-8">

                            <div class="card-group bg-light mt-3">
                                <div class="card border-0 rounded-0 ">
                                    <img src={s3_1} class="mt-5 card-img-top mx-auto s3img" alt="img not found" />
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Home & Apartment</h5>
                                    </div>
                                </div>
                                <div class="card border-0 rounded-0 ">
                                    <img src={s3_2} class="mt-5 card-img-top mx-auto s3img" alt="img not found" />
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Vila</h5>
                                    </div>
                                </div>
                                <div class="card border-0 rounded-0 ">
                                    <img src={s3_3} class="mt-5 card-img-top mx-auto s3img" alt="img not found" />
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Studio</h5>
                                    </div>
                                </div>
                                <div class="card border-0 rounded-0 ">
                                    <img src={s3_4} class="mt-5 card-img-top mx-auto s3img" alt="img not found" />
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Office</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
 
                    </section>
                </section>
            </section>
        </>
    );
};
export default Section4;