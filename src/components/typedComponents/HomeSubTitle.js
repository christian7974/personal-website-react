import Typed from 'typed.js';

import {useEffect, useRef} from 'react';

import './typed.css';

export default function HomeSubTitle() {
    const description = useRef(null);
    useEffect(() => {
        const typed = new Typed(description.current, {
        strings: ['URI Alum', 'Incoming Grad Student'],
        showCursor: true,
        cursorChar: '_',    
        typeSpeed: 50,
        backSpeed: 20,
        backDelay: 2000,
        loop: true,
        });
        return () => {
            typed.destroy();
        };

    }, []);  
    return (
        <span ref={description} className="text-5xl text-dim-gray"></span>
    )
}