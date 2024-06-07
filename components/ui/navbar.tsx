import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full border-0 py-4 lg:px-24 px-10 bg-gray-800">
      <h1 className={`text-3xl text-white`}>
        <Link href="/">Tasty 😋</Link>
      </h1>
    </nav>
  );
};

export default NavBar;
