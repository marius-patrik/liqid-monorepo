import { Shell } from "@plcl/ui";
import {
	Button,
	Card,
	Text,
	Title,
	Stack,
	Group,
	Divider,
	Container,
	SidebarNavigation,
} from "@plcl/core";
import { IconBook, IconComponents, IconCode } from "@tabler/icons-react";

const navItems = [
	{ id: "getting-started", label: "Getting Started", icon: <IconBook size={18} /> },
	{ id: "components", label: "Components", icon: <IconComponents size={18} /> },
	{ id: "examples", label: "Examples", icon: <IconCode size={18} /> },
];

function Sidebar() {
	return (
		<SidebarNavigation
			items={navItems}
			activeItem="getting-started"
			onItemClick={(id) => console.log("Navigate to:", id)}
			header={
				<Group gap="sm" style={{ padding: "1rem" }}>
					<IconBook size={24} />
					<Title order={4}>PLC Docs</Title>
				</Group>
			}
		/>
	);
}

function DocsContent() {
	return (
		<Container size="lg" style={{ padding: "2rem" }}>
			<Stack gap="xl">
				<div>
					<Title order={1}>PLC Library Documentation</Title>
					<Text size="lg">
						A comprehensive React component library with glassmorphism styling
						inspired by Apple's Liquid Glass design.
					</Text>
				</div>

				<Divider />

				<Stack gap="lg">
					<Title order={2}>Quick Start</Title>

					<Card>
						<Stack gap="md">
							<Title order={3}>Installation</Title>
							<Text>Install the core library and UI components:</Text>
							<Card style={{ fontFamily: "monospace", fontSize: "0.9rem" }}>
								npm install @plcl/core @plcl/ui
							</Card>
						</Stack>
					</Card>

					<Card>
						<Stack gap="md">
							<Title order={3}>Basic Usage</Title>
							<Text>Import components and wrap your app with ThemeProvider:</Text>
							<Card style={{ fontFamily: "monospace", fontSize: "0.9rem", whiteSpace: "pre" }}>
{`import { Button, Card, ThemeProvider } from '@plcl/core';
import '@plcl/core/styles.css';

function App() {
  return (
    <ThemeProvider>
      <Card>
        <Button>Hello World</Button>
      </Card>
    </ThemeProvider>
  );
}`}
							</Card>
						</Stack>
					</Card>
				</Stack>

				<Divider />

				<Stack gap="lg">
					<Title order={2}>Component Preview</Title>
					<Group gap="md">
						<Button>Default Button</Button>
						<Button variant="glass-highlight">Highlighted</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="text">Text Only</Button>
					</Group>
				</Stack>
			</Stack>
		</Container>
	);
}

export default function App() {
	return (
		<Shell variant="sidebar" sidebar={<Sidebar />}>
			<DocsContent />
		</Shell>
	);
}
