import { constants } from "@socket.tech/ll-core";
export * from "./time";

export const SOCKET_API_KEY = process.env.REACT_APP_SOCKET_API_KEY;
export const SOCKET_API = process.env.REACT_APP_SOCKET_API;
export const NATIVE_TOKEN_ADDRESS =
  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

export enum UserTxType {
  FUND_MOVR = "fund-movr",
  DEX_SWAP = "dex-swap",
  APPROVE = "approve",
  CLAIM = "claim",
  SIGN = "sign",
}

export const USER_TX_LABELS = {
  [UserTxType.APPROVE]: "Approve",
  [UserTxType.FUND_MOVR]: "Bridge",
  [UserTxType.DEX_SWAP]: "Swap",
  [UserTxType.CLAIM]: "Claim",
  [UserTxType.SIGN]: "Sign",
};

export const BRIDGE_DISPLAY_NAMES = {
  [constants.bridges.PolygonBridge]: "Polygon",
  [constants.bridges.Hop]: "Hop",
  [constants.bridges.Across]: "Across",
  [constants.bridges.Hyphen]: "Hyphen",
  [constants.bridges.refuel]: "Refuel",
  [constants.bridges.AnySwapRouterV4]: "Multichain",
  [constants.bridges.Celer]: "Celer",
  [constants.bridges.ArbitrumBridge]: "Arbitrum",
  [constants.bridges.OptimismBridge]: "Optimism",
};

export enum PrepareTxStatus {
  COMPLETED = 'completed',
  PENDING = 'pending',
  READY = 'ready',
}
