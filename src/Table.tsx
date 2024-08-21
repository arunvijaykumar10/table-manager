import React, { useReducer, useState } from "react";
import "./Table.css";
import Nutritions from "./Multiple";
import Details from "./Details";
import _ from "lodash";

type Action =
  | { type: "set-rows"; payload: string[] }
  | {
      type: "update-input";
      payload: { name: string; value: string | boolean | undefined };
    }
  | { type: "update-shouldCook"; payload: boolean | undefined }
  | { type: "add-row" }
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

const items = [
  { id: 1, label: "Vitamin A", value: "Vitamin A" },
  { id: 2, label: "Vitamin B", value: "Vitamin B" },
  { id: 3, label: "Vitamin C", value: "Vitamin C" },
  { id: 4, label: "Vitamin D", value: "Vitamin D" },
  { id: 5, label: "Vitamin E", value: "Vitamin E" },
];

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
            ...state.inputValues,
            shouldCook: state.inputValues.shouldCook ?? false,
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
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleCheckboxChange = (index: number) => {
    dispatch({ type: "toggle-row", payload: index });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    dispatch({
      type: "update-input",
      payload: { name, value: type === "checkbox" ? checked : value },
    });
  };

  const handleShouldCookChange = (shouldCook: boolean | undefined) => {
    dispatch({
      type: "update-shouldCook",
      payload: shouldCook,
    });
  };

  const handleNutritionsChange = (nutritions: string) => {
    dispatch({
      type: "update-input",
      payload: { name: "nutritions", value: nutritions },
    });
  };

  const handleAllRowsSelection = () => {
    const newIsAllSelected = !isAllSelected;
    setIsAllSelected(newIsAllSelected);
    dispatch({ type: "toggle-all-rows", payload: newIsAllSelected });
  };

  const addRow = () => {
    dispatch({ type: "add-row" });
  };

  const deleteSelectedRows = () => {
    dispatch({ type: "delete-selected-rows" });
  };

  const toggleDetails = () => {
    dispatch({ type: "toggle-details" });
  };

  const toggleAddForm = () => {
    setShow(!show);
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
            <th onClick={handleAllRowsSelection} style={{ cursor: "pointer" }}>
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
                  onChange={() => handleCheckboxChange(index)}
                  className="check"
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

      <div className="footer-button">
        <button className="btn details" onClick={toggleDetails}>
          {state.showDetails ? "Hide Details" : "Details"}
        </button>
        <button className="btn log" onClick={logData}>
          Log
        </button>
        <button className="btn delete" onClick={deleteSelectedRows}>
          Delete
        </button>
        <button className="btn add" onClick={toggleAddForm}>
          {show ? "Hide Add Form" : "Add"}
        </button>
      </div>
      <div className="show">
        {show && (
          <div className="addform">
            <div>
              <input
                placeholder="Name"
                className="input name"
                name="name"
                value={state.inputValues.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                placeholder="Description"
                className="input description"
                name="description"
                value={state.inputValues.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                placeholder="Link"
                className="input link"
                name="link"
                value={state.inputValues.link}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>
                Yes
                <input
                  type="checkbox"
                  name="shouldCook"
                  checked={state.inputValues.shouldCook === true}
                  onChange={() => handleShouldCookChange(true)}
                />
              </label>
              <label>
                No
                <input
                  type="checkbox"
                  name="shouldCook"
                  checked={state.inputValues.shouldCook === false}
                  onChange={() => handleShouldCookChange(false)}
                />
              </label>
            </div>
            <div>
              <Nutritions items={items} onSelect={handleNutritionsChange} />
            </div>
            <div>
              <input
                placeholder="Max. Intake per Day"
                className="input intake"
                name="maxIntake"
                value={state.inputValues.maxIntake}
                onChange={handleChange}
              />
            </div>
            <button onClick={addRow} className="btn add">Add Row</button>
          </div>
        )}
      </div>
      {state.showDetails && <Details rows={selectedRows} />}
    </div>
  );
}

export default Table;
