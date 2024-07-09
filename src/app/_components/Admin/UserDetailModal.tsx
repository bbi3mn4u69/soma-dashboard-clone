import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Avatar,
} from "@nextui-org/react";
import { useAppContext } from "../context";
import { api } from "~/trpc/react";
const UserDetailModal = () => {
  const { isUserDetailView, setIsUserDetailView, userId } = useAppContext();
  const { data: user } = api.admin.getSpecificUser.useQuery({ id: userId! });
  return (
    <>
      <div >
        <Modal isOpen={isUserDetailView} onOpenChange={setIsUserDetailView}>
          <ModalContent>
            {(isUserDetailView) => (
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
                            <div className="text-xl font-medium">
                              {user.name}
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
                          <div className="px-4 text-base uppercase text-gray-400">
                            {user.role}
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="py-3 text-lg font-medium">Joined</div>
                          <div className="px-4 text-base text-gray-400">
                            {user.emailVerified
                              ? user.emailVerified.toLocaleDateString()
                              : "No Data"}
                          </div>
                        </div>
                      </div>
                    </ModalBody>
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

export default UserDetailModal;
