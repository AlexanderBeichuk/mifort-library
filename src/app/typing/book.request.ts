import { UserDTO } from '../models/User';

export interface BookRequest {
  id: string;
  creationDate: string;
  description: string;
  user: UserDTO;
  url: string;
}
