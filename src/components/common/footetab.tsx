import Link from "next/link";
import {  MouseEventHandler } from "react";
interface IProps {
  url: string;
  text: string;
  handleClick: MouseEventHandler<HTMLAnchorElement>;
  activeTab: string;
  TabIcon: JSX.Element;
}
const FooterTab = ({ url, text, handleClick, activeTab, TabIcon }: IProps) => {
  return (
    <Link href={"#"} onClick={handleClick}>
  <span className=" max-w-[40px] max-h-[40px] block">
  {TabIcon}
  </span>
      <span
        className={`${
          activeTab === url ? "text-secondary" : "text-gray3"
        } font-bold  text-sm block mt-2`}
      >
        {text}
      </span>
    </Link>
  );
};

export default FooterTab;
