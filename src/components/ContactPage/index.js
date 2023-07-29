import React from "react";
import fake from "../../img/fake2.png"
import insta from "../../img/insta2.png"
import twit from "../../img/twit.png"
import tel from "../../img/tel.png"
import wat from "../../img/watsap.png"

const ContactPage = () => {
  return (
    <div id="contactPage">
      <div className="container">
        <div className="contactPage">
          <div className="contactPage--text">
            <span>Any questions or suggestions? Write to us!</span>
            <p>
              Do you want to book a tour? Contact us on <span>WhatsApp</span>,{" "}
              <span>Telegram</span>, <span>Facebook</span>
            </p>
            <p>Phone number: + 996 700 308 646</p>
            <p>Email address:</p>
          </div>

          <div className="contactPage--contact">
              <h1>Your name (required)</h1>
              <input type="text" />

              <h1>Your e-mail (required)</h1>
              <input type="email" />

              <h1>Topic</h1>
              <input type="text" />

              <h1>Message</h1>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button>Send</button>
          </div>

          <div className="contactPage--imgs">
            <img src={fake} alt="" />
            <img src={insta} alt="" />
            <img src={twit} alt="" />
            <img src={tel} alt="" />
            <img src={wat} alt="" />
          </div>
          <h5>Did you like the article? Share the page!</h5>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
