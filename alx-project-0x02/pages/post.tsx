import PostCard from "../components/common/PostCard";
import Header from  "@/components/layout/Header"
import { PostProps } from "../Interfaces";

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts: PostProps[] = await res.json();

    return { props: { posts } };
}

export default function ({ posts }: { posts: PostProps[]}) {
    return (
            <div>
                {posts.map((post) => (
                    <PostCard key={post.id} {...post}/>
                ))}
            </div>
    )
}

