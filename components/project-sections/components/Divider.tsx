import type { DividerComponent } from '@/data/types';

interface DividerProps {
  component?: DividerComponent;
}

export default function Divider({ component }: DividerProps = {}) {
  const pyClass = component?.py || 'my-4';

  return (
    <hr className={`border-t border-black mx-8 ${pyClass}`} />
  );
}
