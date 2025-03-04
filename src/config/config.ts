import type { Address } from "viem";

export const PROVIDER_HTTPS_URL = process.env.PROVIDER_HTTPS_URL;
export const PROVIDER_WSS_URL = process.env.PROVIDER_WSS_URL;

export const TYPE = process.env.TYPE as "TOKEN" | "UNISWAPV2" | "UNISWAPV3";
export const ADDRESS = process.env.ADDRESS as Address;
export const EVENT_NAME = process.env.EVENT_NAME;
