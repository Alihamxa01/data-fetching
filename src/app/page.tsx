import Link from "next/link";
import Header from "./Components/Header";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-screen flex items-center justify-center px-6 bg-gradient-to-br from-green-300 via-lime-200 to-emerald-300">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-emerald-800 drop-shadow-md">
            Discover Your Data Path.
          </h1>
          <p className="text-lg font-bold text-center text-emerald-600 mt-4">
            Pick your desired approach to continue.
          </p>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:justify-between items-center">
            <Link href="/Server">
              <button className="hover:scale-[1.05] duration-300 w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-teal-500 hover:shadow-lg transition-all">
                Server Side
              </button>
            </Link>
            <Link href="/Client">
              <button className="hover:scale-[1.05] duration-300 w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-teal-500 hover:shadow-lg transition-all">
                Client Side
              </button>
            </Link>
          </div>
        </div>



        
      </div>

      <Footer/>
      </div>

 
  );
}
