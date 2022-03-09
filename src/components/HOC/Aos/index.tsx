import React, { CSSProperties, ReactNode } from 'react';

type Animation = {
  children: ReactNode;
  animation:
    | `fade-up`
    | `fade-down`
    | `fade-left`
    | `fade-right`
    | `fade-up-right`
    | `fade-up-left`
    | `fade-down-right`
    | `fade-down-left`
    | `zoom-in`
    | `zoom-in-up`
    | `zoom-in-down`
    | `zoom-in-left`
    | `zoom-in-right`
    | `zoom-out`
    | `zoom-out-up`
    | `zoom-out-down`
    | `zoom-out-left`
    | `zoom-out-right`
    | `slide-up`
    | `slide-down`
    | `slide-right`
    | `slide-left`
    | `flip-left`
    | `flip-right`
    | `flip-up`
    | `flip-down`;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
};

const AosWrapper: React.FC<Animation> = (
  { animation, delay, duration, style }: Animation,
  children,
) => {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      style={style}
    >
      {children}
    </div>
  );
};

AosWrapper.defaultProps = {
  delay: 750,
  duration: 500,
};

export default AosWrapper;
