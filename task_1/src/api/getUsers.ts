import { TUser } from "../models/user.model";


export const getUser = async (): Promise<TUser[]> => 
{
    const res = await fetch('http://localhost:3000/');
    const json = await res.json();

    return json as TUser[];
}