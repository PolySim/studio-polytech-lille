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
