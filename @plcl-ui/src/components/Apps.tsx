import { AppIcon } from "@plcl/core";
import { useDesktopLayout } from "../hooks/useDesktopLayout";
import { useIconSize } from "../hooks/useIconSize";

/**
 * Props for the DesktopIcons component.
 */
interface DesktopIconsProps {
  /** Callback to open an app by ID */
  openApp: (id: string) => void;
}

/**
 * DesktopIcons - Renders draggable app icons on the desktop.
 *
 * This component displays all registered apps as draggable icons on the desktop surface.
 * Features include:
 *
 * - Drag and drop to reposition icons
 * - Click to launch apps
 * - Keyboard navigation (Enter/Space to launch)
 * - Respects icon size preference (small/large)
 * - Shows/hides titles based on user preference
 *
 * This component is used internally by Shell's desktop variant.
 *
 * @example
 * ```tsx
 * <Desktop>
 *   <DesktopIcons openApp={openApp} />
 * </Desktop>
 * ```
 */
export const DesktopIcons = ({ openApp }: DesktopIconsProps) => {
  const { items } = useDesktopLayout();
  const { iconSize, showTitle } = useIconSize();

  const size = iconSize === "small" ? "sm" : "md";

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("text/plain", id);
    const rect = (e.target as Element).getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    e.dataTransfer.setData(
      "offset",
      JSON.stringify({ x: offsetX, y: offsetY }),
    );
  };

  return (
    <>
      {items.map((item) => {
        return (
          // biome-ignore lint/a11y/useSemanticElements: Wrapper div needed for drag-and-drop functionality
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openApp(item.id);
              }
            }}
            style={{
              position: "absolute",
              left: item.position.x,
              top: item.position.y,
              transition: "left 0.2s, top 0.2s",
            }}
            className="absolute cursor-pointer hover:scale-105 active:scale-95 transition-transform"
          >
            <AppIcon
              name={item.label}
              icon={item.icon}
              size={size}
              showTitle={showTitle}
              onClick={() => openApp(item.id)}
            />
          </div>
        );
      })}
    </>
  );
};
