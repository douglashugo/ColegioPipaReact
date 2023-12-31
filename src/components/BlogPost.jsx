import { Link } from "react-router-dom";
import React from "react";

const BlogPost = ({ post }) => {
  const descriptionStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    WebkitLineClamp: 3, // Define o número de linhas desejado
  };

  return (
    <div className="flex border-b pb-4 mb-14">
      <div className="flex-1">
        <h2 className="mt-4 text-lg font-semibold leading-7 text-gray-900 break-all">{post.title}</h2>
        <p style={descriptionStyle} className="mt-2 text-sm leading-6 text-gray-600 break-all">{post.description}</p>
        <Link
          to={`/posts/${post.id}`}
          className="mt-4 text-sm font-semibold leading-6 text-blue-500 hover:text-blue-700 hover:underline"
        >
          Ler mais
        </Link>
      </div>
      {post.image && post.image.image && (
      <div className="w-32 h-22 ml-7">
        <img src={"data:image/jpg;base64," + post.image.image} alt="Imagem do post" className="w-32 h-22" style={{ objectFit: "fill" }}/> 
      </div>
      )}
    </div>
  );
};

export default BlogPost;
