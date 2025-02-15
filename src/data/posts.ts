import { BlogPost } from '../types';

export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Mindful Programming',
    excerpt: 'Discover how mindfulness can improve your coding practice and lead to better software development.',
    content: `In the fast-paced world of software development, it's easy to get caught up in the rush of deadlines and feature requests. However, practicing mindful programming can significantly improve both your code quality and your well-being...`,
    date: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
    readTime: 5
  },
  {
    id: '2',
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for creating maintainable and scalable React applications.',
    content: `When building React applications that need to scale, it's crucial to establish solid architectural patterns from the start...`,
    date: '2024-03-10',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    },
    readTime: 8
  }
];