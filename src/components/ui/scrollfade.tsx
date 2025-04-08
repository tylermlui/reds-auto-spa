import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
};

export const ScrollFadeIn = ({ children, className = '', direction = 'right' }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getTranslateClass = () => {
    if (inView) return 'translate-x-0 translate-y-0';
    switch (direction) {
      case 'left':
        return 'translate-x-[-40px]';
      case 'right':
        return 'translate-x-10';
      case 'up':
        return 'translate-y-[-40px]';
      case 'down':
        return 'translate-y-10';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all transform duration-2000 ease-out
        ${inView ? 'opacity-100' : 'opacity-0'}
        ${getTranslateClass()}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
