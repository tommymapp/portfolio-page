'use client'

import { useEffect, useRef } from 'react'
import './animatedHeader.css'

export default function AnimatedHeader({ children, variant: type = 'default' }: {
    children: React.ReactNode;
    variant?: 'hero' | 'default'
}) {
    const duration = 32;
    const startTimeRef = useRef<number | null>(null);
    const animRef = useRef<HTMLDivElement>(null);
	const lastFrame = useRef<number>(0);
	const frameId = useRef<number | null>(null);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		startTimeRef.current = performance.now()
		lastFrame.current = performance.now();
		const animation = animRef.current;
		if (!animation) return;

		const updateAnimation = () => {
			if (startTimeRef.current === null) return

			const curTime = performance.now()
			const elapsedTime = (curTime - startTimeRef.current) / 1000
			const delta = curTime - lastFrame.current

			if (delta >= 200) {
				const newProgress = ((elapsedTime % duration) / duration) * 100;
				animation.style.setProperty('--progress', newProgress.toString());
				lastFrame.current = curTime;
			}

			frameId.current = requestAnimationFrame(updateAnimation);
		};

		frameId.current = requestAnimationFrame(updateAnimation);

		return () => {
			if (frameId.current !== null) {
				cancelAnimationFrame(frameId.current);
			}
		};
	}, [duration]);

	return (
        <header className={`${type == 'hero' ? 'h-[720px]' : 'h-[480px]'}`}>
            {children}
            <div className={`animated-header absolute w-full overflow-hidden top-0 left-0 right-0 bottom-0 z-[-1] ${type == 'hero' ? 'h-[720px]' : 'h-[480px]'}`} ref={animRef}></div>
        </header>
    )
}