export default function Navbar() {
  return (
    <nav className="bg-green-100 p-4 w-full  border-b-4 border-teal-500  backdrop-filter backdrop-blur-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-teal-800 font-extrabold  text-xl sm:text-2xl md:text-4xl">DATA FETCHING</h1>
        <ul className="flex space-x-4 font-bold text-xl">
          <li>
            <a href="/" className="text-teal-600 hover:text-teal-700">Home</a>
          </li>
       
        </ul>
      </div>
    </nav>
  );
}
