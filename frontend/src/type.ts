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
