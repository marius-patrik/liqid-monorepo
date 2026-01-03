import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { type StylingProps, getStylingClasses } from '../styles';
import Text from './Text';

/**
 * Available card style variants.
 * - `glass` - Glassmorphism style with blur effect (default)
 * - `glass-highlight` - Highlighted glass style for emphasis
 * - `flat` - Solid background without glass effect
 * - `outline` - Bordered card without fill
 * - `unstyled` - No default styling applied
 */
export type CardVariant =
	| 'glass'
	| 'glass-highlight'
	| 'flat'
	| 'outline'
	| 'unstyled';

/**
 * Props for the Card component.
 */
export interface CardProps
	extends HTMLAttributes<HTMLDivElement>,
		StylingProps {
	/** Visual style variant */
	variant?: CardVariant;
	/** Content to display in the card header */
	header?: React.ReactNode;
	/** Content to display in the card footer */
	footer?: React.ReactNode;
}

/**
 * Card - A container component with glassmorphism styling and optional header/footer.
 *
 * Cards provide a way to group related content with consistent styling. They support
 * optional header and footer sections, multiple visual variants, and full StylingProps.
 *
 * @example Basic card
 * ```tsx
 * <Card>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 *
 * @example Card with header and footer
 * ```tsx
 * <Card header="Title" footer={<Button>Action</Button>}>
 *   <p>Card content</p>
 * </Card>
 * ```
 *
 * @example Outlined card
 * ```tsx
 * <Card variant="outline" p="lg">
 *   <p>Outlined card</p>
 * </Card>
 * ```
 */
const Card: FC<PropsWithChildren<CardProps>> = ({
	variant = 'glass',
	header,
	footer,
	children,
	className = '',
	id,
	// Styling props
	m,
	mt,
	mb,
	ml,
	mr,
	mx,
	my,
	p,
	pt,
	pb,
	pl,
	pr,
	px,
	py,
	radius,
	shadow,
	size,
	...props
}) => {
	const componentId = id || 'Card';
	const stylingClasses = getStylingClasses({
		variant,
		m,
		mt,
		mb,
		ml,
		mr,
		mx,
		my,
		p,
		pt,
		pb,
		pl,
		pr,
		px,
		py,
		radius,
		shadow,
	});

	// Handle size for Card if needed (e.g., padding/spacing scale)
	// Default padding is p-3 gap-2.
	// If size is provided, we can scale these.
	// Skip default padding for unstyled variant
	let sizeClasses = '';
	if (size && variant !== 'unstyled') {
		if (size === 'xs') sizeClasses = 'p-1 gap-1 text-xs';
		if (size === 'sm') sizeClasses = 'p-2 gap-1.5 text-sm';
		if (size === 'md') sizeClasses = 'p-3 gap-2 text-base';
		if (size === 'lg') sizeClasses = 'p-4 gap-3 text-lg';
		if (size === 'xl') sizeClasses = 'p-6 gap-4 text-xl';

		// Override with specific p props if present
		if (p || px || py || pt || pb || pl || pr) {
			sizeClasses = sizeClasses.replace(/p-\S+/g, '');
		}
	}

	const defaultPadding =
		variant !== 'unstyled' &&
		!size &&
		!p &&
		!px &&
		!py &&
		!pt &&
		!pb &&
		!pl &&
		!pr
			? 'p-3 gap-2'
			: '';

	return (
		<div
			id={componentId}
			className={`${stylingClasses} ${variant !== 'unstyled' ? sizeClasses : ''} ${defaultPadding} flex flex-col ${className}`}
			{...props}
		>
			{header && (
				<Text
					variant="text"
					size="lg"
					align="center"
					className="mx-auto font-medium p-2"
				>
					{header}
				</Text>
			)}
			<div className="flex flex-col gap-2">{children}</div>
			{footer && (
				<div className="flex flex-col gap-2 md:flex-wrap">{footer}</div>
			)}
		</div>
	);
};

export default Card;
