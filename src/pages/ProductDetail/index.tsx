import { Link } from "react-router-dom"
import { navContent } from "@pages/Products/static"
import { StarBlankIcon } from "@assets/svg"
import { StarsIcon } from "@assets/svg"
import { ConfirmIcon } from "@assets/svg"


const ProductDetails = () => {

  const renderdContent = navContent.map(i => {
    return <div className="text-sm h-[51px] p-2.5 font-semibold hover:text-secondary-300 hover:border-b-4 hover:border-secondary-300" key={i.name}>{i.name}</div>
  })


  return (
    <div className=" text-black w-full p-8 bg-grey-200">
      <div className="flex items-center justify-between w-full py-3">
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
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-10 pt-4 min-h-[675px] py-[50px]">
            <div className="grid place-content-center">
              <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61h3+-OxMuL.jpg" alt="" className="rounded-lg m-2 object-cover h-full " />
            </div>
            <div className="flex justify-center items-center">
              <div className="p-5 flex flex-col gap-14 bg-gray-100 rounded-xl">
                <div>
                  <div className="text-2xl font-bold text-secondary-300 mb-4">Brome balance supplement</div>
                  <div className="flex justify-start gap-2">
                    <StarsIcon /> <StarsIcon /> <StarsIcon /> <StarsIcon /> <StarBlankIcon></StarBlankIcon>
                    <div className="text-lg">35 reviews</div>
                  </div>
                </div>

                <div className="text-xl">Discover soothing relief for your sore throat with RECKITT BENCKISER Strepsils Original Flavor Throat Lozenges. Specially formulated to provide comfort and alleviate throat discomfort, these lozenges offer a trusted solution to help you feel better.
                </div>

                <div className="text-2xl font-bold grid gap-7">
                  <div className="flex gap-24">
                    <div>Quantity</div>
                    <div className="flex gap-2">< ConfirmIcon />In stock</div>
                  </div>
                  <button className="text-center bg-white w-full h-20 rounded-xl shadow-md hover:opacity-70">20 pieces</button>
                </div>                
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="grid gap-12 text-lg">
              <div className="font-bold text-3xl">Details</div>
              <div >Free from artificial colors and flavors</div>
              <div className="flex flex-col gap-4">
                <div className="font-bold">Age Requirement</div>
                <div>Suitable for adults and children over 6 years</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-bold">Directions for Use</div>
                <div>Place 1 lozenge in your mouth and allow it dissolve slowly. Do not chew or swallow whole.</div>
                <div>Repeat every 2 to 3 hours as needed, up to a maximum of 12 lozenges in 24 hours.</div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="font-bold">Safety Information</div>
                <div>Keep out of reach of children</div>
                <div>If symptoms persist, consult a healthcare professional</div>
                <div>Do not exceed the recommended dosage</div>
              </div>

              <table className="w-full border-2 border-collapse">
                <caption className="text-left text-lg font-bold">Specifications</caption>
                <tr className="border-b border-b-black border-b-2">
                  <th className="text-left w-64 h-16 border-x-2 bg-gray-100 text-lg p-5 ">Concern</th>
                  <td className="p-5 text-lg">Alcohol free</td>
                </tr>
                <tr className="border-b">
                  <th className="text-left w-64 h-16 border-x-2 bg-gray-100 text-lg p-5">Form</th>
                  <td className="p-5 text-lg">Solid</td>
                </tr>
                <tr className="border-b border-b-black border-b-2">
                  <th className="text-left w-64 h-16 border-x-2 bg-gray-100 text-lg p-5">Primary Flavor</th>
                  <td className="p-5 text-lg">Strepsils original flavor</td>
                </tr>
                <tr className="border-b">
                  <th className="text-left w-64 h-16 border-x-2 bg-gray-100 text-lg p-5">Product type</th>
                  <td className="p-5 text-lg">Cold & flu treatments</td>
                </tr>
                <tr className="border-2 border-b-black border-b-2">
                  <th className="text-left w-64 h-16 border-x-2 bg-gray-100 text-lg p-5">Quantity</th>
                  <td className="p-5 text-lg">Single pack</td>
                </tr>
                <tr className="border-b">
                  <th className="text-left w-64 h-16 border-x-2 bg-gray-100 text-lg p-5">Symptom</th>
                  <td className="p-5 text-lg">Sore throat</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails