import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServerlessFuturePost from "../components/blog/ServerlessFuturePost"
import CleanCodePrinciplesPost from "../components/blog/CleanCodePrinciplesPost"
import MicroservicesPost from "../components/blog/MicroservicesPost"

const Post: React.FC = () => {
  const location = useLocation(); 
  const fullPath = location.pathname; 
  const pathSegments = fullPath.split('/');
  const postId = pathSegments[pathSegments.length - 1];

  switch (postId) {
    case "serverless-future": return <ServerlessFuturePost />
    case "clean-code-principles": return <CleanCodePrinciplesPost />
    case "microservices-scalability": return <MicroservicesPost />
  }
  return <></>
};

export default Post;
