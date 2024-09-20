import { useCallback, useEffect, useRef, useState } from 'react';
import { MainHeader } from './MainHeader';
import clsx from '@/utils/clsx';
import styles from './mainlayout.module.css';

interface MainLayoutProps extends React.HTMLAttributes<HTMLElement> { }

export const MainLayout: React.FC<MainLayoutProps> = ({
  className,
  children,
  ...otherProps
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [thumbHeight, setThumbHeight] = useState(20);
  const [scrollStartPosition, setScrollStartPosition] = useState<number | null>(null);
  const [initialScrollTop, setInitialScrollTop] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleResize = (ref: HTMLDivElement, trackSize: number) => {
    const { clientHeight, scrollHeight } = ref;
    if (clientHeight === scrollHeight) {
      setIsScrollable(false);
    } else {
      setIsScrollable(true);
    }

    setThumbHeight(Math.max((clientHeight / scrollHeight) * trackSize, 20));
    contentRef.current?.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleThumbPosition = useCallback(() => {
    if (!contentRef.current || !scrollTrackRef.current || !scrollThumbRef.current) {
      return;
    }
    const { scrollTop: contentTop, scrollHeight: contentHeight } = contentRef.current;
    const { clientHeight: trackHeight } = scrollTrackRef.current;
    let newTop = (+contentTop / +contentHeight) * trackHeight;
    newTop = Math.min(newTop, trackHeight - thumbHeight);
    const thumb = scrollThumbRef.current;
    thumb.style.top = `${newTop}px`;
  }, [thumbHeight]);

  const handleTrackClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    const { current: trackCurrent } = scrollTrackRef;
    const { current: contentCurrent } = contentRef;
    if (trackCurrent && contentCurrent) {
      // First, figure out where we clicked
      const { clientY } = e;
      // Next, figure out the distance between the top of the track and the top of the viewport
      const target = e.target as HTMLDivElement;
      const rect = target.getBoundingClientRect();
      const trackTop = rect.top;
      // We want the middle of the thumb to jump to where we clicked, so we subtract half the thumb's height to offset the position
      const thumbOffset = -(thumbHeight / 2);
      // Find the ratio of the new position to the total content length using the thumb and track values...
      const clickRatio = (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight;
      // ...so that you can compute where the content should scroll to.
      const scrollAmount = Math.floor(clickRatio * contentCurrent.scrollHeight);
      // And finally, scroll to the new position!
      contentCurrent.scrollTo({
        top: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [thumbHeight]);

  // If the content and the scrollbar track exist, use a ResizeObserver to adjust height of thumb and listen for scroll event to move the thumb
  useEffect(() => {
    if (contentRef.current && scrollTrackRef.current) {
      const ref = contentRef.current;
      const { clientHeight: trackSize } = scrollTrackRef.current;
      observer.current = new ResizeObserver(() => {
        handleResize(ref, trackSize);
      });
      observer.current.observe(ref);
      ref.addEventListener("scroll", handleThumbPosition);
      return () => {
        observer.current?.unobserve(ref);
        ref.addEventListener("scroll", handleThumbPosition);
      }
    }
  }, [handleThumbPosition]);

  const handleThumbMousedown = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientY);
    if (contentRef.current) setInitialScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
  }, []);

  const handleThumbMouseup = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  const handleThumbMousemove = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isDragging) {
      const {
        scrollHeight: contentScrollHeight,
        offsetHeight: contentOffsetHeight,
      } = contentRef.current!;

      // Subtract the current mouse y position from where you started to get the pixel difference in mouse position. Multiply by ratio of visible content height to thumb height to scale up the difference for content scrolling.
      const deltaY = (e.clientY - scrollStartPosition!) * (contentOffsetHeight / thumbHeight);
      const newScrollTop = Math.min(
        initialScrollTop + deltaY,
        contentScrollHeight - contentOffsetHeight
      );

      contentRef.current!.scrollTop = newScrollTop;
    }
  }, [isDragging, scrollStartPosition, thumbHeight, initialScrollTop]);

  // Listen for mouse events to handle scrolling by dragging the thumb
  useEffect(() => {
    document.addEventListener("mousemove", handleThumbMousemove);
    document.addEventListener("mouseup", handleThumbMouseup);
    document.addEventListener("mouseleave", handleThumbMouseup);
    return () => {
      document.removeEventListener("mousemove", handleThumbMousemove);
      document.removeEventListener("mouseup", handleThumbMouseup);
      document.removeEventListener("mouseleave", handleThumbMouseup);
    }
  }, [handleThumbMousemove, handleThumbMouseup]);

  return (
    <div className={styles.app} {...otherProps}>
      <div className={styles.container}>
        <div className={clsx(styles.wrapper, className)}>
          <div ref={contentRef} className={styles.content}>
            <MainHeader />
            <main className={styles.main}>{children}</main>
          </div>
          {/* {scrollbar && ( */}
          <div className={styles.scrollbar} style={{
            opacity: isScrollable ? 1 : 0,
            pointerEvents: isScrollable ? "all" : "none",
          }}>
            <div className={styles.scrollbarWrapper}>
              <div
                className={styles.track}
                ref={scrollTrackRef}
                onClick={handleTrackClick}
                style={{ cursor: isDragging ? "grabbing" : "pointer" }}
              >
              </div>
              <div
                className={styles.thumb}
                ref={scrollThumbRef}
                onMouseDown={handleThumbMousedown}
                style={{
                  height: `${thumbHeight}px`,
                  cursor: isDragging ? "grabbing" : "grab",
                }}
              ></div>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};
