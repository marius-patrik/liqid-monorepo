/**
 * Window component types
 */

import type { ReactNode } from 'react';

export interface WindowProps {
	title?: ReactNode;
	children?: ReactNode;
	handleClose: () => void;
	isOpen: boolean;
	zIndex: number;
	onFocus: () => void;
	resetKey?: number;
}

export interface WindowManagerProps {
	children?: ReactNode;
}

export interface AppWindowProps {
	isOpen: boolean;
	handleClose: () => void;
	zIndex: number;
	onFocus: () => void;
	resetKey?: number;
}

export interface AppDefinition {
	id: string;
	title: string;
	icon: ReactNode;
	Component: React.ComponentType<AppWindowProps>;
}
