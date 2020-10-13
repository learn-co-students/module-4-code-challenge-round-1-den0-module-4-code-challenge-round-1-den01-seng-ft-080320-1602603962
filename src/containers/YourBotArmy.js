import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  
  displayBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard bot={bot}/>
    })
  }


  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.displayBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
