import React from 'react'
import Blog from './Blog'

const Blogs = ({ blogs }) => {
  return (
    <section className='section py-5'>
      <div className='container'>
        <div className='row'>
          {blogs.map((blog) => (
            <Blog blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs
