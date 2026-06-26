import { useState, useCallback } from 'react';
import { REFERRAL_CODE } from '../lib/content';

export function useCopyReferral() {
  const [hasCopied, setHasCopied] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_CODE);
    } catch {
      const el = document.createElement('textarea');
      el.value = REFERRAL_CODE;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setHasCopied(true);
    setToastVisible(true);
    setTimeout(() => {
      setHasCopied(false);
      setToastVisible(false);
    }, 3000);
  }, []);

  return { handleCopy, hasCopied, toastVisible };
}
