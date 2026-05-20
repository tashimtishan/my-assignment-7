import { Link } from "react-router-dom";
const Notfound = () => {
    return (
      // this is the only div we need
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-9xl font-bold text-[#244D3F]">404</h1>
      <p className="text-2xl font-semibold mt-4 mb-2">Page Not Found</p>
      <p className="text-[#64748B] mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-[#244D3F] text-white px-6 py-3 rounded-md">Go Back Home</Link>
    </div>
    );
};

export default Notfound;