import {
  FaUser,
  FaMobile,
  FaAt,
  FaBoxOpen,
  FaGithub,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";

function About() {
  return (
    <>
      <div className="bottom-right">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          About
        </button>
      </div>
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">About App</h4>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <FaUser className="mr-3" />&nbsp; About me
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    <div className="card-body">
                        <ul className="list-group">
                          <li className="list-group-item">
                            <FaUser className="mr-3" />
                            &nbsp; Hari Krishna Anem &nbsp;
                            <a
                              href="https://github.com/HariKrishna-9885699666"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="ml-3" />
                            </a>
                            &nbsp; 
                            <a
                              href="https://www.linkedin.com/in/anemharikrishna"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedin className="ml-3" />
                            </a>
                          </li>
                          <li className="list-group-item">
                            <FaMobile className="mr-3" />
                            &nbsp; +91 9885699666
                          </li>
                          <li className="list-group-item">
                            <FaAt className="mr-3" />
                            &nbsp; anemharikrishna@gmail.com
                          </li>
                          <li className="list-group-item">
                            <FaLink className="mr-3" />&nbsp; 
                            <a
                              href="https://harikrishna.netlify.app"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Portfolio
                            </a>
                          </li>
                          <li className="list-group-item">
                            <FaLink className="mr-3" />&nbsp; 
                            <a
                              href="https://harikrishna.hashnode.dev"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Blog
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <FaBoxOpen className="mr-3" />
                      &nbsp; Packages used
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    <div className="card-body">
                        <ul className="list-group">
                        <li className="list-group-item">
                            <FaBoxOpen className="mr-3" />
                            &nbsp; NextJS
                          </li>
                          <li className="list-group-item">
                            <FaBoxOpen className="mr-3" />
                            &nbsp; BootStrap
                          </li>
                          <li className="list-group-item">
                            <FaBoxOpen className="mr-3" />
                            &nbsp; React Hook Form
                          </li>
                          <li className="list-group-item">
                            <FaBoxOpen className="mr-3" />
                            &nbsp; React Icons
                          </li>
                          <li className="list-group-item">
                            <FaBoxOpen className="mr-3" />
                            &nbsp; React Toastify
                          </li>
                          <li className="list-group-item">
                            <FaBoxOpen className="mr-3" />
                            &nbsp; React Loader Spinner
                          </li>
                          <li className="list-group-item">
                            <FaBoxOpen className="mr-3" />
                            &nbsp; Yup
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
