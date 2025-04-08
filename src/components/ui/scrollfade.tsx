import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const ScrollFadeIn = ({ children, className = '' }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all transform duration-2500 ease-out
        ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
