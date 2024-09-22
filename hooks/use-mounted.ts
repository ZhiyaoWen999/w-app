"use client";

import * as React from 'react';

export function useMounted() {
  const [mounted, setMounted] = React.useState(false); // Fixed spacing
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}