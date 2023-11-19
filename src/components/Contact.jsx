import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form> 
          <div>
            <label>Name</label>
            <input type="text" placeholder='John Dalton'/>
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder='johndalton12@gmail.com'/>
          </div>
          <div>
            <label>Message</label>
            <input type="text" placeholder='Tell us about your query...'/>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  )
}

export default Contact;