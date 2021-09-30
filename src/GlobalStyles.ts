import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
  }

  body,
  html {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 'Noto Color Emoji';
  }

  .text-white-75 {
    color: fade-out(${({ theme }) => theme.colors.highlight.text}, .25);
  }

  hr.divider {
    max-width: 3.25rem;
    border-width: 0.2rem;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  hr.light {
    border-color: ${({ theme }) => theme.colors.highlight.text};
  }

  .btn-xl {
    padding: 1.25rem 2.25rem;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    border-radius: 10rem;
  }

  .page-section {
    padding: 3rem 0;
  }
`
