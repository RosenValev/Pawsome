import { User } from "./user";

export interface BlogPost {
    _id: string;
    title: string;
    subTitle: string;
    imageUrl: string;
    text: string;
    likes: string[];
    commentList: string[];
    owner: User;
    createdAt: string;
    updatedAt: string;
    token: string;
}