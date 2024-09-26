import { ContextApi } from '@iguanadex/localization'
import { LinkExternal } from '@iguanadex/uikit'

const config = (t: ContextApi['t']) => {
  return [
    {
      title: t('I sold an NFT, where’s my XTZ?'),
      description: [
        t(
          'Trades are settled in WXTZ, which is a wrapped version of XTZ used on Etherlink. That means that when you sell an item, WXTZ is sent to your wallet instead of XTZ.',
        ),
        t('You can instantly swap your WXTZ for XTZ at no cost on Etherlink.'),
      ],
    },
    {
      title: t('How can I list my NFT collection on the Market?'),
      description: [
        t('In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed.'),
        t('We are now accepting applications from NFT collection owners seeking to list their collections.'),
        <LinkExternal href="https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/nft-market-applications">
          {t('Please apply here')}
        </LinkExternal>,
      ],
    },
    {
      title: t('What are the fees?'),
      description: [
        t(
          '100% of all platform fees taken by IguanaDEX from sales are used to buy back and BURN IGN tokens in our weekly IGN burns.',
        ),
        t(
          'Platform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the CAKE burns.',
        ),
      ],
    },
  ]
}

export default config
