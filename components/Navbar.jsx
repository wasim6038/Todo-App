import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-gray-800 text-white font-bold">
        <Link href={"/"}>TODO</Link>
        <Link href={"/addTodo"}>Add Todo</Link>
    </nav>
  );
}
