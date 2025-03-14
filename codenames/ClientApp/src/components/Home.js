import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Codenames</h1>
        <p>The two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their CODENAMES.</p>
        <p>The teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.</p>
        <p>Codenames: win or lose, it’s fun to figure out the clues.</p>
        <p>Source: <a href="https://czechgames.com/en/codenames/description/">https://czechgames.com/en/codenames/description/</a></p>
        <h2>Rules</h2>
        <a href="https://czechgames.com/files/rules/codenames-rules-en.pdf">English</a>
      </div>
    );
  }
}
