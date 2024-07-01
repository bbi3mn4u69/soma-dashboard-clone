import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useAppContext } from "../../context";
import HeroFilter from "./HeroFilter";

const MobileFilterModal = () => {
  const { isMobileFilterOpen, setIsMobileFilterOpen } = useAppContext();
  
  return (
    <>
      <div>
        <Modal size="sm" isOpen={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
          <ModalContent>
            {(isMobileFilterOpen) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Filter List
                </ModalHeader>
                <ModalBody>
                  <HeroFilter />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default MobileFilterModal;