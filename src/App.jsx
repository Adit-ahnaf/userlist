import { useEffect, useState } from "react";
import SearchandSort from "./components/SearchandSort";
import UserList from "./components/UserList";

function App() {
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const findSearch = (e, searchText) => {
    e.preventDefault();

    if (searchText) {
      setSearchText(searchText);

      const fnd = data.filter(
        (item) =>
          item.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          item.lastName.toLowerCase().includes(searchText.toLowerCase())
      );
      
      setData([...fnd]);
    }
  };

  const clearSearch = (data) => {
    if (data.length === 0) fetchData();
  };

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setData(data.users);
    } catch (e) {
      console.log(e);
    } finally {
     setLoading(false)
    }
  };

  function handleSorting(e) {
    let value;
    switch (e.target.value) {
      case "name":
        value = data.sort((a, b) => {
          if (a.firstName < b.firstName) return -1;
          if (a.firstName > b.firstName) return 1;
          if (a.firstName == b.firstName) return 0;
        });
        break;
      case "email":
        value = data.sort((a, b) => {
          if (a.email < b.email) return -1;
          if (a.email > b.email) return 1;
          if (a.email == b.email) return 0;
        });

        break;
      case "company":
        value = data.sort((a, b) => {
          if (a.company.name < b.company.name) return -1;
          if (a.company.name > b.company.name) return 1;
          if (a.company.name == b.company.name) return 0;
        });
        break;
    }

    setData([...value]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    findSearch({ preventDefault: () => {} }, searchText);
  }, [searchText]);

  return (
    <>
      <div className="bg-orange-100 min-h-[100vh] ">
        <h1 className="text-center text-[50px] py-5 ">Users List</h1>
        <SearchandSort
          findSearch={findSearch}
          clearSearch={clearSearch}
          handleSorting={handleSorting}
        />
        {
          loading ? <h1 className="text-center text-[24px] ">Please Wait...</h1> : <UserList data={data}/>    
        }
        
      </div>
    </>
  );
}

export default App;
