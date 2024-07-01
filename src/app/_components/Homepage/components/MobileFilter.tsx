"use client";

import { Button } from "@nextui-org/react";
import { FilterIcon } from "../../Icon";
import { useAppContext } from "../../context";

const MobileFilter = () => {
  const { setIsMobileFilterOpen } = useAppContext();

  const OnClick = () => {
    setIsMobileFilterOpen(true);
  };

  return (
    <div className="sm:hidden">
      <div className="flex justify-end">
        <Button
          variant="bordered"
          size="md"
          startContent={<FilterIcon />}
          onPress={OnClick}
        >
          Filter
        </Button>
      </div>
    </div>
  );
};

export default MobileFilter;
