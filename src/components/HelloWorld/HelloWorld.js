import React from 'react';
import styled from 'styled-components';

const HelloWorld = ({name}) => {
    const sayHi = (event) => {
        alert(`Hello ${name}`);
    }
    return (
        <a
            href="#"
            onClick={sayHi}
        >
            Say Hello
        </a>
    );
}

HelloWorld.propTypes = {
    name: React.PropTypes.string.isRequired
}

const StyledHelloWorld = styled(HelloWorld)`
    color: green;
    border-style: solid;
`;

export default StyledHelloWorld;
