import { Chip } from "@nextui-org/react";

const SomaFilterChip = () => {
  return (
    <>
      <div>
        <Chip
          size="sm"
          classNames={{
            base: "bg-purple-200",
            content: "font-semibold text-purple-600",
          }}
        >
          All
        </Chip>
      </div>
    </>
  );
};

const TopChips = () => {
  return (
    <>
      <div>
        <SomaFilterChip />
      </div>
    </>
  );
};

export default TopChips;
