import { AiOutlineProduct } from "react-icons/ai";

import NavbarProduct from "@/components/NavbarProduct";
import ProductsTable from "@/components/ProductsTabale";
import CreateProductModal from "@/components/CreateProductModal";
import { useState } from "react";
import { useProducts } from "@/services/queries"; // فرض اینکه این مسیر درست است

export default function Home() {

  const [isCreateProductModalOpen, setIsCreateProductModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useProducts(page, search);
  const handleNextPage = () => {
    if (data?.data.data.length > 0) { // اگر محصولی وجود داشت
      setPage((prev) => prev + 1);
    }
  };
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => Math.max(prev - 1, 1));
    }
  };
  return (
    <div className=" w-full flex flex-col gap-y-10 bg-gray-100 min-h-screen">
      <div className="flex flex-col gap-y-10 p-8">
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


        <ProductsTable page={page} setPage={setPage} search={search} />


        <div className="flex justify-center gap-2 mt-4">
          <button onClick={handleNextPage} className="btn">صفحه بعد</button>
          <span className="text-gray-600 font-medium">صفحه {page}</span>
          <button onClick={handlePreviousPage} className="btn">صفحه قبل</button>
        </div>

        <CreateProductModal isOpen={isCreateProductModalOpen} setIsOpen={setIsCreateProductModalOpen} />
      </div>
    </div>
  );
}
