import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-2">
      <footer className=" bg-gray-100 text-black">
        <div className="mx-auto  w-full max-w-screen-xl">
          <div className="grid ml-20 grid-cols-2 gap-8 px-4 py-2 lg:py-8 text-lg md:grid-cols-3">
            <div className="">
              <Image
                src="/car-image.jpg"
                alt="car image"
                height={220}
                width={160}
              />
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Car Info</h2>
              <ul className="">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Car Details
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Home</h2>
              <ul className="  font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" text-sm text-gray-900 p-6 text-center bg-gray-200 font-size text-xl">
            © 2023 <Link href="/">Car Details™</Link>. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
