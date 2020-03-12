
export default class Component extends HTMLElement 
{
    constructor(){
        super();
    }

    navigateTo(url)
    {
        location.hash = '#' + url;
    }
}