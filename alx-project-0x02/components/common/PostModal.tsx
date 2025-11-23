import { PostProps } from "../../Interfaces";

interface Props {
    isOpen: boolean;
    post: PostProps | null;
    onClose: () => void;
}

    export default function PostModal({ isOpen, post, onClose }: Props) {
      if (!isOpen || !post) return null;

        return(
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p className="mt-4">{post.body}</p>

                    <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded" onClick={onClose}>
                    Close
                    </button>
                </div>
                </div>
            );  
    
}