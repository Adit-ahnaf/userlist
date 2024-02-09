import { useNavigate } from "react-router-dom";
export default function UserCard({ item }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <figure className=" bg-white cursor-pointer p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
          <a onClick={() => navigate(`/user/${item.id}`, { state: { data: item } })}>
            <div>
              <img className="w-full object-cover" src={item.image} alt="" />
              <figcaption className="pt-4">
                <h3 className="text-xl mb-1">
                  {item.firstName} {item.lastName}
                </h3>
                <h2>Email: {item.email}</h2>
                <p className="text-[#575A6E] text-sm mb-2">
                  Address: {item.address.address}
                  <br />
                  State: {item.address.state} <br />
                  City: {item.address.city}
                  <br />
                  Company: {item.company.name}
                </p>
              </figcaption>
            </div>
          </a>
        </figure>
      </div>
    </>
  );
}
