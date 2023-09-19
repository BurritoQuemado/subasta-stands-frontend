import { useState } from "react";
import { Link } from "react-router-dom";
function ListItem({ item }) {

    return (            
        
        <div>
            <div className="w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover object-top group-hover:opacity-75"
            />
            </div>
            <h3 className="mt-2 text-mid text-bold text-gray-700">{item.title}</h3>
            <h3 className="mt-2 text-sm text-gray-700">{item.desc}</h3>
        </div>
    )
}

export default ListItem;