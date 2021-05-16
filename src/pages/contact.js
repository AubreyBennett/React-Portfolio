import React from 'react';

function Contact() {
  return (
    <div>

        {/* <form id="contact-form" method="post" action="contact.php" role="form"> */}
          <div className="messages"></div>
          <div className="controls">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="form_name">Firstname *</label>
                  <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="form_lastname">Lastname *</label>
                    <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." / >
                      <div className="help-block with-errors"></div>
                  </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="form_email">Email *</label>
                      <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                        <div className="help-block with-errors"></div>
                  </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="form_need">Please specify your need *</label>
                        <select id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                          <option value=""></option>
                          <option value="Request quotation">Request a hug</option>
                          <option value="Request order status">Request some ice cream</option>
                          <option value="Request copy of an invoice">Request puppy snuggles</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="form_message">Message *</label>
                        <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <input type="submit" className="btn btn-success btn-send" value="Send message" />
                    </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <p className="text-muted">
                          <strong>*These fields are required.</strong> 
                        </p>
                      </div>
                    </div>
                 </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card">
                          <div className="card-body">
                            Reach out to me!
                         </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Email: 27aubreyb@gmail.com</li>
                        <li className="list-group-item">Phone Number: 404-803-6229</li>
                      </ul>
                    </div>
                  {/* </form> */}
     </div>
    );
  }

  export default Contact;