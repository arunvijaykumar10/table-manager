import React, { useReducer, useState } from "react";
import "./Table.css";
import _ from "lodash";
import Form from "./Form";
import Details from "./Details";

type Action =
  | { type: "set-rows"; payload: string[] }
  | {
      type: "update-input";
      payload: { name: string; value: string | boolean | undefined };
    }
  | { type: "update-shouldCook"; payload: boolean | undefined }
  | { type: "add-row"; payload: any }
  | { type: "toggle-row"; payload: number }
  | { type: "delete-selected-rows" }
  | { type: "toggle-details" }
  | { type: "delete-row"; payload: number }
  | { type: "toggle-all-rows"; payload: boolean };

type State = {
  rows: {
    id: number;
    name: string;
    description: string;
    link: string;
    shouldCook: boolean;
    nutritions: string;
    maxIntake: string;
    isSelected: boolean;
  }[];
  inputValues: {
    name: string;
    description: string;
    link: string;
    shouldCook: boolean | undefined;
    nutritions: string;
    maxIntake: string;
  };
  showDetails: boolean;
};

const initialState: State = {
  rows: [],
  inputValues: {
    name: "",
    description: "",
    link: "",
    shouldCook: undefined,
    nutritions: "",
    maxIntake: "",
  },
  showDetails: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "set-rows":
      return { ...state };

    case "update-input":
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.payload.name]: action.payload.value,
        },
      };

    case "update-shouldCook":
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          shouldCook: action.payload,
        },
      };

    case "add-row":
      return {
        ...state,
        rows: [
          ...state.rows,
          {
            id: state.rows.length + 1,
            ...action.payload,
            isSelected: false,
          },
        ],
        inputValues: {
          name: "",
          description: "",
          link: "",
          shouldCook: undefined,
          nutritions: "",
          maxIntake: "",
        },
      };

    case "toggle-row":
      return {
        ...state,
        rows: state.rows.map((row, index) =>
          index === action.payload
            ? { ...row, isSelected: !row.isSelected }
            : row
        ),
      };

    case "delete-selected-rows":
      return {
        ...state,
        rows: _.reject(state.rows, "isSelected"),
      };

    case "toggle-details":
      return { ...state, showDetails: !state.showDetails };

    case "delete-row":
      return {
        ...state,
        rows: state.rows.filter((_, index) => index !== action.payload),
      };

    case "toggle-all-rows":
      return {
        ...state,
        rows: state.rows.map((row) => ({
          ...row,
          isSelected: action.payload,
        })),
      };

    default:
      return state;
  }
};

function Table() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);
  const [isAllSelected, setAllSelected] = useState(false);

  const addRow = (newRow: any) => {
    dispatch({ type: "add-row", payload: newRow });
  };

  const toggleAddForm = () => {
    setShow(!show);
  };

  const handleAllRowsSelection = () => {
    const newIsAllSelected = !isAllSelected;
    setAllSelected(newIsAllSelected);
    dispatch({ type: "toggle-all-rows", payload: newIsAllSelected });
  };

  const deleteSelectedRows = () => {
    dispatch({ type: "delete-selected-rows" });
  };

  const toggleDetails = () => {
    dispatch({ type: "toggle-details" });
  };
  const logData = () => {
    console.log("Current State:", state);
  };

  const selectedRows = _.filter(state.rows, "isSelected");

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={handleAllRowsSelection} className="select rows">
              Select
            </th>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Link</th>
            <th>Should Cook</th>
            <th>Nutritions</th>
            <th>Max. Intake per Day</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.rows.map((row, index) => (
            <tr key={index} className={row.isSelected ? "selected" : ""}>
              <td>
                <input
                  type="checkbox"
                  checked={row.isSelected}
                  onChange={() =>
                    dispatch({ type: "toggle-row", payload: index })
                  }
                />
              </td>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.description}</td>
              <td>{row.link}</td>
              <td>{row.shouldCook ? "Yes" : "No"}</td>
              <td>{row.nutritions}</td>
              <td>{row.maxIntake}</td>
              <td>
                <button
                  onClick={() =>
                    dispatch({ type: "delete-row", payload: index })
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="tag-button">
        <button onClick={toggleDetails} className="btn details">
          {state.showDetails ? "Details" : "Details"}
        </button>
        <button onClick={deleteSelectedRows} className="btn delete">
          Delete
        </button>
        <button className="btn log" onClick={logData}>
          Log
        </button>
        <button onClick={toggleAddForm} className="btn add">
          Add
        </button>
      </div>
      {state.showDetails && <Details rows={selectedRows} />}
      {show && <Form addRow={addRow} />}
    </div>
  );
}

export default Table;
