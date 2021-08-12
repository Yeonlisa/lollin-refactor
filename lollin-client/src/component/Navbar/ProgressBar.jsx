import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Progress = styled.div`
    position: fixed;
    width: 0.5%;
    height: 5px;
    top: 62px;
    left: 0;
    background-color: #c7ea46;
    z-index: 12;
`;

const ProgressBar = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled)
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    return (
        <>
            <Progress style={{width:`${scrollTop}%`}}/>
        </>
    )
}

export default ProgressBar
