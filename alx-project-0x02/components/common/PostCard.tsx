
import { PostProps } from "../../Interfaces";
import Card from "./Card";

export default function PostCard ({ title, body }: PostProps){
    return (
        <Card>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600">{body}</p>
        </Card>
    )
}