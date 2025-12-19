// Meta Pixel tracking helpers
declare global {
  interface Window {
    fbq: any;
  }
}

export const trackAddToCart = (productName: string, value: number, currency: string = 'EUR') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToCart', {
      content_name: productName,
      content_type: 'product',
      value: value,
      currency: currency,
    });
  }
};

export const trackInitiateCheckout = (value: number, currency: string = 'EUR') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      value: value,
      currency: currency,
    });
  }
};

export const trackPurchase = (value: number, currency: string = 'EUR') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency,
    });
  }
};

export const trackViewContent = (contentName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
    });
  }
};

