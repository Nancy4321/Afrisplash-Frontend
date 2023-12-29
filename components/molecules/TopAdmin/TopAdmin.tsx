import React from "react";
import { BellIcon, GiftIcon } from "@heroicons/react/24/outline";
import Search from "components/atoms/Search/Search";
import AdminLoginAvatar from "../adminLoginAvatar";
import PropTypes, { InferProps } from "prop-types";

const TopAdminProps = {
  placeholder:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  avatarText:PropTypes.string.isRequired,
  notificationPopUp:PropTypes.any
}


export default function TopAdmin({
  placeholder,
  avatar,
  avatarText,
  notificationPopUp
}: InferProps<typeof TopAdminProps>): JSX.Element {
  return (
    <div className="h-20 flex items-center sticky top-0 z-40 w-full justify-between bg-[#FAFAFA]">
      <div className="w-5/12">
        <Search placeholder={placeholder} />
      </div>
      <section className="flex space-x-20 items-center">
        <div className="flex space-x-10">
          <span>
            <GiftIcon className="w-5 h-5" />
          </span>
          <span onClick={notificationPopUp}>
            <BellIcon className="w-5 h-5" />
          </span>
        </div>
        <div>
          <AdminLoginAvatar imageSrc={avatar} text={avatarText} />
        </div>
      </section>
    </div>
  );
}
