import React, { Component } from 'react';

class FavoriteMovies extends Component {
  render () {
    const users = this.props.users;
    const movies = this.props.movies;
    const profiles = this.props.profiles;
    
    return (
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}. 
          </li>
        ))}
      </ul>
    ); 
  }
}

export default FavoriteMovies