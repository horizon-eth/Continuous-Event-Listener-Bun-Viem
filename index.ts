import { listener } from "./src/listener/listener";

const main = async () => {
	try {
		await listener();
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

await main();
