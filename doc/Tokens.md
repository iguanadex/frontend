# Tokens management

All the tokens are in `/packages/tokens/src/[chainId].ts`. They are instances of the `Token` class defined in the SDK.
Before adding a new **farm** or **pool** you need to make sure the Tokens are in this file.
To add a Token to the exchange lists:

- For the default list: `/config/constant/tokenLists/pancake-default.tokenlist.json`
- For other lists, check the token-lists project in the `pancake-toolkit` repo
- To blacklist a token: `/config/constant/tokenListspancake-unsupported.tokenlist.json`

# Add a token

Here are the steps to add a token on IguanaDEX:

1. Add the logo of the token by opening a PR on the [assets](https://github.com/iguanadex/assets) repo in the `asset/` folder. The name of the asset should be the address of the token on Etherlink.
   Note: the address of the token needs to be using the **checksum (not in full lower case)** and the only type of image supported for now is `.png`.
2. Add the token on the frontend by opening a PR on the [frontend](https://github.com/iguanadex/frontend) repo. You need to:
   - add the token information in `/packages/tokens/src/constants/etherlink.ts` following this format
   ```
   name: new ERC20Token(
       ChainId.ETHERLINK,
       '0x0000000000000000000000000000000000000000',   // address of your token
       18,                                             // decimals of your token
       'symbol',                                       // symbol of your token
       'name',                                         // name of your token
       'https://www.myproject.com/',                   // project link
   ),
   ```
   - add the token information in `/config/constant/tokenLists/pancake-default.tokenlist.json` at the bottom following this format
   ```
   {
     "name": "name",
     "symbol": "symbol",
     "address": "0x0000000000000000000000000000000000000000",
     "chainId": 42793,
     "decimals": 18,
     "logoURI": "https://raw.githubusercontent.com/IguanaDEX/assets/main/assets/0x0000000000000000000000000000000000000000.png"
   },
   ```
   Note: the logoURI should correspond to your token icon you added in the step 1.
