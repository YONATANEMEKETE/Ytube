export type DataVids = {
  kind: string;
  etag: string;
  items: Vid[];
  nextPageToken: string;
  pageInfo: {};
};

type Vid = {
  kind: string;
  etag: string;
  id: string;
  snippet: Snip;
  statistics: { viewCount: string; likeCount: string; commentCount: string };
  player: { embedHtml: string };
};

type Snip = {
  publishedAt: string;
  title: string;
  description: string;
  thumbnails: { default: { url: string }; high: { url: string } };
  channelTitle: string;
  categoryId: string;
};
