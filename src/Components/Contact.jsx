import React from 'react';

function Contact() {
  return (
    <div className="card-contac">
      
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p className="text-center w-responsive mx-auto mb-5">With the development of this web application we cover the knowledge acquired during the first topics of the course in order to implement and apply all of this on this website.</p>
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>
          <div className="row">
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                <h1><i class="fa-solid fa-user"></i></h1>
                </div>
                <div className="text">
                  <p><span>Engineers:</span> Jose David Viloria Arteaga - Jorge Luis Causil Lopez</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <h1><i class="fa-solid fa-location-dot"></i></h1>
                </div>
                <div className="text">
                <p><span>Address:</span> Cerete, Cordoba, Colombia</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <h1><i class="fa-solid fa-phone"></i></h1>
                </div>
                <div className="text">
                  <p><span>Phone:</span> <a>+57 320 5978379 - +57 312 7401703</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <h1><i class="fa-solid fa-envelope"></i></h1>
                </div>
                <div className="text">
                  <p><span>Email:</span> <a href="josedavid.viloria626@comunidadunir.net">josedavid.viloria626@comunidadunir.net </a> <a href="jorgeluis.causil686@comunidadunir.net">jorgeluis.causil686@comunidadunir.net</a></p>
                </div>
              </div>
            </div>
            
          </div>
      </section>
    </div>
  );
}
export default Contact;
