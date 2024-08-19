import React, { useState } from "react";
import "./Multiple.css";
import _ from "lodash";

interface Props {
  items: {
    id: number;
    label: string;
    value: string;
  }[];
  onSelect: (nutritions: string) => void;
}

function Nutritions(props: Props) {
  const { items, onSelect } = props;

  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleClick = (item: string) => {
    setSelectedItem((prev) => {
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

  const SelectAll = () => {
    if (selectedItem.length > 0) {
      setSelectedItem([]);
      onSelect("");
    } else {
      const allValues = items.map(item => item.value);
      setSelectedItem(allValues);
      onSelect(allValues.join(", "));
    }
  };

  return (
    <div className="multipleselectoption">
      <div className="showOptions" onClick={() => setOpen(!open)}>
        <input type="text" value={selectedItem.join(", ")} className="selecting-options" readOnly />
      </div>

      {open && (
        <div className="selectItem">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchbar"
            placeholder="Search"
          />
          <label>
            <input
              type="checkbox"
              checked={selectedItem.length === items.length}
              onChange={SelectAll}
            />
            Select All
          </label>
          {filteredItems.map((item) => (
            <label key={item.id} className="multipleOption">
              <input
                type="checkbox"
                checked={selectedItem.includes(item.value)}
                onChange={() => handleClick(item.value)}
              />
              {item.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default Nutritions;
