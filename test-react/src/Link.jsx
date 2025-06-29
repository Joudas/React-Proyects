import { Events } from "./Event";

function navigate(href){
  window.history.pushState({}, '', href);
  const navigationEvent = new Event(Events.PUSHTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({target, to, ...props}){
    const handleClick = (e) => {
        const isMainEvent = e.button === 0; // only btn left
        const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
        const isManageableEvent = target === undefined || target === '_self';

        if(isMainEvent && isManageableEvent && !isModifiedEvent){
            e.preventDefault();
            navigate(to);
        }

    };

    return(<a onClick={handleClick} href={to} target={target} {...props}></a>)
}