import bed from './img/bed.svg'
import bath from './img/bath.svg'

const Searchbar = () => {
return (
<>
    <section className="container-fluid ">
        <section className="container">
            <section className="row mt-3 input-group mb-3">

                <div className="input-group col-md-6  border-dark text-dark  ">
                    <span className="input-group-text bg-white" id="basic-addon1">&#x260C;</span>
                    <input type="text" className="form-control " placeholder="Enter Keywords..."
                        aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group col-md-6 gap-2 text-dark mt-3  ">

                    <select className="form-select rounded-3 searchbar w-25" aria-label="Default select example">
                        <option selected className="text-center">Rent</option>
                        <option value="1">Rent One</option>
                        <option value="2">Rent Two</option>
                        <option value="3">Rent Three</option>
                        <option value="4">Rent Four</option>
                    </select>

                    <div className="dropdown">
                        <button className="btn btn-lg border ps-4 pe-5 text-center searchbar" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={bed}className="s2img text-center me-2" alt="img not found" /> Bed </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Bed One </a></li>
                            <li><a className="dropdown-item" href="#">Bed Two </a></li>
                            <li><a className="dropdown-item" href="#">Bed Three </a></li>
                            <li><a className="dropdown-item" href="#">Bed Four </a></li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-lg border ps-4 pe-5 text-center searchbar" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={bath} className="s2img text-center me-2" alt="img not found" /> Bath </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Bath One </a></li>
                            <li><a className="dropdown-item" href="#">Bath Two </a></li>
                            <li><a className="dropdown-item" href="#">Bath Three </a></li>
                            <li><a className="dropdown-item" href="#">Bath Four </a></li>
                        </ul>
                    </div>

                    <button className="btn2 btn rounded-3 btn-lg border-5 btn-outline-secondary" type="button"> Search
                    </button>

                </div>

            </section>
        </section>
    </section>

</>
);
};
export default Searchbar;