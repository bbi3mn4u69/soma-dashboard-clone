import { useEffect, useState, useMemo } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";
import { api } from "~/trpc/react";
import { useAppContext } from "../context";
export default function RoleControl({
  userRole,
  userId,
}: {
  userRole: string | null;
  userId: string;
}) {
  const { setUserRoleControl } = useAppContext();

  const [selectedKeys, setSelectedKeys] = useState(new Set([userRole]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  useEffect(() => {
    switch (selectedValue) {
      case "User":
        setUserRoleControl("user");
        break;
      case "Admin":
        setUserRoleControl("admin");
        break;
    }
  }, [selectedValue]);
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Select role for user"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys as Set<string>}
        onSelectionChange={(e) => setSelectedKeys(e as Set<string>)}
      >
        <DropdownItem key="User">User</DropdownItem>
        <DropdownItem key="Admin">Admin</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
