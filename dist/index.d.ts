import { ReactNode } from 'react';
import { ChainId, UserTxType } from '@socket.tech/socket-v2-sdk';

type supportedBridges =
  | "polygon-bridge"
  | "hop"
  | "anyswap-router-v4"
  | "hyphen"
  | "arbitrum-bridge"
  | "connext"
  | "celer"
  | "across"
  | "optimism-bridge"
  | "refuel-bridge";

interface WidgetProps {
  API_KEY: string;
  provider?: any;

  // Chain Ids array
  sourceNetworks?: number[];
  destNetworks?: number[];

  // Chain Id
  defaultSourceNetwork?: number;
  defaultDestNetwork?: number;

  // Token list
  // You can pass the url to the token list or pass the list as JSON, as long as it matches the schema
  // Token list schema - https://uniswap.org/tokenlist.schema.json
  tokenList?: string | Currency[];

  // Token address
  // Pass the string "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" for native token
  defaultSourceToken?: string;
  defaultDestToken?: string;

  // To enable only single tx quotes
  singleTxOnly?: boolean;

  // To enable refuel
  // Refuel feature allows the users to transfer gas tokens across the chains
  enableRefuel?: boolean;

  // To enable same chain swaps
  enableSameChainSwaps?: boolean;

  // To include bridges - only the bridges passed will be included
  includeBridges?: supportedBridges[];

  // To exclude bridges - bridges passed will be excluded from the original supported list
  excludeBridges?: supportedBridges[];

  locale?: string;
  title?: ReactNode | string;
  customize?: Customize;
}

interface Customize {
  // Width of the widget
  width?: number;

  // To make the widget responsive to the parent element.
  responsiveWidth?: boolean;

  // Border radius [0-1]
  borderRadius?: number;

  // All colors should stricktly be in RGB format
  // Theme color
  accent?: string;
  onAccent?: string;

  // Primary color - Used for background. Container, modal and almost everywhere.
  primary?: string;

  // Secondary color - Used for foreground. Hover effects, cards, etc.
  secondary?: string;

  // Primary text color - For headings and texts with emphasis.
  text?: string;

  // Secondary text color
  secondaryText?: string;

  // Interactive colors - for dropdowns
  interactive?: string;
  onInteractive?: string;

  // Outline color - used for lines, borders and icons
  outline?: string;

  // Font family
  fontFamily?: string;
}

interface Network {
  chainId: number;
  currency: Currency;
  explorers: string[];
  icon: string;
  isL1: boolean;
  name: string;
  receivingEnabled: boolean;
  refuel: {
    sendingEnabled: boolean;
    receivingEnabled: boolean;
  };
  rpcs: string[];
  sendingEnabled: string;
}

interface Currency {
  address: string;
  decimals: number;
  icon?: string;
  minNativeCurrencyForGas?: string;
  name: string;
  symbol: string;
  chainId?: number;
  logoURI: string;
  chainAgnosticId?: string | null;
}

interface TokenWithBalance {
  chainId?: ChainId;
  tokenAddress?: string;
  userAddress?: string;
  balance?: string;
  decimals?: number;
  icon?: string;
  symbol?: string;
  name?: string;
}

interface Route {
  routeId: string;
  fromAmount: string;
  chainGasBalances: any;
  minimumGasBalances: any;
  toAmount: string;
  userBridgeNames: Array<BridgeName>;
  totalUserTx: number;
  totalGasFeesInUsd: number;
  recipient: string;
  sender: string;
  userTxs: Array<UserTx>;
  serviceTime: number;
}

interface UserTx {
  userTxType: UserTxType;
}

interface BridgeName {
  name: string;
  icon?: string;
  serviceTime: number;
  displayName: string;
}

interface TxDetails {
  txHash: string;
  userTxType: string;
  timeStamp: number;
}

declare function Bridge(props: WidgetProps): JSX.Element;

export { Bridge, BridgeName, Currency, Customize, Network, Route, TokenWithBalance, TxDetails, UserTx, WidgetProps };
