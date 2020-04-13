import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource'

const resource = {
      PosterName: 'Cliff',
      resourceAuthor: 'NetNinja',
      authorSkillLevel: 'Advanced',
      cohort: '0',
      title: 'React & Redux Complete',
      category: ['React', 'Redux'],
      summary: 'A good resource on building one page apps',
      link: 'www.google.com/search?q=NetNinja%20React',
      resourceType: 'Playlist',
      datePublished: '2018-09-10.00:00.00.000z',
      videoLength: null,
      timeToComplete: 300,
      rating: 5,
      comments: [{user: 'Joe', text: 'Pretty good resource'}]    
  }

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to BrainHive!</h1>
          <div className='box'>
            <Resource resource={this.resource}/>
            <Resource resource={this.resource}/>
            <Resource resource={this.resource}/>
          </div>
          
      </div>
    )
  }
}

export default App;
