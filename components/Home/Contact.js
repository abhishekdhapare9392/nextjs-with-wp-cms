import React, { useState, useEffect } from 'react'

function Contact({ title, subtitle, address, phone, email }) {
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

  const onSubmit = (e) => {
    if (
      name === '' ||
      contactEmail === '' ||
      subject === '' ||
      message === ''
    ) {
      showAlert('Please fill all text', 'alaert alert-danger')
    } else {
      showAlert('Please fill all text', 'alaert alert-danger')
    }
    e.preventDefault()
  }

  const showAlert = () => {
    const div = document.createElement('div')
    div.className = 'alert alert-danger'
    div.innerText = 'Please fill all text'
    document.querySelector('.testinAlert').appendChild(div)
    setTimeout(() => {
      const allAlerts = document.querySelectorAll('.alert')
      allAlerts.forEach((alert) => {
        alert.remove()
      })
    }, 5000)
  }

  return (
    <div>
      <div className='section py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-auto text-center'>
              <h2>{title}</h2>
              <p className='text-muted'>{subtitle}</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 card card-body rounded-0 shadow-sm border-0'>
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
            <div className='col-md-6'>
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
    </div>
  )
}

export default Contact
