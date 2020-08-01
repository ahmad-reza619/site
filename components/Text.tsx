import { useIsDark } from '../hooks';

function Text({ children }: { children: any }) {
  const [isDark] = useIsDark();
  return <span className={isDark ? 'light-text' : 'dark-text'}>{children}</span>;
}

export default Text;
