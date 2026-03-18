import { Link } from "react-router-dom";

function Navbar(){

return(

<div className="bg-indigo-600 text-white px-8 py-4 flex justify-between">

<h1 className="font-bold text-xl">
AI Resume Analyzer
</h1>

<div className="space-x-6">

<Link to="/upload">Upload</Link>
<Link to="/history">History</Link>

</div>

</div>

)

}

export default Navbar