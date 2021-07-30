export interface articleType {
  author: string;
  created_at: number;
  num_comments: number | null;
  parent_id: string | null;
  story_id: string | null;
  story_title: string | null;
  story_url: string | null;
  title: string;
  url: string;
}

export interface articlePropType {
  article : articleType;
}