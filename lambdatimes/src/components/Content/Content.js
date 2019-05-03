import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({ selected: tab });
  };

  filterCards = () => {
    // this.state.selected === 'all'
    // ? this.state.cards
    // : const filteredCards = this.state.cards.filter(element =>)
if(this.state.selected === 'all') {
  return this.state.cards;
} else {
  const filteredCards = this.state.cards.filter(element => {
    if (element.tab === this.state.selected) {
      return true;
    } else {
      return filteredCards;
    }
  })
}

    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
  };

  // selectTabHandler = tab => {
  //   this.setState(
  //     prevState.cards.filter(card => {
  //       filteredCards > 0 
  //       ? this.state.filteredCards 
  //       : this.state.cards;
  //     })
  //   );
  // };

    selectTabHandler = tab => {
    this.setState(prevState => {
      const filteredCards = prevState.cards.filter(card => {
        return card.tab === tab;
      });
      if (!(filteredCards.length === 0)) {
        return {
          selected: tab,
          filteredCards: filteredCards
        };
      } else {
        return {
          selected: tab,
          filteredCards: this.state.cards
        };
      }
    });
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          onClick={this.selectTabHandler}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
