import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Menu = [
  { title: "HomePage", path: "/", icon: <AiOutlineHome /> },
  { title: "Members", path: "/member", icon: <AiOutlineUser /> },
  { title: "Products", path: "/product", icon: <AiOutlineShoppingCart /> },
];

export default Menu;
