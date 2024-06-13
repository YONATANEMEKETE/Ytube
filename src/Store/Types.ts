export type DataVids = {
  kind: string;
  etag: string;
  items: Vid[];
  nextPageToken: string;
  pageInfo: {};
};

export type Vid = {
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

export type Comments = {
  items: ComItems[];
};

// type ComItems = {
//   snippet: { topLevelComments: EachCom };
// };
type ComItems = {
  snippet: Snippet;
};

type Snippet = {
  topLevelComment: EachCom;
};

type EachCom = {
  snippet: {
    textOriginal: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
  };
};
