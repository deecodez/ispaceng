export const initGA = () => {
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-KH6J47GFLE`;
    document.head.appendChild(script);
  
    // Initialize Google Analytics
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-KH6J47GFLE');
    };
  };