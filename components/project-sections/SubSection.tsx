import type { SubSection as SubSectionType, SubSectionComponent } from '@/data/types';
import Paragraph from './components/Paragraph';
import InlineHeader from './components/InlineHeader';
import FeatureBlock from './components/FeatureBlock';
import Divider from './components/Divider';
import HeroImage from './components/HeroImage';
import HeroVideo from './components/HeroVideo';
import FullWidthImage from './components/FullWidthImage';
import FullWidthVideo from './components/FullWidthVideo';
import SideBySide from './components/SideBySide';
import Sublines from './components/Sublines';

interface SubSectionProps {
  subSection: SubSectionType;
}

export default function SubSection({ subSection }: SubSectionProps) {
  const renderComponent = (component: SubSectionComponent, index: number) => {
    switch (component.type) {
      case 'paragraph':
        return <Paragraph key={index} component={component} />;
      case 'inline-header':
        return <InlineHeader key={index} component={component} />;
      case 'feature-block':
        return <FeatureBlock key={index} component={component} />;
      case 'divider':
        return <Divider key={index} />;
      case 'hero-image':
        return <HeroImage key={index} component={component} />;
      case 'hero-video':
        return <HeroVideo key={index} component={component} />;
      case 'full-width-image':
        return <FullWidthImage key={index} component={component} />;
      case 'full-width-video':
        return <FullWidthVideo key={index} component={component} />;
      case 'side-by-side':
        return <SideBySide key={index} component={component} />;
      case 'sublines':
        return <Sublines key={index} component={component} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {subSection.header && (
        <div className="bg-black py-3 px-8 flex justify-between items-center">
          <h2 className="text-sm text-white font-medium font-mono">
            {subSection.header}
          </h2>
          {subSection.number && (
            <span className="text-base text-white font-mono">
              {subSection.number}
            </span>
          )}
        </div>
      )}
      <div>
        {subSection.components.map((component, index) =>
          renderComponent(component, index)
        )}
      </div>
    </div>
  );
}
