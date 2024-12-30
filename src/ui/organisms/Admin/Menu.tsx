import React from "react";

interface MenuProps{
    menuItems : string[],
    selectedMenuItem : string,
    onClick : (item : string) => void
}

const Menu: React.FC<MenuProps> = ({menuItems, selectedMenuItem, onClick})=>{

    return(
        <div className="w-[15%] bg-primary p-4 rounded-r-lg">
            <h2 className="text-lg font-bold mb-4 text-white">Menu</h2>
            <ul>
                {menuItems.map((item) => (
                    <li
                        key={item}
                        className={`cursor-pointer p-2 mb-2 rounded-md ${selectedMenuItem === item ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                        onClick={() => onClick(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu