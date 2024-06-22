import logo_footer from './img/logo_footer.png'

const Footer = () => {
return (
<>
    <section class="container-fluid ">
        <section class="row mt-5">

            <div class="col-lg-3 col-md-4 ">
                <div class="card border-0 h6d1ddata">
                    <img src={logo_footer} class="img-fluid mx-auto footimg" alt="img not found"/>
                    <p class=" text-content-justify fs-6 mt-5 mb-4">Duis aute irure dolor inasfa reprehenderit in
                        voluptate velit esse cillum</p>
                </div>
            </div>

            <div class="col-lg-2 col-md-4 mb-5">
                <div class="card  border-0 ">
                    <h4 class="card-body text-center mb-4">Navigation</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center text-decoration-none text-dark">Home</li>
                        <li class="list-group-item text-center text-decoration-none text-dark">About</li>
                        <li class="list-group-item text-center text-decoration-none text-dark">Services</li>
                        <li class="list-group-item text-center text-decoration-none text-dark">Blog</li>
                        <li class="list-group-item text-center text-decoration-none text-dark">Contact</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-2 col-md-4">
                <div class="card border-0 ">
                    <h4 class="card-body text-center mb-4">Services</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center text-decoration-none text-dark">Drone Mapping</li>
                        <li class="list-group-item text-center text-decoration-none text-dark">Real State</li>
                        <li class="list-group-item text-center text-decoration-none text-dark">Commercial</li>
                        <li class="list-group-item text-center text-decoration-none text-dark">Construction</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-2 col-md-4">
                <div class="card border-0 ">
                    <h4 class="card-body text-center mb-4">Support</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center text-decoration-none text-dark">Drone Mapping</li>
                        <li class="list-group-item text-center text-decoration-none text-dark">Real State</li>
                        <li class="list-group-item text-center text-decoration-none text-dark">Commercial</li>
                        <li class="list-group-item text-center text-decoration-none text-dark">Construction</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-3 col-md-4">
                <div class="card border-0 ">
                    <h4 class="card-body text-center mb-4">Contact Us</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center text-decoration-none text-dark">Drone Mapping</li>
                        <li class="list-group-item text-center text-decoration-none text-dark">Commercial</li>
                        <li class="list-group-item text-center text-dark">contact@carwash.com</li>
                        <li class="list-group-item text-center text-dark"><b>10 (87) 738-3940</b></li>
                    </ul>
                </div>
            </div>

        </section>

        <p class="copyright text-center p-4">Copyright ©2023 All rights reserved | This template is made with by
            &#x2764; <span class="text-info">Pratik More</span></p>

    </section>
</>
);
};
export default Footer;