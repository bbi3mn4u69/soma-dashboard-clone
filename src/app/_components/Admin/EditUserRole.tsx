import React, { useEffect } from "react";
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
  if (userRole) {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([userRole]));

    const selectedValue = React.useMemo(
      () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
      [selectedKeys],
    );
    const { setUserRoleControl } = useAppContext();
    // const manageUserRole = api.admin.editUserDetails.useMutation();
    useEffect(() => {

      switch (selectedValue) {
        case "User":
          setUserRoleControl("User");
          // manageUserRole.mutateAsync({ id: userId, role: "user" });

          break;
        case "Admin":
          setUserRoleControl("Admin");
          // manageUserRole.mutateAsync({ id: userId, role: "admin" });

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
          selectedKeys={selectedKeys}
          onSelectionChange={(e) => setSelectedKeys(e as Set<string>)}
        >
          <DropdownItem key="User">User</DropdownItem>
          <DropdownItem key="Admin">Admin</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  } else {
    return <CircularProgress size="sm" aria-label="Loading..." />;
  }
}
