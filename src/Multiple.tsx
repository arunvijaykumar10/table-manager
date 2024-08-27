import React, { useState } from "react";
import _ from "lodash";
import "./Multiple.css";
import "./Table.css";

interface Props {
  items: {
    id: number;
    label: string;
    value: string;
  }[];
  onSelect: (nutritions: string) => void;
  errorMessage?: string;
}

function Nutritions({ items, onSelect, errorMessage }: Props) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleClick = (item: string) => {
    setSelectedItems((prev) => {
      const newSelected = prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item];

      onSelect(newSelected.join(", "));
      return newSelected;
    });
  };

  const filteredItems = _.filter(items, (item) =>
    _.includes(_.toLower(item.value), _.toLower(search))
  );

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
      onSelect("");
    } else {
      const allValues = items.map((item) => item.value);
      setSelectedItems(allValues);
      onSelect(allValues.join(", "));
    }
  };

  return (
    <div className="multipleselectoption">
      <div className="showOptions" onClick={() => setOpen(!open)}>
        <input
          placeholder="Nutritions"
          type="text"
          value={selectedItems.join(", ")}
          readOnly
          className="nutritions"
          required
        />
      </div>

      {open && (
        <div className="selectItem">
          <label>
            <input
              type="checkbox"
              checked={selectedItems.length === items.length}
              onChange={handleSelectAll}
            />
            Select All
          </label>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchInput"
          />
          {filteredItems.map((item) => (
            <label key={item.id} className="multipleOption">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.value)}
                onChange={() => handleClick(item.value)}
              />
              {item.label}
            </label>
          ))}
        </div>
      )}
      {errorMessage && <p className="paragraph error">{errorMessage}</p>}
    </div>
  );
}

export default Nutritions;
