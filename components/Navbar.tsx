import Link from "next/link";
import Container from "./layouts/Container";
import MainNav from "./MainNav";
import getCategories from "@/actions/get-categories.action";
import NavbarActions from "./NavbarActions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/">
            <p className="text-3xl font-semibold">Illuminia</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
