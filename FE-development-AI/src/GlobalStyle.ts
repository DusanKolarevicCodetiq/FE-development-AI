import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #3182ce;
    --color-primary-dark: #2c5282;
    --color-text: #2d3748;
    --color-text-light: #4a5568;
    --color-border: #e2e8f0;
    --color-bg: #f7fafc;
    --color-bg-card: #ffffff;
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --transition: all 0.2s ease;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    
    @media (max-width: 1024px) {
      font-size: 15px;
    }
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    color: var(--color-text);
    background-color: var(--color-bg);
    min-height: 100vh;
    text-rendering: optimizeLegibility;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
    font-weight: 600;
    color: var(--color-text);
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--color-primary-dark);
    }
  }

  button, 
  input, 
  select, 
  textarea {
    font-family: inherit;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    transition: var(--transition);
    
    &:focus-visible {
      box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
    }
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Utility classes for responsive hiding */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Responsive table styles */
  .responsive-table {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      height: 8px;
    }
    
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  /* Animation for loading states */
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  /* Print styles */
  @media print {
    body {
      background: white;
      color: black;
      font-size: 12pt;
    }
    
    .no-print {
      display: none !important;
    }
  }
`;
