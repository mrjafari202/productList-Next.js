import { AiOutlineProduct } from "react-icons/ai";

import NavbarProduct from "@/components/NavbarProduct";
import ProductsTable from "@/components/ProductsTabale";
import CreateProductModal from "@/components/CreateProductModal";
import { useState } from "react";

export default function Home() {

  const [isCreateProductModalOpen, setIsCreateProductModalOpen] = useState(false);
  const [page, setPage] = useState(1); 
  const [search , setSearch] = useState("");

  return (
    <div className="flex flex-col gap-y-10">
      <NavbarProduct onSearch={setSearch} />

      <div className='flex justify-between items-center'>
        <div className="flex gap-x-2">
          <AiOutlineProduct className="size-6" />
          <p className="headline-medium text-matn">مدیریت کالا</p>
        </div>
        <button className="btn bg-btnCreate border-none" onClick={() => setIsCreateProductModalOpen(true)}>
          <p className="text-white body-normal">افزودن محصول</p>
        </button>
      </div>


      <ProductsTable page={page} search={search} />


      <div className="flex justify-center gap-2 mt-4">
        <button onClick={() => setPage((prev) => prev + 1)} className="btn">صفحه بعد</button>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} className="btn">صفحه قبل</button>
      </div>

      <CreateProductModal isOpen={isCreateProductModalOpen} setIsOpen={setIsCreateProductModalOpen} />
    </div>
  );
}
