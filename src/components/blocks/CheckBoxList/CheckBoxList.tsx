import { type FC } from "react";

type T_Data = {
  _id: string;
};

interface CheckBoxListProps {
  data: T_Data[];
  selectHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    _id: string
  ) => void;
  selected: string[];
}

import styles from "./CheckBoxList.module.scss";

const CheckBoxList: FC<CheckBoxListProps> = ({
  data,
  selectHandler,
  selected,
}) => {
  return (
    <div className={styles.list}>
      {data &&
        data.map(({ _id }) => (
          <div className={styles.item} key={_id}>
            <input
              onChange={(event) => selectHandler(event, _id)}
              id={_id}
              type="checkbox"
            />
            <label
              className={selected.includes(_id) ? styles.checked : ""}
              htmlFor={_id}
            >
              {_id}
            </label>
          </div>
        ))}
    </div>
  );
};

export default CheckBoxList;
