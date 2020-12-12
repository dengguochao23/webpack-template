import { add } from './math'
import './style.css'
import './style1.css'
function component(){
    const element = document.createElement('div')
    element.classList.add('hello')
    element.innerHTML = [
        'hello world',
        add(2),
        'dengguochao'
    ]
    return element
}
document.body.appendChild(component())