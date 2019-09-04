import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";

import { getModelsForMake, getModelsForMakeYear } from "../utils/api";

export const ModelDropDown = ({ year, make, onChange }) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchModels = async () => {
      if (make) {
        setLoading(true);
        const models =
          year > 1900
            ? await getModelsForMakeYear({ year, make })
            : await getModelsForMake({ make });
        setModels(
          models.data.map(x => ({
            key: x.Model_ID,
            value: x.Model_Name,
            text: x.Model_Name
          }))
        );
        setLoading(false);
      } else {
        setModels([]);
      }
    };
    fetchModels();
  }, [year, make]);

  return (
    <Dropdown
      name="model"
      placeholder="Model..."
      fluid
      search
      selection
      loading={loading}
      options={models}
      onChange={onChange}
    />
  );
};
