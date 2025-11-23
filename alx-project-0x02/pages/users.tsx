import UserCard from "../components/common/UserCard";
import { UserData } from "../Interfaces";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserData[] = await res.json();

  return { props: { users } };
}

export default function UsersPage({ users }: { users: UserData[] }) {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}