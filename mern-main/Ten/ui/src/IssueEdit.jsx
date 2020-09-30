import React from 'react';

export default function IssueEdit({ match }) {
  const { id } = match.params;
  return (
      <h2>{`This is a placeholder for editing issie ${id}`}</h2>
  );
}
