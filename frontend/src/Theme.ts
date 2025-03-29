import { Theme } from '@rainbow-me/rainbowkit';

export const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: 'rgba(0, 0, 0, 0.8)', // Darker overlay for better contrast
  },
  colors: {
    accentColor: '#00B7DB', // Blue gradient accent
    accentColorForeground: '#FFFFFF', // White text for contrast
    actionButtonBorder: '#11C359',
    actionButtonBorderMobile: '#11C359',
    actionButtonSecondaryBackground: 'linear-gradient(90deg, #48FF5A 0%, #11C359 100%)', // Green gradient
    closeButton: '#FFFFFF',
    closeButtonBackground: '#00B7DB',
    connectButtonBackground: '#00B7DB', // Blue gradient for Connect Button
    connectButtonBackgroundError: '#FF4500', // Darker Red for Errors
    connectButtonInnerBackground: '#11C359', // Green gradient inner effect
    connectButtonText: '#FFFFFF',
    connectButtonTextError: '#FFFFFF',
    connectionIndicator: '#11C359', // Deep Green indicator for status
    downloadBottomCardBackground: '#101010', // Deep Dark background
    downloadTopCardBackground: '#00B7DB', // Blue for branding
    error: '#FF4500', // Dark Red for errors
    generalBorder: '#001406', // Light Blue Borders
    generalBorderDim: '#11C359', // Dark Green Borders
    menuItemBackground: '#2A2A2A', // Dark Gray for menu items
    modalBackdrop: 'rgba(0, 0, 0, 0.85)', // Darker backdrop
    modalBackground: '#1E1E1E', // Almost black for high contrast
    modalBorder: '#1E1E1E',
    modalText: '#FFFFFF',
    modalTextDim: '#B0C4B0', // Softer White-Greenish text
    modalTextSecondary: '#11C359', // Green secondary text for branding
    profileAction: '#00B7DB',
    profileActionHover: '#008AB6',
    profileForeground: '#2A2A2A',
    selectedOptionBorder: '#11C359', // Light Green for selected options
    standby: '#FFA500', // Bright Orange for standby
  },
  fonts: {
    body: 'Arial, sans-serif',
  },
  radii: {
    actionButton: '12px', // Rounded buttons
    connectButton: '12px',
    menuButton: '12px',
    modal: '14px',
    modalMobile: '12px',
  },
  shadows: {
    connectButton: '0 2px 6px rgba(0, 183, 219, 0.5)', // **Subtle blue glow**
    dialog: '0 2px 8px rgba(0, 0, 0, 0.6)', // **Soft shadow for modals**
    profileDetailsAction: '0 1px 3px rgba(0, 0, 0, 0.4)', // **Light shadow**
    selectedOption: '0 0 0 2px rgba(17, 195, 89, 0.5)', // **Soft green selection border**
    selectedWallet: '0 0 0 2px rgba(17, 195, 89, 0.5)',
    walletLogo: '0 1px 3px rgba(0, 0, 0, 0.4)', // **Very subtle shadow**
  },
};
