import React, { Component } from 'react';
import { trackPromise } from 'react-promise-tracker';
import { userAPI } from './api/userAPI';
import { UserTable, LoadButton } from './components';
import './app.css';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };

    this.onLoadTables = this.onLoadTables.bind(this);
  }

  onLoadTables() {
    this.setState({
      users: [],
    });

    trackPromise(
      userAPI.fetchUsers()
        .then((users) => {
          this.setState({users: users.results})
        })
    );
  }

  render() {
    return (
      <div>
        <LoadButton onLoad={this.onLoadTables} title="Show Records"/>
        <div className="tables">
          <UserTable users={this.state.users} />
        </div>
      </div>
    );
  }
}
