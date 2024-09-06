import { ModalContainer, ModalContent, CloseButton } from './Modal.styled';
type ModalProps = {
    content: React.ReactNode;
    isVisible: boolean;
    onClose: () => void;
}
export default function Modal({ content, isVisible, onClose }: ModalProps) {
  if (!isVisible) return null; // Do not render if not visible

  return (
    <ModalContainer role='dialog' aria-modal='true'>
      <ModalContent >
        <CloseButton onClick={onClose} aria-label='close Modal'>&times;</CloseButton>
        {content}
      </ModalContent>
    </ModalContainer>
  );
}
