import React from 'react'

const BlogBox = (props) => {

    const {imgUrl, title, description, clickFunc} = props;

  return (
    <div className="blogBoxMain">
    <div className="blogImg">
        <img src={imgUrl} alt="" />
    </div>
    <div className="content">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="btnMain">
            <div className="readMoreBtn" onClick={clickFunc}>Read More</div>
        </div>
    </div>
</div>
  )
}

export default BlogBox
