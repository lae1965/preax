import { useEffect, useState } from 'react';

const useAgentSystem = () => {
  const [os, setOs] = useState<'win' | 'mac'>('win');

  useEffect(() => {
    if (
      navigator.userAgent.indexOf('Win') != -1 ||
      navigator.userAgent.indexOf('X11') != -1 ||
      navigator.userAgent.indexOf('Linux') != -1
    )
      setOs('win');
    if (navigator.userAgent.indexOf('Mac') != -1) setOs('mac');
  }, []);

  return os;
};

export default useAgentSystem;
