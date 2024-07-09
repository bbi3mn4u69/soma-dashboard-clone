import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Avatar,
  Input,
  DateInput,
} from "@nextui-org/react";
import { useAppContext } from "../context";
import { api } from "~/trpc/react";
import RoleControl from "./EditUserRole";
import { EditIcon } from "~/app/_components/Icon";
import { useState } from "react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { CalendarIcon } from "~/app/_components/Icon";

const EditUserDetailModal = () => {
  const { isUserDetailEdit, setIsUserDetailEdit, userId } = useAppContext();
  const { data: user } = api.admin.getSpecificUser.useQuery({ id: userId! });
  const [editUserName, setEditUserName] = useState<string | undefined | null>(
    user?.name,
  );
  const [datePicker, setDatePicker]  = useState<CalendarDate | undefined | null>(
    user?.emailVerified ? parseDate(user.emailVerified.toISOString()) : undefined
  )

  


  return (
    <>
      <div>
        <Modal isOpen={isUserDetailEdit} onOpenChange={setIsUserDetailEdit}>
          <ModalContent>
            {(isUserDetailEdit) => (
              <>
                {user && (
                  <>
                    <ModalHeader>User Details</ModalHeader>
                    <ModalBody>
                      <div className="pb-5">
                        <div className="flex flex-row items-center justify-start gap-5">
                          <Avatar
                            isBordered
                            radius="lg"
                            src={
                              user.image ??
                              "https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg"
                            }
                            className="h-20 w-20 text-large"
                          />
                          <div className="flex flex-col">
                            <div className="flex flex-row items-center justify-start gap-2 text-base uppercase text-gray-400">
                              <Input
                                type="text"
                                variant="bordered"
                                label="Name"
                                defaultValue={user.name!}
                                onChange={(e) =>
                                  setEditUserName(e.target.value)
                                }
                              />
                              <EditIcon />
                            </div>
                            <div className="text-base text-gray-400">
                              {user.email}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="py-3 text-lg font-medium">
                            User Role
                          </div>
                          <div className="flex flex-row items-center justify-start gap-2 px-4 text-base uppercase text-gray-400">
                            <RoleControl
                              userRole={user.role}
                              userId={user.id}
                            ></RoleControl>
                            <EditIcon />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="py-3 text-lg font-medium">Joined</div>
                          <div className="px-4 text-base text-gray-400">
                            <DateInput
                              value={datePicker}
                              onChange={setDatePicker}
                              placeholderValue={new CalendarDate(1995, 11, 6)}
                              labelPlacement="outside"
                              variant="bordered"
                              endContent={
                                <EditIcon />
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="danger"
                        variant="light"
                        onPress={isUserDetailEdit}
                      >
                        Close
                      </Button>
                      <Button color="primary" onPress={isUserDetailEdit}>
                        Confirm
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default EditUserDetailModal;
