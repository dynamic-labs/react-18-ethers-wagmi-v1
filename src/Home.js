import { useState } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react";

const Home = () => {
  const { primaryWallet } = useDynamicContext();
  const [signedMessage, setSignedMessage] = useState(null);

  const signMessage = async () => {
    try {
      const signer = await primaryWallet?.connector?.getSigner();
      const signed = await signer?.signMessage("example");
      setSignedMessage(signed);
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  return (
    <div>
      <button onClick={() => signMessage()}>Sign Message</button>
      <p>{JSON.stringify(signedMessage)}</p>
    </div>
  );
};

export default Home;
