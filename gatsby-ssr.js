/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');

export const onRenderBody = ({ setPreBodyComponents }) => {
  // Script to prevent FOUC (Flash of Unstyled Content) with theme
  const themeScript = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var isDark = theme ? theme === 'dark' : prefersDark;
        
        if (isDark) {
          document.documentElement.classList.add('dark-mode');
        } else {
          document.documentElement.classList.add('light-mode');
        }
      } catch (e) {
        // Default to dark mode if there's an error
        document.documentElement.classList.add('dark-mode');
      }
    })();
  `;

  setPreBodyComponents([
    React.createElement('script', {
      key: 'theme-script',
      dangerouslySetInnerHTML: { __html: themeScript },
    }),
  ]);
};
