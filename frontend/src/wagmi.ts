import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'CampusZ',
  projectId: '64177632e3ef7058effd8cebdf93d314',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false,
});
