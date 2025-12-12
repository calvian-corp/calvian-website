import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  link: string;
}

interface LatestBlogSectionProps {
  posts: BlogPost[];
}

const LatestBlogSection: React.FC<LatestBlogSectionProps> = ({ posts }) => {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">Our Latest Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="p-6 border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
            <h3 className="text-xl font-bold mb-3 text-primary truncate">{post.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.summary}</p>
            <a 
              href={post.link} 
              className="text-accent font-medium hover:underline transition-colors duration-200"
            >
              Read Post &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogSection;