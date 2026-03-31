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
import IntroText from './components/IntroText';
import BulletList from './components/BulletList';

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
        return <Divider key={index} component={component} />;
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
      case 'intro-text':
        return <IntroText key={index} component={component} />;
      case 'bullet-list':
        return <BulletList key={index} component={component} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {subSection.header && (
        <div className="py-4 flex justify-between items-center" style={{ backgroundColor: 'var(--email-btn-bg)', marginLeft: 'calc(-1 * var(--detail-px))', marginRight: 'calc(-1 * var(--detail-px))', paddingLeft: 'var(--detail-px)', paddingRight: 'var(--detail-px)' }}>
          <h2 className="text-xs font-medium font-mono tracking-wider text-transform: uppercase" style={{ color: 'var(--email-btn-icon)' }}>
            {subSection.header}
          </h2>
          {subSection.number && (
            <span className="text-xs font-medium font-mono tracking-wider" style={{ color: 'var(--email-btn-icon)' }}>
              {subSection.number}
            </span>
          )}
        </div>
      )}
      <div className={subSection.header && subSection.components[0]?.type !== 'hero-image' && subSection.components[0]?.type !== 'hero-video' && subSection.components[0]?.type !== 'full-width-image' && subSection.components[0]?.type !== 'full-width-video' && subSection.components[0]?.type !== 'side-by-side' ? 'lg:mt-2' : ''}>
        {subSection.components.map((component, index) =>
          renderComponent(component, index)
        )}
      </div>
    </div>
  );
}
