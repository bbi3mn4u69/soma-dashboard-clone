import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@nextui-org/react";
  import { useAppContext } from "../context";
  import Filter from "./Filter";
  
  
  const MobileFilterModal = () => {
    const { isMobileFilterPortforlioOpen, setIsMobileFilterPortforlioOpen } = useAppContext();
    
    return (
      <>
        <div>
          <Modal size="sm" isOpen={isMobileFilterPortforlioOpen} onOpenChange={setIsMobileFilterPortforlioOpen} className="h-fit w-screen">
            <ModalContent>
              {(isMobileFilterPortforlioOpen) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Filter List
                  </ModalHeader>
                  <ModalBody className="overflow-scroll ">
                    <Filter />
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