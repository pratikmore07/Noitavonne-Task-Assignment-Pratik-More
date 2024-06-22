import s2_1 from './img/s2_1.svg'
import s2_2 from './img/s2_2.svg'
import s2_3 from './img/s2_3.svg'

const Section2 = () => {
    return (
        <>
            <div>
                <section class="container-fluid sec-2 ">
                    <section class="container">
                        <section class="row mt-5 g-0">

                            <h1 class="csk text-center text-white mb-5 mt-5">How we help people ?</h1>
                            <div class="card-group  text-center mt-5 mb-5">

                                <div class="card border-5 bg-info ">
                                    <img src={s2_1} class="card-img-top s2crdimg mx-auto mt-5" alt="img not found" />
                                    <div class="card-body pb-5 pt-5">
                                        <h4 class="card-title fs-4">Sell Home & office</h4>
                                        <p class="card-text ">Get started by choosing from one of our pre-built page templates to showcase your properties</p>
                                    </div>
                                </div>
                                <div class="card border-5 bg-info">
                                    <img src={s2_2} class="card-img-top s2crdimg mx-auto mt-5" alt="img not found" />
                                    <div class="card-body pb-5 pt-5">
                                        <h4 class="card-title fs-4">Rent Home & office</h4>
                                        <p class="card-text ">Get started by choosing from one of our pre-built page templates to showcase your properties</p>
                                    </div>
                                </div>
                                <div class="card border-5 bg-info">
                                    <img src={s2_3} class="card-img-top s2crdimg mx-auto mt-5" alt="img not found" />
                                    <div class="card-body pb-5 pt-5">
                                        <h4 class="card-title fs-4">Find Next</h4>
                                        <p class="card-text ">Get started by choosing from one of our pre-built page templates to showcase your properties</p>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </section>
                </section>
            </div>
        </>
    );
};
export default Section2;