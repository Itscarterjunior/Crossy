// Root layout with metadata
import React from 'react';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Crossy</title>
        <meta name="description" content="Crossy - Connect with nearby people" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
