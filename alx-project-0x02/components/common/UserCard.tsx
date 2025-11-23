import { UserData } from "../../Interfaces";
import Card from "./Card";

export default function UserCard ( { name, email, username}: UserData) {
    return(
        <Card>
            <h3 className="text-lg font-bold">{name}</h3>
            <p>@{username}</p>
            <p>{email}</p>
        </Card>
    );
}