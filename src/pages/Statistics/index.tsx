import { Link } from "react-router-dom"
import { navContent } from "@pages/Products/static"


const Statistics = () => {

  const renderdContent = navContent.map(i => {
    return <div className="text-sm h-[51px] p-2.5 font-semibold hover:text-secondary-300 hover:border-b-4 hover:border-secondary-300" key={i.name}>{i.name}</div>
  })


  return (
    <div className=" text-black w-full p-8 bg-grey-200">
      <div className="flex items-center justify-between w-full">
        <div className="font-bold">Products Management</div>
        <div className="flex justify-center gap-2 bg-white p-3.5 rounded-lg w-64">
          <Link to="http://localhost:5173/admin/products" className="text-blue-600">Products</Link>
          /
          <Link to="" className="text-blue-600">Supplement</Link>
          /
          <Link to="" className="text-gray-500">Edit</Link>
        </div>
      </div>

      <div className="grid gap-[1px] grid-rows-[50px,1fr] bg-white my-2 px-7">
        <nav className="flex justify-between border-b-4">
          {renderdContent}
        </nav>
        <div className="grid grid-rows-[672px, 1fr]">
          <div className="border"></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Statistics