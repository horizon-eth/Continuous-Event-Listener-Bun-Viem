export const callback = async (logs: any) => {
	try {
		const [{ transactionHash, address, eventName, args }] = logs;

		console.log(
			"transactionHash:",
			transactionHash,
			"address:",
			address,
			"eventName:",
			eventName,
			"args:",
			args,
			"date:",
			new Date().toLocaleString("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).replace(",", "")
		);

		/* Add Your Logic */
		/* Add Your Logic */
		/* Add Your Logic */
	} catch (error) {
		throw error;
	}
};
