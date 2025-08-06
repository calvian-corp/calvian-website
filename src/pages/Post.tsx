import React from "react";

const Post: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">How We Scaled a Client’s Platform 10x</h1>
      <img
        src="/images/case-study.jpg"
        alt="Team collaboration"
        className="rounded-lg mb-6"
      />
      <p className="text-lg leading-7 mb-4">
        In this case study, we walk through how we helped one of our clients scale their platform to support 10x more users without downtime. Our team re-architected core backend services and implemented a CI/CD pipeline for seamless deployments.
      </p>
      <p className="text-lg leading-7 mb-4">
        We leveraged a microservices approach, containerized workloads with Docker, and deployed to AWS using ECS and CloudFormation. Alongside infrastructure work, our engineers also provided performance audits and regression testing.
      </p>
      <p className="text-lg leading-7">
        The results: improved uptime, a 75% reduction in deployment time, and a significantly more maintainable codebase.
      </p>
    </div>
  );
};

export default Post;
