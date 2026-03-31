import { useRef } from 'react';

/**
 * A custom React Hook that enables native mouse drag-to-scroll functionality 
 * on horizontally overflowing containers.
 * @returns {Object} Extracted ref and mouse event handlers to spread onto a container.
 */
export const useDraggable = () => {
    const ref = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const onMouseDown = (e) => {
        isDown.current = true;
        if (ref.current) {
            ref.current.classList.add('cursor-grabbing');
            ref.current.classList.remove('snap-x', 'snap-mandatory');
        }
        startX.current = e.pageX - ref.current.offsetLeft;
        scrollLeft.current = ref.current.scrollLeft;
    };

    const onMouseLeave = () => {
        isDown.current = false;
        if (ref.current) {
            ref.current.classList.remove('cursor-grabbing');
            ref.current.classList.add('snap-x', 'snap-mandatory');
        }
    };

    const onMouseUp = () => {
        isDown.current = false;
        if (ref.current) {
            ref.current.classList.remove('cursor-grabbing');
            ref.current.classList.add('snap-x', 'snap-mandatory');
        }
    };

    const onMouseMove = (e) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const walk = (x - startX.current) * 2; // scroll-fast multiplier
        if (ref.current) {
            ref.current.scrollLeft = scrollLeft.current - walk;
        }
    };

    return {
        ref,
        onMouseDown,
        onMouseLeave,
        onMouseUp,
        onMouseMove
    };
};
