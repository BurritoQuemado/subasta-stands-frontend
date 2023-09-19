import { Link } from "react-router-dom";
function ListItem({ item }) {

    return (            
        
        <div>
            <Link to={item.href} target="_blank">
                <div className="w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover object-top group-hover:opacity-75"
                />
                </div>
                <h3 className="mt-2 text-mid text-bold text-gray-700">{item.title}</h3>
                <h3 className="mt-2 text-sm text-gray-700">{item.desc}</h3>
            </Link>
            <hr className='mt-8 bg-gray-500 w-full  h-1 lg:h-4' />
        </div>
    )
}

export default ListItem;