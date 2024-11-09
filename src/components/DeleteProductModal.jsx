import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Close from "../assets/images/Close.png";
import { useDeleteProduct } from "../services/mutation";
import { toast } from "react-toastify";

export default function DeleteProductModal({ isOpen, setIsOpen, product , onDeleteSuccess }) {

    const { mutate } = useDeleteProduct();

    const deleteHandler = (id) => {
        const data = {
            ids: [id],
        };
        console.log(data);

        mutate(
            { data },
            {
                onSuccess: () => {
                    console.log("Product deleted successfully");
                    setIsOpen(false);
                    if (onDeleteSuccess) onDeleteSuccess(); // فراخوانی prop onDeleteSuccess پس از حذف موفقیت‌آمیز
                },
                onError: (error) => {
                    toast.error(error.response?.data?.message || "خطایی رخ داده است");
                },
            }
        );
    }
    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <Dialog static open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                        {/* Backdrop with blur effect */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-matn/10 backdrop-filter backdrop-blur-md"
                        />
                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                            <DialogPanel
                                as={motion.div}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="  
                                w-full max-w-md bg-white rounded-xl overflow-hidden shadow-sm  
                                "
                            >

                                <header className="p-4 flex flex-col items-center justify-center gap-y-3">
                                    <img src={Close} alt="" />
                                    <p className="title-large ">آیا از حذف این محصول مطمئنید؟</p>
                                </header>
                                <div className="  
                                max-h-[calc(100vh-6rem)]  
                                overflow-y-auto  
                                ">
                                    <div className=" px-6 py-4 flex justify-center items-center gap-x-3">
                                        <button className="btn grow bg-danger border-none "
                                            onClick={() => deleteHandler(product.id)}>
                                            <p className="text-white body-normal">
                                                حذف
                                            </p>
                                        </button>
                                        <button className="btn grow bg-matn/20 border-none "
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <p className="text-matn body-normal">
                                                لغو
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>
        </>
    );
}