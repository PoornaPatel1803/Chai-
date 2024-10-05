function customReact(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.textContent = reactElement.children;
    // Setting props if they exist
    if (reactElement.props) {
        if (reactElement.props.href) {
            domElement.setAttribute('href', reactElement.props.href);
        }
        if (reactElement.props.target) {
            domElement.setAttribute('target', reactElement.props.target);
        }
    }
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'h1',

//props are components that are passed via html

    props: {
        href: 'www.google.com', // Added href prop
        target: '_blank' // Added target prop
    },
    children: 'hello i am Poorna'
};

const mainContainer = document.querySelector('#root');
customReact(reactElement, mainContainer);
