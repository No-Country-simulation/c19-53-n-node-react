import XIcon from "../assets/svg/XIcon";
import InstagramIcon from "../assets/svg/InstagramIcon";
import FacebookIcon from "../assets/svg/FacebookIcon";
import LinkedinIcon from "../assets/svg/LinkedinIcon";
//necesito hacer una linea

export default function Footer() {
  return (
    <div className="h-36 w-full bg-slate-200 flex flex-col  justify-end p-5 ">
      <div className="w-full h-5 ">
        <hr className=" border-gray-400" />
      </div>
      <div className="flex justify-end">
        <a href="">
          <XIcon width={"20"} />
        </a>
        <a href="">
          <InstagramIcon width={"20"} />
        </a>
        <a href="">
          {" "}
          <FacebookIcon width={"20"} />
        </a>
        <a href="">
          <LinkedinIcon width={"20"} />
        </a>
      </div>
      <div>
        <p className="text-center text-xs ">
          ©JustPay 2024 All Rights Reserved
        </p>
      </div>
    </div>
  );
}
