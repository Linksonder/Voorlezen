
class Router extends HTMLElement {

    constructor(){
        super();    
       }

    init(componentFactory){
        this.factory = componentFactory;
        this.navigateTo(window.location.hash);
        window.addEventListener("hashchange", () => this.navigateTo(window.location.hash));
    }

    navigateTo(hash)
    {
        if(hash.includes("book-details"))
        {
            let attributes = {
                name: this.getParam(hash)
            }

            this.loadComponent('book-details', attributes);
        }
        else //default
        {
            this.loadComponent('book-list');
        }
    }

    /**
     * Load a commponent into the router-outlet
     * name: selector of the componnent
     * attributes: attributes to add to the component
     */
    loadComponent(name, attributes){
        let comp = this.factory.createComponent(name, attributes);
        this.innerHTML = "";
        this.appendChild(comp);
    }

    getParam(hash){
        let parts = hash.split('/');
        return parts[parts.length -1];
    }
}

customElements.define('router-outlet', Router);
export default Router;

/** Helper methods */

