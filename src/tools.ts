import { HitProps } from 'index';
import LevelUp from './components/LevelUp.svelte';

export function hit(target: HTMLElement, props: HitProps) {

    if (getComputedStyle(target).position === 'static') {
        target.style.position = 'relative';
    }

    const time = props.duration ?? 2000;
    const container = document.createElement('div');
    setTimeout(() => container.parentNode?.removeChild(container), time);

    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.position = 'absolute';
    container.style.display = 'flex';
    container.style.height = '100%';
    container.style.width = '100%';
    container.style.left = '0';
    container.style.top = '0';

    target.appendChild(container);

    new LevelUp({ target: container, props });
}