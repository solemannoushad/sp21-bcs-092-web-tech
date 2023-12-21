import React, { useEffect, useState } from 'react';
import BlogBox from '../components/BlogBox';
import Loading from '../components/Loading'


const Blogs = () => {

    const host = "http://localhost:8000";
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchBlogs();
    }, []);
  
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${host}/api/blogs/`, {
          method: 'GET',
        });
        const json = await response.json();
        setBlogs(json);
        console.log(json);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
  return (
    <>
        {loading && <Loading/>}  
        <div id='header' className='blogheader'></div>  
        <div className="blogsPageMain">
            <div className="blogsSec">
                <h1 className="sectionh1 blogh1">
                    Our&nbsp; <p>Blogs</p>
                </h1>
                <div className="blogsPartMain">
                {blogs.map((item) => (
                    <BlogBox
                        key={item._id} 
                        imgUrl={item.imgUrl}
                        title={item.title}
                        description={item.description}
                    />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Blogs
