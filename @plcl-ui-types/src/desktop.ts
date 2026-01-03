/**
 * Desktop component types
 */

import type { ReactNode } from 'react';

export interface DesktopProps {
	children?: ReactNode;
}

export interface DesktopLayout {
	columns: number;
	rows: number;
}
