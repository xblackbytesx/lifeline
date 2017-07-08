import React, { Component } from 'react';
import AppHeader from '../components/header/header';

import HorizontalTimelineContent from '../components/horizontal-timeline/horizontalTimeLineContent';
import KidsAPI from '../data/dummy/timmy';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 0, previous: 0 };
    }

    componentWillMount() {
        this.data = KidsAPI.map((game, index) => {
            return ({
                date: game.date,
                component: (
                    <div className='container' key={index}>
                        <h1>{ `The Elder Scrolls ${index + 1}:`}</h1>
                        <h2>{ game.subtitle }</h2>
                        <hr />
                        <p>{ game.content}</p>
                        <hr />
                    </div>
                )
            });
        });
    }

  render() {
    return (
      <div className="home-wrapper">
        <AppHeader />
        {/*<h1>Homepage component</h1>*/}
          <HorizontalTimelineContent content={this.data} />
      </div>
    );
  }
}

export default Home;
