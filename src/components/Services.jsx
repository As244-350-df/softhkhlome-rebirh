import Fundamentals from "../images/undraw_web-developer_ggt0.svg"
import design from "../assets/hero2.jpg"
import design2 from "../images/3572691.jpg"
//import designVID from "../images/istockphoto-2257509268-640_adpp_is.mp4"
function Services() {
  return (
    <>
        <div className="container section-wrapper services " id="services">
          <h3 className="h2 fw-bold text-center py-2 text-primary" >Our Services</h3>
          <section className="p-5">
            <div className="container">
              <div className="d-md-flex d-block  align-items-center justify-content-center g-4">
                <div className="img-cont w-40 ">
                  <img className="img img-fluid" height="400" width="400" src={design} alt="design and development" />
                </div>
                <div className="p-2 w-70 web-dev-serv">
                  <h3 className="h3 text-center">Web Design and Development</h3>
                  <p className="p text-center px-2 px-md-5">
                    Are you a new businness in town?Boost your connection with you customers by entering into the digital world  economy with us .
                    we offer proffessional designed website customized suitably for your business to get you in touch with your customers.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5">
            <div className="container">
              <div className="d-md-flex d-block  align-items-center justify-content-between g-2">
                <div className="p-2 web-dev-serv">
                  <h2 className="h3 text-center">Get professional graphic design</h2>
                  <p className="p text-center">
                    we also offer stunning designs weather it is  business cards,social media posts,flylers and burners we are here for you. <span className="fw-bold">This service is not available currently</span>
                  </p>
                </div>
                <div className="mx-2">
                  <img className="img img-fluid" src={design2} alt="design" />
                </div>
              </div>
            </div>
          </section>
          <section className="py-5">
            <div className="container-fluid">
              <div className="d-md-flex d-block  align-items-center justify-content-between g-2">
                <div className="mx-2">
                  <img className="img img-fluid" src={Fundamentals} alt="Fundamentals" />
                </div>
                <div className="p-2 web-dev-serv">
                  <h2 className="h3 text-center">Learn Fundamentals</h2>
                  <p className="p text-center">
                    Want to develop a skill .learn the fundamentals of web design  with as using Html ,Css and javascript.
                    You will also lean backend web development using nodejs were by you be learn how to create serves for your website and how you can communicate with them using API's.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
    </>
  );
}
export default Services