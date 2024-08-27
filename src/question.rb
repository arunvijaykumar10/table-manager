data = {
  laptops: [
    { id: 1, brand: "BrandA", model: "ModelX", price: 1500.00, stock: 25, specifications: { processor: "Intel i7", ram: "16GB", storage: "512GB SSD" }, release_date: "2023-03-01", discontinued: false },
    { id: 2, brand: "BrandB", model: "ModelY", price: 1200.00, stock: 0, specifications: { processor: "AMD Ryzen 5", ram: "8GB", storage: "1TB HDD" }, release_date: "2022-10-15", discontinued: true },
    { id: 3, brand: "BrandC", model: "ModelZ", price: 1800.00, stock: 10, specifications: { processor: "Intel i9", ram: "32GB", storage: "1TB SSD" }, release_date: "2024-01-20", discontinued: false },
    { id: 4, brand: "BrandD", model: "ModelA", price: 800.00, stock: 5, specifications: { processor: "Intel i5", ram: "8GB", storage: "256GB SSD" }, release_date: "2021-08-05", discontinued: false },
    { id: 5, brand: "BrandE", model: "ModelB", price: 2500.00, stock: 2, specifications: { processor: "Apple M1", ram: "16GB", storage: "512GB SSD" }, release_date: "2024-06-10", discontinued: false },
    { id: 6, brand: "BrandF", model: "ModelC", price: 2200.00, stock: 0, specifications: { processor: "Intel i7", ram: "32GB", storage: "1TB SSD" }, release_date: "2023-11-01", discontinued: true },
    { id: 7, brand: "BrandG", model: "ModelD", price: 900.00, stock: 15, specifications: { processor: "AMD Ryzen 7", ram: "16GB", storage: "512GB SSD" }, release_date: "2022-05-20", discontinued: false },
    { id: 8, brand: "BrandH", model: "ModelE", price: 1700.00, stock: 8, specifications: { processor: "Intel i9", ram: "64GB", storage: "2TB SSD" }, release_date: "2024-03-15", discontinued: false },
    { id: 9, brand: "BrandI", model: "ModelF", price: 1300.00, stock: 3, specifications: { processor: "Intel i5", ram: "8GB", storage: "1TB HDD" }, release_date: "2021-12-10", discontinued: true },
    { id: 10, brand: "BrandJ", model: "ModelG", price: 1100.00, stock: 12, specifications: { processor: "AMD Ryzen 5", ram: "16GB", storage: "256GB SSD" }, release_date: "2023-07-25", discontinued: false }
  ],
  sales: [
    { id: 1, laptop_id: 1, quantity: 10, sale_date: "2024-07-01", region: "North America" },
    { id: 2, laptop_id: 2, quantity: 0, sale_date: "2024-07-05", region: "Europe" },  # Out of stock
    { id: 3, laptop_id: 3, quantity: 5, sale_date: "2024-08-15", region: "Asia" },
    { id: 4, laptop_id: 4, quantity: 2, sale_date: "2024-08-20", region: "South America" },
    { id: 5, laptop_id: 5, quantity: 1, sale_date: "2024-09-01", region: "Australia" },
    { id: 6, laptop_id: 6, quantity: 0, sale_date: "2024-09-10", region: "North America" }, # Out of stock
    { id: 7, laptop_id: 7, quantity: 8, sale_date: "2024-09-15", region: "Europe" },
    { id: 8, laptop_id: 8, quantity: 4, sale_date: "2024-10-01", region: "Asia" },
    { id: 9, laptop_id: 9, quantity: 3, sale_date: "2024-10-05", region: "South America" },
    { id: 10, laptop_id: 10, quantity: 6, sale_date: "2024-10-20", region: "Australia" }
  ],
  reviews: [
    { id: 1, laptop_id: 1, rating: 4, comment: "Great performance, but a bit pricey.", user_id: 101 },
    { id: 2, laptop_id: 2, rating: 3, comment: "Good for the price, but outdated specs.", user_id: 102 },
    { id: 3, laptop_id: 3, rating: 5, comment: "Excellent laptop with top-notch performance.", user_id: 103 },
    { id: 4, laptop_id: 4, rating: 2, comment: "Underwhelming performance and build quality.", user_id: 104 },
    { id: 5, laptop_id: 5, rating: 5, comment: "Amazing laptop, worth every penny!", user_id: 105 },
    { id: 6, laptop_id: 6, rating: 1, comment: "Failed to meet expectations.", user_id: 106 },
    { id: 7, laptop_id: 7, rating: 4, comment: "Solid build, good specs.", user_id: 107 },
    { id: 8, laptop_id: 8, rating: 5, comment: "Best laptop I have ever used.", user_id: 108 },
    { id: 9, laptop_id: 9, rating: 2, comment: "Frequent issues with the hard drive.", user_id: 109 },
    { id: 10, laptop_id: 10, rating: 4, comment: "Great value for the money.", user_id: 110 },
    { id: 11, laptop_id: 1, rating: 2, comment: "good performance, pricey.", user_id: 102 },
    { id: 12, laptop_id: 1, rating: 3, comment: "Good for the price, but outdated specs.", user_id: 108 },
    { id: 13, laptop_id: 2, rating: 5, comment: "Solid build, good specs.", user_id: 107 },
],

  users: [
    { id: 101, name: "Alice", email: "alice@example.com", location: "North America" },
    { id: 102, name: "Bob", email: "bob@example.com", location: "Europe" },
    { id: 103, name: "Charlie", email: "charlie@example.com", location: "Asia" },
    { id: 104, name: "David", email: "david@example.com", location: "North America" },
    { id: 105, name: "Eve", email: "eve@example.com", location: "Australia" },
    { id: 106, name: "Fay", email: "fay@example.com", location: "North America" },
    { id: 107, name: "George", email: "george@example.com", location: "Europe" },
    { id: 108, name: "Hannah", email: "hannah@example.com", location: "Asia" },
    { id: 109, name: "Isaac", email: "isaac@example.com", location: "South America" },
    { id: 110, name: "Jack", email: "jack@example.com", location: "Australia" }
  ],

  suppliers: [
    { id: 1, name: "SupplierX", contact: "supplierx@example.com", location: "North America", laptop_ids: [1, 3, 4, 7] },
    { id: 2, name: "SupplierY", contact: "suppliery@example.com", location: "Europe", laptop_ids: [2, 8, 10] },
    { id: 3, name: "SupplierZ", contact: "supplierz@example.com", location: "Asia", laptop_ids: [3, 5, 6, 8] },
    { id: 4, name: "SupplierW", contact: "supplierw@example.com", location: "South America", laptop_ids: [4, 9] },
    { id: 5, name: "SupplierV", contact: "supplierv@example.com", location: "Australia", laptop_ids: [5, 10] }
  ],

  warranty_claims: [
    { id: 1, laptop_id: 1, claim_date: "2024-07-10", issue: "Screen flickering", resolution: "Repaired" },
    { id: 2, laptop_id: 2, claim_date: "2024-07-15", issue: "Battery not charging", resolution: "Replaced battery" },
    { id: 3, laptop_id: 3, claim_date: "2024-08-20", issue: "Overheating", resolution: "Thermal paste applied" },
    { id: 4, laptop_id: 4, claim_date: "2024-08-25", issue: "Keyboard malfunction", resolution: "Replaced keyboard" },
    { id: 5, laptop_id: 5, claim_date: "2024-09-05", issue: "Software issue", resolution: "Reinstalled OS" },
    { id: 6, laptop_id: 6, claim_date: "2024-09-15", issue: "Power button failure", resolution: "Repaired" },
    { id: 7, laptop_id: 7, claim_date: "2024-09-20", issue: "Touchpad not working", resolution: "Replaced touchpad" },
    { id: 8, laptop_id: 8, claim_date: "2024-10-01", issue: "Display dead pixels", resolution: "Replaced display" },
    { id: 9, laptop_id: 9, claim_date: "2024-10-05", issue: "Hard drive failure", resolution: "Replaced hard drive" },
    { id: 10, laptop_id: 10, claim_date: "2024-10-10", issue: "Cooling fan noise", resolution: "Repaired fan" },
    { id: 11, laptop_id: 4, claim_date: "2024-08-25", issue: "Keyboard malfunction", resolution: "Replaced keyboard" },
    { id: 12, laptop_id: 4, claim_date: "2024-09-05", issue: "Software issue", resolution: "Reinstalled OS" },
  ]
}

# 1. To determine which laptop model has generated the highest total sales revenue.
# 2. To calculate the average rating of laptop model-x.
# 3. Find which laptop has most warranty issue.
# 4. To determine which laptop model has the highest total sales revenue in North  America.
# 5. To find laptops that have not been sold but have received a review rating of 4 or higher.
# 6. To calculate the percentage of discontinued laptops for each region based on sales data.
# 7. Who claimed warranty on 2024-08-20?



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
  const [isAllSelected, setAllSelected] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    dispatch({
      type: "update-input",
      payload: { name, value: type === "checkbox" ? checked : value },
    });
  };

  const handleNutritionsChange = (nutritions: string) => {
    dispatch({
      type: "update-input",
      payload: { name: "nutritions", value: nutritions },
    });
  };

  const handleCheckboxChange = (index: number) => {
    dispatch({ type: "toggle-row", payload: index });
  };

  const handleAllRowsSelection = () => {
    const newIsAllSelected = !isAllSelected;
    setAllSelected(newIsAllSelected);
    dispatch({ type: "toggle-all-rows", payload: newIsAllSelected });
  };

  const addRow = () => {
    dispatch({
      type: "add-row",
    });
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
          {state.showDetails ? "Details" : "Details"}
        </button>
        <button className="btn log" onClick={logData}>
          Log
        </button>
        <button className="btn delete" onClick={deleteSelectedRows}>
          Delete
        </button>
        <button className="btn add" onClick={toggleAddForm}>
          {show ? "Add": "Add"}
        </button>
      </div>

      <div className="Addform">
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
                  onChange={() =>
                    dispatch({ type: "update-shouldCook", payload: true })
                  }
                />
              </label>
              <label>
                No
                <input
                  type="checkbox"
                  name="shouldCook"
                  checked={state.inputValues.shouldCook === false}
                  onChange={() =>
                    dispatch({ type: "update-shouldCook", payload: false })
                  }
                />
              </label>
            </div>
            <div>
              <Nutritions items={items} onSelect={handleNutritionsChange} />
            </div>
            <div>
              <input
                placeholder="Max. Intake per Day"
                className="input maxIntake"
                name="maxIntake"
                value={state.inputValues.maxIntake}
                onChange={handleChange}
              />
            </div>
            <button className="btn" onClick={addRow}>
              Add
            </button>
          </div>
        )}
      </div>
      {state.showDetails && <Details rows={selectedRows} />}
    </div>
  );
}

export default Table;
