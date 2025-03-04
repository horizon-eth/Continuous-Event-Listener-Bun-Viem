import { createPublicClient, webSocket } from "viem";
import { mainnet } from "viem/chains";
import { PROVIDER_WSS_URL } from "./config";

export const client_wss = createPublicClient({
	chain: mainnet,
	transport: webSocket(PROVIDER_WSS_URL, {
		keepAlive: true,
		reconnect: true,
		retryCount: 10,
		retryDelay: 100,
		timeout: 10000,
	}),
});
