type Tags = string[];

interface Post {
  id: number;
  image: string;
  likes: number;
  publishDate: string;
  tags: Tags;
  text: string;
  title: string;
  userId: number;
}
