import React from 'react';

export const Row = (user) => (
  <tr key={user.artistId}>
    <td>
      <span>{user.artistName}</span>
    </td>
    <td>
      <span>{user.trackName}</span>
    </td>
	<td>
      <span>{user.trackPrice}</span>
    </td>
	<td>
      <span>{user.releaseDate}</span>
    </td>
	<td>
      <span>{user.primaryGenreName}</span>
    </td>
  </tr>
);