export interface BlogPost {
    _id: string,
    title: string;
    subTitle: string;
    imageUrl: string;
    text: string;
    likes: string[];
    commentList: string[];
    owner: object;
    createdAt: string;
    updatedAt: string;
}