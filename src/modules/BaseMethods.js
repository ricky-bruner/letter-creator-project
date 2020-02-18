
export default class BaseMethods {
    
    handleFieldChange = (component, e) => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.innerText
        component.setState(stateToChange)
    }
}