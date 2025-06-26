import { CiFacebook } from "react-icons/ci";
import { FaInstagram ,FaTwitter,FaYoutube} from "react-icons/fa";
import logo from '../assets/images/logo.png'
function Footer() {
  return (
   <div className=" bg-black pt-10 pb-10">
   {/* contains all part of footer  */}
      <img src={logo} className=" w[60px] h-[120px] m-auto"></img>
     <div className=" leading-[40px] text-white px-10 py-5 text-xl font-mono flex md:justify-evenly vsm:flex-wrap vsm:justify-evenly ">
      {/*container contains all other than logo */}
      <div className=" mt-8">
        {/* first part of footer */}
        <p className=" cursor-pointer  hover:text-amber-400 hover:duration-500">Find a dealer</p>
        <p className="  cursor-pointer hover:text-amber-400 hover:duration-500">Carrers</p>
        <p className="  cursor-pointer hover:text-amber-400 hover:duration-500">News room</p>
        <p className="  cursor-pointer hover:text-amber-400 hover:duration-500">Contact</p>
      </div>
      <div className=" mt-8">
      {/* second part of footer */}
      <p className=" font-bold text-[27px]">Brands</p>

      <p className=" cursor-pointer  hover:text-amber-400 hover:duration-500">Thundra</p>
      <p className=" cursor-pointer  hover:text-amber-400 hover:duration-500">Axelion</p>
      <p className=" cursor-pointer  hover:text-amber-400 hover:duration-500">Ignitra</p>
      <p className=" cursor-pointer  hover:text-amber-400 hover:duration-500">Trovex</p>
    </div>
    <div className=" text-3xl text-white gap-4 vsm:mt-10">
      {/* icons of footer */}
      <p className=" font-bold text-[27px] ">Follow us</p>
      <CiFacebook className=" inline-block ml-1 cursor-pointer"/>
      <FaInstagram className=" inline-block ml-1 cursor-pointer"/>
      <FaTwitter className=" inline-block ml-1 cursor-pointer"/>
      <FaYoutube className=" inline-block ml-1 cursor-pointer"/>
    </div>
    </div>
   </div>
  );
}
export default Footer;
