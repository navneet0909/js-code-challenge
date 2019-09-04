import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";

import {
  getAllMakes,
} from "../utils/api";

export const MakeDropDown = ({ onChange }) => {
  const [makes, setMakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMakes = async () => {
      const makes = await getAllMakes();
      setMakes(
        makes.data
          .map(x => ({
            key: x.Make_ID,
            value: x.Make_Name,
            text: x.Make_Name
          }))
          .slice(0, 300)
      );
      setLoading(false);
    };
    fetchMakes();
  }, []);

  return (
    <Dropdown
      name="make"
      placeholder="Make..."
      fluid
      search
      selection
      loading={loading}
      options={makes}
      onChange={onChange}
    />
  );
};