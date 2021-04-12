export interface User {
    name: string;
    user: string;
    image: string;
}

export interface Comments {
    name: string;
    user: User;
}

export interface Card {
    title: string;
    id: string;
    comments: Comments[];
}

export interface List {
    title: string;
    id: string;
    cards: Card[]; 
}

export interface Board {
    title: string;
    list: List[];
    user: User[];
}