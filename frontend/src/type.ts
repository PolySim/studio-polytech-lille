export type ConnectionContextType = {
  connection: boolean;
  setConnection: React.Dispatch<React.SetStateAction<boolean>>;
  connected: boolean;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
  iv: string;
  rank: number;
  setRank: React.Dispatch<React.SetStateAction<number>>;
};

export type InfoTeamType = Record<number, MemberType[]>;

export type MemberType = {
  extension: string;
  firstName: string;
  lastName: string;
  rank: string;
  subject: string;
  id: number;
};

export type InfoAlbumType = Record<number, AlbumType[]>;

export type AlbumType = {
  id: number;
  cover_id: number;
  title: string;
};

export type ListImageType = {
  album: [string, string];
  images: {
    id: number;
    secure: number;
  }[];
};

export type PafInfoType = {
  id: number;
  name: string;
  date: string;
  extension: string;
}[];

export type PafArticleInfoType = {
  name: string;
  extension: string;
  views: number;
};

export type VideoCategoryType = {
  id: number;
  name: string;
  position: number;
}[];

export type VideoInfoType = Record<
  number,
  {
    id: number;
    category_id: number;
    title: string;
    extension: string;
    secure: number;
  }[]
>;

export type VideoLinkType = {
  extension: string;
  title: string;
  nbViews: number;
  link: string[];
};

export type NewsInfoType = {
  id: number;
  extension: string;
  title: string;
  text: string;
}[];

export type ConnectedType = {
  group: number;
};

export type AdminAlbumInfo = {
  id: number;
  cover_id: number;
  title: string;
  date: string;
};

export type AllVideosType = {
  id: number;
  category: number;
  title: string;
  date: string;
  view: number;
  secure: number;
  extension: string;
}[];
