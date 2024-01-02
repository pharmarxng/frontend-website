import { FilterIcon } from "@assets/svg"
import { cardContent, navContent } from "./static"
import { PlusYellowIcon } from "@assets/svg"
import { EditYellowIcon } from "@assets/svg"



const Products = () => {

  const renderdContent = navContent.map(i => {
    return <div className="text-sm h-[51px] p-2.5 font-semibold hover:text-secondary-300 hover:border-b-8 hover:border-secondary-300 hover:cursor-pointer whitespace-nowrap" key={i.name}>{i.name}</div>
  })

  const renderedCardContent = cardContent.map((card, index) => {
    if (index === 0) {
      return <div key={index} className="bg-secondary-300 rounded-lg flex flex-col items-center justify-center">
        <PlusYellowIcon />
        <div className="text-yellow-300 font-bold hover:opacity-30">Add new product</div>
      </div>
    }
    return <div key={index} className="bg-secondary-300 rounded-lg text-sm text-center">
      <div className="p-[10px] flex flex-col items-center">
        <div className="max-w-[300px] pt-3">
          <img src={card.image} alt="" className=" rounded-lg shadow-lg object-cover" />
        </div>
        <div className="text-white mt-2">{card.name}</div>
        <div className="flex gap-2 justify-center text-gray-400">
          <div>&#x20A6; {card.price}</div>
          <div>.</div>
          <div>{card.noOfAvailableUnits} pieces</div>
        </div>
      </div>
      
      <button className="flex justify-center items-center gap-2 bg-grey-400 w-full bg-opacity-25 h-[52px] text-yellow-300 font-bold hover:bg-opacity-40"> <EditYellowIcon />  Edit Product</button>

    </div>
  })

  return (
    <div className="text-black w-full p-8 bg-grey-200">
      <div className="flex items-center justify-between w-full">
        <div className="font-bold">Products Management</div>
        <button className="flex justify-center gap-2 bg-white p-3.5 rounded-lg w-64">
          <FilterIcon />
          Manage Categories
        </button>
      </div>
      <div className="grid gap-[1px] grid-rows-[50px,1fr] bg-white my-2 px-7">
        <nav className="flex justify-between border-b-4 overflow-x-auto">
          {renderdContent}
        </nav>
        <div className="py-9 grid grid-cols-4 grid-flow-row gap-y-4 gap-x-9 border-b-4 max-h-[400px] overflow-y-scroll">
          {renderedCardContent} 
        </div>
      </div>
      <div className="bg-white my-2 px-7 min-h-40 flex items-center gap-2">
        <button className=" min-w-44 p-3.5 rounded-lg text-center hover:bg-opacity-40">Discard Changes</button>
        <button className="min-w-44 p-4 rounded-lg text-center bg-yellow-400 hover:bg-opacity-80">save Changes</button>
      </div>
    </div>
  )
}

export default Products