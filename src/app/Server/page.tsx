
import Header from '../Components/Header'


type Data = {
    id: number,
    name: string,
    type: string,
    available: boolean
}

const Page = async () => {
    const url = await fetch("https://simple-books-api.glitch.me/books/")
    const data: Data[] = await url.json()
    return (

        <div className=" bg-gradient-to-r from-teal-300 via-green-300 to-emerald-300">
                 <Header/> 
                   <div className="py-12 px-8 sm:px-10 md:px-14 lg:px-20">
                <h1 className="mb-10 mt-1   0 text-center font-black  backdrop-blur-2xl text-4xl sm:text-5xl  text-emerald-900 drop-shadow-lg">
                   SERVER SIDE FETCHING
                </h1>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="w-full bg-white shadow-md rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-teal-100 "                        >
                            <p className="text-xl font-semibold text-teal-700 mb-4">{item.name}</p>
                            <p className="text-gray-700 mb-3">
                                <span className="font-medium">ID:</span> {item.id}
                            </p>
                            <p className="text-gray-700 mb-3">
                                <span className="font-medium">Type:</span> {item.type}
                            </p>
                            <p
                                className={`${
                                    item.available ? "text-green-700" : "text-red-700"
                                } font-semibold`}
                            >
                                {item.available ? "Available" : "Unavailable"}
                            </p>
                            <p
                                className={`text-right mt-5 text-sm font-medium underline transition-colors duration-300 cursor-pointer ${
                                    item.available ? "text-emerald-600 hover:text-emerald-800" : "text-red-600 hover:text-red-800"
                                }`}
                            >
                                View Details
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page;

