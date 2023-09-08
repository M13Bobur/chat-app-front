import React from "react";
import { Switch } from "antd";
import { Label, SwitchBlock } from "./style";
import Select from "../Select";
import "./style.css";

const StyledSwitch = ({
  onChange,
  value,
  label,
  disabledCheckbox,
  reasons,
  handleSetReason,
  workId,
}) => {
  return (
    <SwitchBlock>
      <Label>{label}</Label>
      <Switch
        disabled={disabledCheckbox}
        defaultChecked={value?.status}
        onChange={(e) => onChange(e, workId)}
      />

      <div className={!value?.status ? "hidden__display" : ""}>
        <Select
          disabled={!value?.status}
          handleChange={handleSetReason}
          id={workId}
          options={reasons}
          title=""
          defaultVal={value?.reason}
        />
      </div>
    </SwitchBlock>
  );
};

export default React.memo(StyledSwitch);
