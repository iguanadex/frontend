import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade and earn on IguanaDEX.'),
  bodyText: t('Trade any token on Etherlink in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.iguanadex.com/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'XTZ', alt: t('XTZ token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'IGN', alt: t('IGN token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('IguanaDEX makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: t('Pie chart') },
      { src: 'stonks', alt: t('Stocks chart') },
      { src: 'folder', alt: t('Folder with cake token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('IGN makes our world go round.'),
  bodyText: t(
    'IGN token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56',
    text: t('Buy IGN'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: t('Small 3d pancake') },
      { src: 'top-right', alt: t('Small 3d pancake') },
      { src: 'coin', alt: t('CAKE token') },
      { src: 'top-left', alt: t('Small 3d pancake') },
    ],
  },
})
