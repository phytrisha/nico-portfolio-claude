import type { BulletListComponent } from '@/data/types';

interface BulletListProps {
  component: BulletListComponent;
}

export default function BulletList({ component }: BulletListProps) {
  const pyClass = component.py || 'py-8';

  return (
    <div className={`${pyClass} my-0 max-w-4xl mx-auto`}>
      {component.headline && (
        <p className="text-base lg:text-[17px] font-semibold leading-relaxed mb-1 mt-4">{component.headline}</p>
      )}
      {component.copy && (
        <p className="text-base lg:text-[17px] leading-relaxed mb-3">{component.copy}</p>
      )}
      <ul className="space-y-3 pl-4">
        {component.items.map((item, index) => (
          <li key={index} className="flex items-baseline gap-3 text-base lg:text-[17px] leading-relaxed">
            <span className="select-none flex-shrink-0 text-lg">›</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
