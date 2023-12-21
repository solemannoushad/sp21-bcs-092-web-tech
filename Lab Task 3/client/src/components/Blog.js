import React, { useEffect, useState } from 'react';
import BlogBox from './BlogBox';
import { Link } from 'react-router-dom';

const Blog = () => {
  const host = "http://localhost:8000";
  const [blogs, setBlogs] = useState([]);
  const [popblog, setPopblog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${host}/api/blogs/`, {
        method: 'GET',
      });
      const json = await response.json();
      setBlogs(json.slice(0, 3));
      console.log(json);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const func = async (item)=>{
    try {
      const response = await fetch(`${host}/api/blogs/${item}`, {
        method: 'GET',
      });
      const json = await response.json();
      setPopblog(json)
      console.log(json);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  }

  return (
    <div className="blogMain section" id="blogs">
      <h1 className="sectionh1">
        Our&nbsp; <p>Blogs</p>
      </h1>
      <div className="blogsContent">
        {blogs.map((item) => (
          <BlogBox
            key={item._id} 
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
            clickFunc={()=> func(item._id)}
          />
        ))}
      </div>
      <Link className='btn seeAllBtn' to="/blogs">See All</Link>
    </div>
  );
};

export default Blog;
