export interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

export interface PostProps {
    UserId: number;
    id: number;
    title: string;
    body: string;
}

export interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface CardProps {
    content: string;
}

export interface ButtonProps "size", "shape", "small", "rounded-sm", "rounded-md", "medium", "large"

"userId"
