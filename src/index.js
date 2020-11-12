import logMessage from './js/logger'
import './css/style.css'

// Registrar mensagem no console
logMessage('A very warm welcome to Expack!')
// Necessário para substituição de Hot Module
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}