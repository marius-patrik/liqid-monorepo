import { Button, Card } from "../../@plcl-core/dist";
import { Desktop } from "@plcl/ui";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>PLC Playground</h1>
      <Card>
        <h2>Welcome to PLC Playground</h2>
        <p>This is a playground for testing PLC components.</p>
        <Button>Test Button</Button>
      </Card>
      <Desktop />
    </div>
  );
}
