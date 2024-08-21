import React from "react";

type Row = {
  id: number;
  name: string;
  description: string;
  link: string;
  shouldCook: boolean;
  nutritions: string;
  maxIntake: string;
};

type DetailsProps = {
  rows: Row[];
};

function Details({ rows }: DetailsProps) {
  return (
    <div className="norowselect" >
      {rows.length === 0 ? (
        <h2>No rows selected.</h2>
      ) : (
        rows.map(row => (
          <div key={row.id} className="details-row">
            <h3>Row ID: {row.id}</h3>
            <p>Name: {row.name}</p>
            <p>Description: {row.description}</p>
            <p>Link: {row.link}</p>
            <p>Should Cook: {row.shouldCook ? "Yes" : "No"}</p>
            <p>Nutritions: {row.nutritions}</p>
            <p>Max. Intake per Day: {row.maxIntake}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Details;
