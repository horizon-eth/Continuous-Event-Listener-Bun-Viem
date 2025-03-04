import { TYPE, ADDRESS, EVENT_NAME } from "../config/config";
import { client_wss } from "../config/client";
import { callback } from "../callback/callback";
import { getABI } from "../utils/utils";

export const listener = async () => {
	const unwatch = client_wss.watchContractEvent({
		address: ADDRESS,
		abi: getABI(TYPE),
		eventName: EVENT_NAME,
		batch: false,
		strict: false,
		onLogs: (logs) => callback(logs),
		onError: (err) => console.error(err),
	});

	console.log(`Listening for ${EVENT_NAME} Event at ${ADDRESS} Address`);
};
