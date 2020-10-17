import React from 'react';
import Link from 'next/link';

function Blog({ props }) {
  const blog = props.blog;
  // console.log(blog);
  return (
    <div>
      <div className='section py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-auto text-center'>
              <h2>Blog</h2>
              <p className='text-muted'>
                Our featured blog covers verious topics.
              </p>
            </div>
          </div>
          <div className='row'>
            {blog.map((post) => (
              <div className='col-md-3' key={post.id}>
                <div className='card rounded-0 border-0 shadow text-center w-100 h-100'>
                  <img
                    src={post.acf.featured_image.sizes.thumbnail}
                    alt='post-image'
                  />
                  <div className='card-body'>
                    <h4 className='lead'>
                      {post.title.rendered.substring(0, 20) + '...'}
                    </h4>
                    <p>{post.acf.excerpt.substring(0, 100) + '...'}</p>
                  </div>
                  <Link href={'/' + post.slug}>
                    <button className='btn btn-primary rounded-0'>
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
