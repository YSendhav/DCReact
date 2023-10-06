import React from "react";
import SideNavigationLayout from "../../component/ui/SideNavigationLayout";

type Props = {};

const NoPageFoundPage = (props: Props) => {
  return (
    <>
      <SideNavigationLayout>
      <div className="flex items-center text-[25px] font-bold justify-center">
        Page Under development
      </div>
      </SideNavigationLayout>
    </>
  );
};

export default NoPageFoundPage;
