import { CiGrid42 } from "react-icons/ci";
import { HiUserGroup, HiMail } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { AiOutlineProfile, AiFillSetting } from "react-icons/ai";

export const navItems = [
  { name: "Dashboard", icon: <CiGrid42 />, route: "/admin/dashboard" },
  { name: "Users", icon: <HiUserGroup />, route: "/admin/users" },
  { name: "Payment", icon: <MdPayment />, route: "/admin/payments" },
  { name: "Profile", icon: <AiOutlineProfile />, route: "/admin/profile" },
  { name: "Settings", icon: <AiFillSetting />, route: "/admin/settings" },
  { name: "Message", icon: <HiMail />, route: "/admin/messages" },
];
