# Continuous Event Listening

A TypeScript project for real-time event listening using viem.sh and Bun runtime. This project provides high-performance event listening capabilities for ERC20 tokens and Uniswap V2/V3 pools.

## Features

-   Real-time event monitoring using WebSocket connections
-   Support for multiple contract types:
    -   ERC20 Tokens (Transfer, Approval events)
    -   Uniswap V2 Pools (Swap, Sync, Mint, Burn events)
    -   Uniswap V3 Pools (Swap, Flash, Mint, Burn, Collect events)
-   Type-safe contract interactions using viem.sh
-   High-performance execution with Bun runtime
-   Configurable through environment variables

## Prerequisites

-   [Bun](https://bun.sh) v1.1.30 or higher
-   An Ethereum WebSocket provider URL
-   Node.js 16.x or higher (for development tools)

## Tech Stack

-   **Runtime**: [Bun](https://bun.sh) - A fast all-in-one JavaScript runtime
-   **Ethereum Client**: [viem](https://viem.sh) v2.23.6 - Type-safe Ethereum interactions
-   **Smart Contract Standards**:
    -   [@openzeppelin/contracts](https://www.npmjs.com/package/@openzeppelin/contracts) v5.2.0
    -   [@uniswap/v2-core](https://www.npmjs.com/package/@uniswap/v2-core) v1.0.1
    -   [@uniswap/v3-core](https://www.npmjs.com/package/@uniswap/v3-core) v1.0.1

## Installation

1. Clone the repository:

```bash
git clone https://github.com/horizon-eth/continuous-event-listening.git
cd continuous-event-listening
```

2. Install dependencies:

```bash
bun install
```

3. Create a `.env` file based on `example.env`:

```bash
cp example.env .env
```

4. Configure your environment variables in `.env`:

```env
PROVIDER_WSS_URL="your_websocket_provider_url"
TYPE="TOKEN"  # or "UNISWAPV2" or "UNISWAPV3"
ADDRESS="your_contract_address"
EVENT_NAME="Transfer"  # or other supported events
```

## Usage

Start the event listener:

```bash
bun run index.ts
```

### Supported Event Types

#### ERC20 Token Events

-   Transfer
-   Approval

#### Uniswap V2 Pool Events

-   Swap
-   Sync
-   Mint
-   Burn

#### Uniswap V3 Pool Events

-   Swap
-   Flash
-   Mint
-   Burn
-   Collect
-   IncreaseObservationCardinalityNext
-   SetFeeProtocol
-   CollectProtocol

## Configuration

The project uses environment variables for configuration. See `example.env` for all available options:

-   `PROVIDER_WSS_URL`: WebSocket provider URL for Ethereum network
-   `TYPE`: Contract type ("TOKEN", "UNISWAPV2", or "UNISWAPV3")
-   `ADDRESS`: Contract address to monitor
-   `EVENT_NAME`: Event name to listen for

## Performance Optimization

For optimal event listening performance:

1. Use a reliable WebSocket provider
2. Configure WebSocket connection parameters:

    ```typescript
    const client_wss = createPublicClient({
      chain: mainnet,
      transport: webSocket(PROVIDER_WSS_URL, {
        keepAlive: true,
        reconnect: true,
        retryCount: 10,
        retryDelay: 100,
        timeout: 10000,
      }),
    });
    ```

3. Adjust polling intervals based on your needs:
    ```typescript
    watchContractEvent({
      // ... other options
      poll: true,
      pollingInterval: 1000, // Adjust based on requirements
      batch: false, // Process events immediately
    });
    ```

## Development

The project uses TypeScript with strict type checking. Key files:

-   `src/listener/Listener.ts`: Main event listening logic
-   `src/config/client.ts`: WebSocket client configuration
-   `src/callback/callback.ts`: Event processing logic
-   `src/abi/abi.ts`: Contract ABIs
-   `src/utils/utils.ts`: Utility functions

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
