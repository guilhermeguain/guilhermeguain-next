import { MOBILE_BREAKPOINT } from '../../../lib/constants';

import { useWindowSize } from '../../../hooks/useWindowSize';

export const useHeader = () => {
  const { width } = useWindowSize();

  const isMobile = width < MOBILE_BREAKPOINT;

  return {
    isMobile,
  };
};
