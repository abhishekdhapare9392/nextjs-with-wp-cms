import React from 'react'
import Link from 'next/link'

const Blog = ({ blog }) => {
  // console.log(blog)
  // const content = new DOMParser().parseFromString(
  //   blog.content.rendered,
  //   'text/xml'
  // )
  return (
    <section className='section py-5'>
      <div className='container'>
        <div
          className='col-12 col-sm col-md-12 col-lg-12 col-xl-12'
          key={blog.id}
        >
          <div className='card rounded-0 border-0 shadow text-center w-100 h-100'>
            <img src={blog.acf.featured_image.sizes.large} alt='blog-image' />
            <div className='card-body'>
              <h4 className='lead'>{blog.title.rendered}</h4>
              <div
                dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
