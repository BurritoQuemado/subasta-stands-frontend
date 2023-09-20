import { Link } from "react-router-dom";
function ListItem({ item}) {

    return (            
        
        <div>
            <Link 
                to={'/galeria/'+item.id}
            >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
            </Link>
        </div>
    )
}

export default ListItem;