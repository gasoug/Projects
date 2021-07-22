import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: '',
      list: [],
    }
  }

  updadeInput(key, value) {
    //atualizar o react
    this.setState({
      [key]: value
    })
  }
  addItem() {
    //criar com um id único
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }
    //copiar os itens da lista
    const list = [...this.state.list]
    //adicionar novo item na lista
    list.push(newItem)
    //atualizar nova lista e resetar o input do novo item
    this.setState({
      list,
      newItem: ""
    })
  }

  deleteItem(id) {
    //copiar a lista atual de itens
    const list = [...this.state.list]

    //
    const updatedList = list.filter(item => item.id !== id)

    this.setState({ list: updatedList })
  }
  render() {
    return (
      <div className="App">
        <div>
          Lista de afazeres
          <br />
          <br />
          <input
            type="text"
            placeholder="Digite uma nova tarefa aqui"
            value={this.state.newItem}
            onChange={e => this.updadeInput("newItem", e.target.value)
            }
          />
          <button
            onClick={() => this.addItem()}

          >
            Adicionar
          </button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    onClick={() => this.deleteItem(item.id)}
                    className='btn'
                  >
                    X
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
