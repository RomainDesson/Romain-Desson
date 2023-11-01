import { animated, useSpring } from 'react-spring';
import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';
import { ModalOverlay, ModalContainer, Modal, CloseIconWrapper } from "./style.ts";
import {ReactNode, useEffect, useState} from "react";

interface ModalProps {
    isVisible: boolean;
    handleClose: () => void;
    children: ReactNode;
}

export const ModalComponent = (props: ModalProps) => {
    const { isVisible, handleClose, children } = props
    const [isShrinking, setIsShrinking] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isVisible]);

    const modalAnimation = useSpring({
        transform: isShrinking ? 'scale(0)' : (isVisible ? 'scale(1)' : 'scale(0)'),
        opacity: isShrinking ? 0 : (isVisible ? 1 : 0),
        config: {
            tension: 200,
            friction: 20,
        },
        onRest: () => {
            if (isShrinking) {
                setIsShrinking(false);
            } else {
                setContentVisible(true);
            }
        },
    });

    const contentFade = useSpring({
        opacity: contentVisible ? 1 : 0,
    });

    const handleShrinkAndClose = () => {
        setIsShrinking(true);
        setTimeout(() => {
            handleClose();
        }, 150);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleShrinkAndClose();
        }
    };

    return isVisible ? ReactDOM.createPortal(
        <animated.div>
            <ModalOverlay onClick={handleShrinkAndClose}>
                <animated.div style={modalAnimation}>
                    <ModalContainer>
                        <CloseIconWrapper onClick={handleShrinkAndClose}>
                            <MdClose size={24} />
                        </CloseIconWrapper>
                        <Modal>
                            <animated.div style={contentFade}>
                                {children}
                            </animated.div>
                        </Modal>
                    </ModalContainer>
                </animated.div>
            </ModalOverlay>
        </animated.div>,
        document.body
    ) : null;
};
