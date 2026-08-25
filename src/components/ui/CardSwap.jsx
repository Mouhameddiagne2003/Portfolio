import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useLayoutEffect,
  useMemo,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Card = forwardRef(({ customClass, className = '', children, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/95 shadow-xl [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ''} ${className}`.trim()}
  >
    {children}
  </div>
));
Card.displayName = 'Card';
Card.propTypes = {
  customClass: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

export default function CardSwap({
  width = 520,
  height = 360,
  cardDistance = 45,
  verticalDistance = 55,
  skewAmount = 4,
  easing = 'elastic',
  scrollTriggerRef,
  scrollPerCard = 650,
  children
}) {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.7,0.8)',
          durMove: 0.62,
          durReturn: 0.66
        }
      : {
          ease: 'power2.inOut',
          durMove: 0.7,
          durReturn: 0.62
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refsByIndex = useRef([]);

  if (refsByIndex.current.length !== childArr.length) {
    refsByIndex.current = childArr.map((_, index) => refsByIndex.current[index] ?? React.createRef());
  }

  const refs = refsByIndex.current;

  const container = useRef(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const total = refs.length;
    if (!total) return undefined;

    refs.forEach((r, i) => {
      if (r.current) {
        placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
      }
    });

    if (total < 2) return undefined;

    const transitions = total - 1;
    const dropY = Math.max(height * 0.95, 360);
    const media = gsap.matchMedia();

    const buildTimeline = () => {
      const timeline = gsap.timeline({ paused: true });
      const initialHold = 0.45;
      let order = Array.from({ length: total }, (_, i) => i);

      for (let step = 0; step < transitions; step += 1) {
        const [front, ...rest] = order;
        const frontElement = refs[front]?.current;
        const stepStart = initialHold + step;

        if (!frontElement) continue;

        timeline.to(
          frontElement,
          {
            y: dropY,
            duration: 0.45,
            ease: 'power1.inOut'
          },
          stepStart
        );

        rest.forEach((cardIndex, slotIndex) => {
          const element = refs[cardIndex]?.current;
          if (!element) return;

          const slot = makeSlot(slotIndex, cardDistance, verticalDistance, total);
          timeline.set(element, { zIndex: slot.zIndex }, stepStart + 0.08);
          timeline.to(
            element,
            {
              x: slot.x,
              y: slot.y,
              z: slot.z,
              duration: config.durMove,
              ease: config.ease
            },
            stepStart + 0.12
          );
        });

        const backSlot = makeSlot(total - 1, cardDistance, verticalDistance, total);
        timeline.set(frontElement, { zIndex: backSlot.zIndex }, stepStart + 0.38);
        timeline.to(
          frontElement,
          {
            x: backSlot.x,
            y: backSlot.y,
            z: backSlot.z,
            duration: config.durReturn,
            ease: config.ease
          },
          stepStart + 0.38
        );

        order = [...rest, front];
      }

      return timeline;
    };

    media.add(
      {
        desktop: '(min-width: 1024px)',
        mobile: '(max-width: 1023px)'
      },
      (context) => {
        const { desktop } = context.conditions;
        const timeline = buildTimeline();
        const desktopTrigger = scrollTriggerRef?.current ?? wrapperRef.current;

        const scrollTrigger = ScrollTrigger.create({
          animation: timeline,
          trigger: desktop ? desktopTrigger : wrapperRef.current,
          pin: desktop ? false : container.current,
          start: desktop ? 'top 10%' : 'top 20%',
          end: () => `+=${transitions * (desktop ? scrollPerCard : 650)}`,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true
        });

        return () => {
          scrollTrigger.kill();
          timeline.kill();
        };
      }
    );

    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      media.revert();
    };
  }, [cardDistance, config.durMove, config.durReturn, config.ease, height, refs, scrollPerCard, scrollTriggerRef, skewAmount, verticalDistance]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width: '100%', maxWidth: width, height, ...(child.props.style ?? {}) }
        })
      : child
  );

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        ref={container}
        className="relative w-full h-[500px] sm:h-[540px] perspective-[1000px] overflow-visible flex items-center justify-center"
      >
        {rendered}
      </div>
    </div>
  );
}

CardSwap.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  cardDistance: PropTypes.number,
  verticalDistance: PropTypes.number,
  skewAmount: PropTypes.number,
  easing: PropTypes.string,
  scrollTriggerRef: PropTypes.shape({ current: PropTypes.object }),
  scrollPerCard: PropTypes.number,
  children: PropTypes.node.isRequired
};
