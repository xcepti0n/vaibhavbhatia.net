// export interface BlogPost {
//   id: string;
//   title: string;
//   excerpt: string;
//   content: string;
//   date: string;
//   imageUrl: string;
//   readTime: number;
// }

export type BlogPost = {
  title: string;
  summary: string;
  content: React.ReactNode;
  date: string;
  author?: string | undefined;
  image: string
}