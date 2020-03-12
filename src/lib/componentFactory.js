export default class ComponentFactory
{
    constructor(services){
        this.services = services;
    }

    createComponent(componentName, attributes){
        let comp = document.createElement(componentName);
        
        if(attributes){
            for (var prop in attributes) {
                comp.setAttribute(prop, attributes[prop]);
            }
        }

        comp.init(this.services);
        return comp;
    }
}