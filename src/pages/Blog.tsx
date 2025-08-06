import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: '1',
    title: 'Why Good Software Architecture Matters',
    excerpt:
      'Understanding the impact of solid system architecture on scalability and maintainability...',
  },
  {
    id: '2',
    title: 'Top 5 Cloud Deployment Best Practices',
    excerpt:
      'Learn how to optimize your cloud hosting and deployment strategies for better uptime and cost-efficiency...',
  },
  {
    id: '3',
    title: 'The Importance of Automated Testing',
    excerpt:
      'Discover how automated testing can save time and reduce bugs in your software projects...',
  },
];

const Blog: React.FC = () => (
  <div className="max-w-5xl mx-auto pt-24 space-y-10 px-4">
    <h1 className="text-5xl font-extrabold text-primary mb-10 text-center">Blog</h1>
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map(({ id, title, excerpt }) => (
        <Link
          key={id}
          to={`/blog/${id}`}
          className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-secondary mb-3">{title}</h2>
          <p className="text-gray-700">{excerpt}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default Blog;
