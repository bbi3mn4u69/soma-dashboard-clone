"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  ChipProps,
  getKeyValue,
} from "@nextui-org/react";
import { EditIcon } from "~/app/_components/Icon";
import { DeleteIcon } from "~/app/_components/Icon";
import { EyeIcon } from "~/app/_components/Icon";
import { api } from "~/trpc/react";
import { useAppContext } from "~/app/_components/context";

const UserTable = () => {
  const { data: allUsers } = api.admin.getAllUsers.useQuery();
  const { setIsUserDetailView, setUserId, setIsUserDetailEdit } =
    useAppContext();
  const deleteSpecificUser = api.admin.deleteSpecificUser.useMutation();

  const utils = api.useContext();
  const deleteUser = async (id: string) => {
    await deleteSpecificUser.mutateAsync({ id });
    await utils.admin.getAllUsers.invalidate();
  };

  return (
    <div className="h-full w-full max-w-[300px] px-7 pb-7 pr-3 sm:max-w-[400px] sm:pb-7 sm:pr-7 lg:max-w-none">
      <Table aria-label="Example table with custom cells" className="w-full">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {(allUsers ?? []).map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <User
                  avatarProps={{
                    size: "lg",
                    radius: "lg",
                    src:
                      user.image ??
                      "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg",
                  }}
                  description={user.email}
                  name={user.name}
                >
                  {user.email}
                </User>
              </TableCell>
              <TableCell className="uppercase text-gray-500">
                {user.role}
              </TableCell>

              <TableCell>
                <div className="relative flex items-center gap-5">
                  <Tooltip content="Details">
                    <span
                      className="cursor-pointer text-lg text-default-400 active:opacity-50"
                      onClick={() => {
                        setIsUserDetailView(true);
                        setUserId(user.id);
                      }}
                    >
                      <EyeIcon />
                    </span>
                  </Tooltip>

                  <Tooltip content="Edit user">
                    <span
                      className="cursor-pointer text-lg text-default-400 active:opacity-50"
                      onClick={() => {
                        setIsUserDetailEdit(true);
                        setUserId(user.id);
                      }}
                    >
                      <EditIcon />
                    </span>
                  </Tooltip>

                  <Tooltip color="danger" content="Delete user">
                    <span
                      className="cursor-pointer text-lg text-danger active:opacity-50"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      <DeleteIcon />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
