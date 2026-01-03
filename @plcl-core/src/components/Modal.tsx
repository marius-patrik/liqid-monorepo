import type { FC, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { useState } from 'react';

/**
 * Props for the Modal component.
 */
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	/** Whether the modal is visible */
	isOpen: boolean;
	/** Callback when the modal is closed */
	onClose: () => void;
	/** Optional callback for save action */
	onSave?: () => void;
	/** Custom close button (overrides default) */
	closeButton?: ReactNode;
	/** Custom save button (overrides default) */
	saveButton?: ReactNode;
}

/**
 * Modal - A dialog overlay component with glassmorphism styling.
 *
 * Features:
 * - Animated open/close transitions
 * - Click outside to close
 * - Escape key to close
 * - Optional save action with button
 * - Customizable close and save buttons
 *
 * @example Basic modal
 * ```tsx
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *   <h2>Modal Title</h2>
 *   <p>Modal content goes here</p>
 * </Modal>
 * ```
 *
 * @example Modal with save action
 * ```tsx
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   onSave={handleSave}
 * >
 *   <form>Form content</form>
 * </Modal>
 * ```
 */
const Modal: FC<PropsWithChildren<ModalProps>> = ({
	isOpen,
	children,
	onClose,
	onSave,
	closeButton,
	saveButton,
	className = '',
	id,
	...props
}) => {
	const componentId = id || 'Modal';
	const [isClosing, setIsClosing] = useState(false);

	if (!isOpen && !isClosing) return null;

	const handleClose = () => {
		setIsClosing(true);
	};

	const handleAnimationEnd = () => {
		if (isClosing) {
			setIsClosing(false);
			onClose();
		}
	};

	return (
		<div
			id={componentId}
			className={`system-overlay-50 inset-0 flex items-center justify-center bg-black/20 ${className}`}
			onClick={handleClose}
			{...props}
		>
			<div
				className={`glass rounded-4xl p-4 flex flex-col gap-3 ${isClosing ? 'animate-scale-out' : 'animate-scale-in'}`}
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.key === 'Escape' && handleClose()}
				onAnimationEnd={handleAnimationEnd}
			>
				{children}

				<div className="flex flex-row gap-2 mt-2">
					{closeButton ?? (
						<button
							type="button"
							className="button glass rounded-full px-4 py-2 grow"
							onClick={handleClose}
						>
							Close
						</button>
					)}
					{onSave &&
						(saveButton ?? (
							<button
								type="button"
								className="button primary rounded-full px-4 py-2 grow"
								onClick={onSave}
							>
								Save
							</button>
						))}
				</div>
			</div>
		</div>
	);
};

export default Modal;
