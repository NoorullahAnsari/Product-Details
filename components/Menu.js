import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import AddProduct from "../pages/AddProduct";

export default function Menu() {
  const { data: session } = useSession();

  return (
    <div className="flex p-3 gap-8">
      <div className="p-1 hover:bg-sky-300 transition duration-300 hover:scale-125 rounded active:bg-purple-700">
        <Link href="/">Home</Link>
      </div>

      <div className="p-1 hover:bg-sky-300 transition duration-300 hover:scale-125 rounded active:bg-purple-700">
        <Link href="/">About</Link>
      </div>
      <div className="p-1 hover:bg-sky-300 transition duration-300 hover:scale-125 rounded active:bg-purple-700">
        <Link href="/">Contact</Link>
      </div>
      <div className="flex">
        {session?.user ? (
          <>
            <div className="p-1 hover:bg-sky-300 transition duration-300 hover:scale-125 rounded active:bg-purple-700">
              <Link href="/AddProduct">Add Product</Link>
            </div>

            <div
              onClick={() => signOut()}
              className="p-1 flex justify-end gap-2 transition duration-300 hover:bg-sky-300 hover:scale-125 rounded active:bg-purple-700"
            >
              <AiOutlineLogout className="text-3xl text-red-500" />
              <p>Sign Out</p>
            </div>
          </>
        ) : (
          <div
            onClick={() => signIn()}
            className="p-1 flex justify-end gap-2 transition duration-300  hover:bg-sky-300 hover:scale-125 rounded active:bg-purple-700"
          >
            <AiOutlineLogin className="text-3xl text-blue-700" />
            <p>Sign In</p>
          </div>
        )}
      </div>
    </div>
  );
}
