import React, { Component } from "react";
import YourBotArmy from './YourBotArmy'
import BotsCollection from './BotCollection'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    bots: [],
    myArmy: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
      .then(response => response.json())
      .then(bots => this.setState({ bots }))
  }

  addToArmy = (bot) => {
    if (!this.state.myArmy.find(botInArmy => botInArmy === bot)) {
      this.setState({ myArmy: [...this.state.myArmy, bot]})
    }
  }

  // removeFromArmy = (bot) => {
  //   if (this.state.myArmy.find(botInArmy.id === bot.id)) {
  //     this.setState({myArmy: []})
  //   }
  // }
  render() {
    return <div>
          <YourBotArmy bots={this.state.myArmy}  />
          <BotsCollection bots={this.state.bots} addToArmy={this.addToArmy}/>
          </div>;
  }
}

export default BotsPage;
