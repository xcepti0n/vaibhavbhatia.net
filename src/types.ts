export type BlogPost = {
  title: string;
  summary: string;
  content: React.ReactNode;
  date: string;
  author?: string | undefined;
  image: string
}