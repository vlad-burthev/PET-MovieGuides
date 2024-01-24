import type { FC } from "react";
import CheckBoxList from "../../../blocks/CheckBoxList";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { addType, removeType } from "../../../../store/movieSlice/movieSlice";

interface TypeListProps {}

const TypeList: FC<TypeListProps> = () => {
  const type = [
    { _id: "TV" },
    { _id: "Movie" },
    { _id: "OVA" },
    { _id: "Special" },
  ];

  const dispatch = useAppDispatch();

  const { type: selectedType } = useAppSelector((state) => state.movieSlice);

  const selectTypeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    _id: string
  ) => {
    if (event.currentTarget.checked) {
      dispatch(addType(_id));
    } else {
      dispatch(removeType(_id));
    }
  };

  return (
    <div>
      <h2>Select Type</h2>
      <CheckBoxList
        selectHandler={selectTypeHandler}
        data={type}
        selected={selectedType}
      />
    </div>
  );
};

export default TypeList;
