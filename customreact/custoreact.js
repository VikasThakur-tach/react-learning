
function customRender(reactElement,containar){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // containar.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in  reactElement.props) {
        if ( prop ==='children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
       
    }
    containar.appendChild(domElement)
}
const reactElement = {
    type:'a',
    props: {
        href: 'https://googal.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)