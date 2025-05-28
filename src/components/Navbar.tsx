import { useContext, createContext } from "react"
import { useNavigate } from 'react-router-dom'

interface NameContextType {
  name: string;
}
const NameContext = createContext<NameContextType>({ name: 'Roshni' });

const Navbar = () => {
  const { name } = useContext(NameContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
        <div className="flex justify-between items-center pl-5 mt-2">
            <h1 className="text-[#2962ff] font-pacifico text-3xl m-2">Get Shoppy</h1>
            <div className="search-bar flex items-center gap-2">
                <input type="text" className="w-[900px] border-solid b-gray-500 rounded-3xl p-2 shadow-md" placeholder="Search" />
            </div>
            <div className="name-bar flex items-center gap-2 mr-2">
                <div className="w-15 h-15"><img src='/Female Profile-595b40b85ba036ed117db719.svg' alt="user" /></div>
                <div className="text-gray-500 text-sm pr-5">
                    <p>Hi, {name}</p>
                    <button className="text-[#2962ff] text-sm" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
