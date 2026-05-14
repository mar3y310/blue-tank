import Link from "next/link"

const NotFoundPage = () => {
  return (
    <section className=" flex flex-col items-center bg-white fix-height mt-[123px]">
            <h1 className="text-7xl text-gray-800 my-5 font-semibold">404</h1>
            <p className="text-3xl text-gray-500">Page Not Found</p>
            <Link href='/' className="text-2xl text-blue-500 underline">Go To Home</Link>
    </section>
  )
}

export default NotFoundPage