import { useState } from "react";
import { CONTACT_FORM_ENDPOINT } from "../config";

async function postContactForm(data) {
  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return response;
}

// This is a partially complete contact form, to show the basics of
// React useState to handle form data in a react app, which is a very common
// requirement. Notice how we listen to event handlers like in standard JavaScript
// And then we store our data using useState
// Also notice that useState, when initialized, returns an array of:
// i) the current state
// ii) a function to create a new state
// Pay attention to how both of these are used, as this is a simple example of
// The primary way of managing data/state in React
export default function ContactPage() {

  const [formData, setFormData] = useState({});
  const [formResponseStatus, setFormResponseStatus] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await postContactForm(formData);
    setFormResponseStatus(response.status);
  }

  function handleChange(event) {
    if (event.target.id === "form-name") {
      const name = event.target.value;
      setFormData(Object.assign(formData, { name }))
    }
    if (event.target.id === "form-email") {
      const email = event.target.value;
      setFormData(Object.assign(formData, { email }))
    }
    if (event.target.id === "form-comment") {
      const comment = event.target.value;
      setFormData(Object.assign(formData, { comment }))
    }
  }

  return (
    <div className="form-box">
      <div className="item">
        <div className="content">
          Contact us for requests, we will consider adding your city.
        </div>
        <div className="content">
          {formResponseStatus ?
            <div>{formResponseStatus === 200 ? "Thank you." : "Something went wrong."}</div> :
            <form onSubmit={handleSubmit}>
              <input id="form-name" placeholder="Your name" value={formData.name} onChange={handleChange} required /><br></br>
              <input id="form-email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required /><br></br>
              <textarea id="form-comment" placeholder="Your comment" value={formData.comment} onChange={handleChange}></textarea><br></br>
              <button type="submit">Send</button>
            </form>
          }
        </div>
      </div>
    </div >
  )
}
