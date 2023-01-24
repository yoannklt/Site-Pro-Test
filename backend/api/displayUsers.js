const domContainer = document.querySelector('#composant_react');
const users = domContainer.innerHTML;

ReactDOM.render(<Users users={users}/>, domContainer);