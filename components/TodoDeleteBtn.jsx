'use client';

import { deleteTodo } from "@/app/action";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function TodoDeleteBtn({ id }) {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteTodo(id);
    router.refresh();
  };

  return (
    <button onClick={handleDelete}>
        <HiOutlineTrash size={24} className="text-red-500 hover:text-red-700" />
    </button>
  );
}