import { Modal, Button } from "@heroui/react";

interface DeleteUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    userName: string;
}

export default function DeleteUserModal({ isOpen, onClose, onConfirm, userName }: DeleteUserModalProps) {
    return (
        <Modal isOpen={isOpen} onOpenChange={onClose}>
            <Modal.Backdrop>
                <Modal.Container>
                    <>
                        <Modal.Header className="flex flex-col gap-1">Confirm Delete</Modal.Header>
                        <Modal.Body className="py-6">
                            <p>
                                Are you sure you want to delete user <span className="text-red-500 font-bold">{userName}</span>?
                                This action cannot be undone.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="ghost" onPress={onClose}>
                                Cancel
                            </Button>
                            <Button className="bg-red-500 text-white" onPress={onConfirm}>
                                Yes, Delete User
                            </Button>
                        </Modal.Footer>
                    </>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}