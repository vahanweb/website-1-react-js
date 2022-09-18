import React from "react";

function Contact() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/10/5-motivos-para-estudar-react.png"
              style={{
                width:"600px",
                height:"400px"
              }}
              alt=""
            />
          </div>
          <div className="col-lg-5">
          
            <h1 className="font-weight-light">Contact</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
