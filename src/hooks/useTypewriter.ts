import { useEffect, useState } from 'react';

const FRAME_DELAY = 74;
const PAUSE_DELAY = 1500;

export const useTypewriter = (items: string[]): string => {
  const [itemIndex, setItemIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      return undefined;
    }

    const currentValue = items[itemIndex % items.length];
    const isComplete = characterIndex === currentValue.length;
    const isEmpty = characterIndex === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && !isComplete) {
          setCharacterIndex((value) => value + 1);
          return;
        }

        if (!isDeleting && isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isEmpty) {
          setCharacterIndex((value) => value - 1);
          return;
        }

        setIsDeleting(false);
        setItemIndex((value) => (value + 1) % items.length);
      },
      isComplete && !isDeleting ? PAUSE_DELAY : FRAME_DELAY,
    );

    return () => window.clearTimeout(timeout);
  }, [characterIndex, isDeleting, itemIndex, items]);

  if (items.length === 0) {
    return '';
  }

  return items[itemIndex % items.length].slice(0, characterIndex);
};
