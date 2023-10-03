import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {


  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const value = {
    page,
    totalPages,
    posts,
    isLoading,
    setValues,
    setLoading,
    setPage,
    setPosts,
    setTotalPages,
    handleClick
  };

  async function setValues(page = 1) {
    setLoading(true);
    const {data} = await axios.get(`${baseUrl}?page=${page}`);
    try {
        // console.log("inside appcontext"+" "+data);
        setPage(data.page);
        setTotalPages(data.totalPages);
        setPosts(data.posts);
        setLoading(false);
    } catch (error) {
        console.log(error);
        console.error("Error fetching data from API");
    }
    
  }


  function handleClick(page){
    setValues(page);
  }


  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
