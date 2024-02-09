import UserCard from "./UserCard";

export default function UserList({data}) {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-4">
        {data && data.map((item) => <UserCard key={item.id} item={item} />)}
      </div>
    </>
  );
}
