import React from 'react'

export const useTruncate = (text, maxLength) => {
  if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + "...";
      }
      return text;
    
};
