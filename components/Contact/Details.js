import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Details = ({ address, email, phone }) => {
  useEffect(() => {
    setContact({
      name: '',
      contactEmail: '',
      subject: '',
      message: '',
    })
  }, [])

  const [contact, setContact] = useState({
    name: '',
    contactEmail: '',
    subject: '',
    message: '',
  })

  const { name, contactEmail, subject, message } = contact
  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    console.log(name, contactEmail, subject, message)
    if (
      name !== '' &&
      contactEmail !== '' &&
      subject !== '' &&
      message !== ''
    ) {
      const config = {
        data: {
          sender: {
            name: 'Abhishek Dhapare',
            email: 'abhishek.dhapare@gmail.com',
          },
          to: [
            {
              email: 'abhishek@intquo.com',
              name: 'Abhishek Dhapare',
            },
          ],
          subject: 'Enquiry from website!',
          htmlContent: `<html><head></head><body><p>Hello,</p> This is my first transactional email sent from Sendinblue.
            </p>
            <p>
            Name: ${name}, <br>
            Email: ${contactEmail}, <br>
            Subject: ${subject}, <br>
            message: ${message}, <br>
            </p>
            </body></html>`,
        },
        headers: {
          'api-key':
            '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',
          'Content-Type': 'application/json',
        },
      }

      const res = await axios.post(
        `https://api.sendinblue.com/v3/smtp/email`,
        config
      )

      showAlert('Mail send successfully', 'alert alert-success')
    } else {
      showAlert('Please fill all text', 'alert alert-danger')
    }
    e.preventDefault()
  }

  const showAlert = (msg, className) => {
    const div = document.createElement('div')
    div.className = className
    div.innerText = msg
    document.querySelector('.testinAlert').appendChild(div)
    setTimeout(() => {
      const allAlerts = document.querySelectorAll('.alert')
      allAlerts.forEach((alert) => {
        alert.remove()
      })
    }, 5000)
  }

  return (
    <>
      <section className='section py-5'>
        <div className='container'>
          <div className='card card-body shadow rounded-0 border-0'>
            <div className='row'>
              <div className='col-12 col-sm col-md-6 col-lg-6 col-xl-6'>
                <h3 className='text-primary'>
                  <i className='fa fa-street-view'></i> Address
                </h3>
                <div dangerouslySetInnerHTML={{ __html: address }}></div>
                <h3 className='text-primary'>
                  <i className='fa fa-mobile'></i> Phone
                </h3>
                <p>+91 {phone}</p>
                <h3 className='text-primary'>
                  <i className='fa fa-envelope'></i> Email
                </h3>
                <p>
                  <a href={'mailto:' + email} className='text-info'>
                    {email}
                  </a>
                </p>
              </div>
              <div className='col-12 col-sm col-md-6 col-lg-6 col-xl-6'>
                <form>
                  <div className='testinAlert'></div>
                  <div className='row mb-3'>
                    <div className='col-md-6'>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        className='form-control'
                        placeholder='Name'
                        value={name}
                        onChange={onChange}
                      />
                    </div>
                    <div className='col-md-6'>
                      <input
                        type='email'
                        name='contactEmail'
                        id='contactEmail'
                        className='form-control'
                        placeholder='Email'
                        value={contactEmail}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <div className='col-md-12'>
                      <input
                        type='text'
                        className='form-control'
                        name='subject'
                        id='subject'
                        placeholder='Subject'
                        value={subject}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <div className='col-md-12'>
                      <textarea
                        name='message'
                        id='message'
                        cols='30'
                        rows='10'
                        className='form-control'
                        placeholder='Message'
                        onChange={onChange}
                        value={message}
                      ></textarea>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <button
                        className='btn btn-primary btn-block shadow'
                        onClick={onSubmit}
                      >
                        <i className='fa fa-paper-plane'></i> SEND
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Details
