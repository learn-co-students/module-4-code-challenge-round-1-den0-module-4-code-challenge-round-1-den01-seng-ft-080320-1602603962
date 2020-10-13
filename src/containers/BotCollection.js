import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {

  
  displayBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard bot={bot} addToArmy={this.props.addToArmy}/>
    })
  }
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.displayBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
