export function deferredTransition(node, args) {
    if(window && 'IntersectionObserver' in window) {
        if(!window.observer){
            //Share observer instance
            window.observer = new IntersectionObserver((entries)=> {
                for(let entry of entries){
                    if(entry.intersectionRatio){
                        entry.target.style.animation = entry.target.getAttribute('data-animation');
                        entry.target.removeAttribute('data-animation');
                        entry.target.classList.remove('hidden');
                        window.observer.unobserve(entry.target);
                    }
                }
            });
        }

        node.classList.add('hidden');
        setTimeout(()=>{
            node.setAttribute('data-animation', node.style.animation);
            node.style.animation = 'none';
            window.observer.observe(node);
        }, 100);

    }

    return {
        destroy() {
            if(window && window.observer) {
                window.observer.unobserve(node);
            }
        }
    }
}
