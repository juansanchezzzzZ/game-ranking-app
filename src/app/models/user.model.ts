export interface User {
  id?: string;
  username: string;
  email: string;
  avatarUrl: string;
  highestScore: number;
  totalPlayTime: number;
  createdAt: Date;
  lastLogin: Date;
}
