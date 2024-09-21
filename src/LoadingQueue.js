let queue = [];
let listeners = [];

export const add = (key) => {
    debugger;
    if (queue.indexOf(key) === -1) {
        queue.push(key);
        trigger();
    }
}

export const remove = (key) => {
    debugger;
    const index = queue.indexOf(key);
    if (index !== -1) {
        queue.splice(index, 1);
        trigger();
    }
}


//
//  OBSERVABLE
//

export const listen = (fn) => {
    if (listeners.indexOf(fn) === -1) {
        listeners.push(fn);
    }
}

export const unlisten = (fn) => {
    const index = listeners.indexOf(fn);
    if (index !== -1) {
        listeners.splice(index, 1);
    }
}

const trigger = () => {
    listeners.forEach((fn) => fn.call(undefined, queue.length));
}