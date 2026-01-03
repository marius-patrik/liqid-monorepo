import { Button, Card } from "../../@plcl-core/dist";
import { Desktop } from "@plcl/ui";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>PLC Documentation</h1>
      <Card>
        <h2>Welcome to PLC Documentation</h2>
        <p>This is the documentation site for PLC components.</p>
        <Button>Get Started</Button>
      </Card>
      <Desktop />
    </div>
  );
}
