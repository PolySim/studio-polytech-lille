export type ConnectionContextType = {
  connection: boolean;
  setConnection: React.Dispatch<React.SetStateAction<boolean>>;
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
