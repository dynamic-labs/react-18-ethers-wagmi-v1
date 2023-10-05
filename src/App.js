import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import Home from "./Home";

const App = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "8b5038f9-171c-480b-9f3c-294d868aeb74",
      }}
    >
      <DynamicWagmiConnector>
        <DynamicWidget />
        <Home />
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
};

export default App;
