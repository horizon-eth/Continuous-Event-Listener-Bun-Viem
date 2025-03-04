import type { Abi } from "viem";
import { ERC20ABI, UniswapV2PoolABI, UniswapV3PoolABI } from "../abi/abi";

export const getABI = (type: "TOKEN" | "UNISWAPV2" | "UNISWAPV3"): Abi | [] => {
	if (type === "TOKEN") return ERC20ABI;
	if (type === "UNISWAPV2") return UniswapV2PoolABI;
	if (type === "UNISWAPV3") return UniswapV3PoolABI;
	return [];
};
