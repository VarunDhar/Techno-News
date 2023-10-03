import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";



export const Blogs = () => {

    const {posts} = useContext(AppContext);
    return ( <div className="blogs">
        {posts.map((post)=>{
            return (<div>
                <h3 className="">{post.title}</h3>
                <br></br>
                <h4>by {post.author}</h4>
                <br></br>
                <h4>posted on {post.date} on category {post.category}</h4>
                <br></br>
                <p>{post.content}</p>
                <br></br>
                <div className="tags">{post.tags.map((tag)=>{
                    return (<p>#{tag}</p>);
                })}</div>
            </div>   
            )
        })}
    </div>)
};
