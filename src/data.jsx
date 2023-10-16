import { AiFillHome, AiOutlineUserSwitch } from "react-icons/ai";
import { FaFolderOpen, FaEnvelopeOpenText } from "react-icons/fa";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <AiFillHome />,
    path: "/",
  },
  {
    id: 2,
    name: "About",
    icon: <AiOutlineUserSwitch />,
    path: "/about",
  },
  {
    id: 3,
    name: "Protfolio",
    icon: <FaFolderOpen />,
    path: "/protfolio",
  },
  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpenText />,
    path: "/contact",
  },
];
