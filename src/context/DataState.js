import { useState } from "react";
import { getNFTs } from "../data";
import DataContext from "./dataContext";
const NftState = (props) => {
  const initialList = getNFTs();

  const [NftList, setNftList] = useState(initialList);

  return (
    <DataContext.Provider value={NftList}>
      {props.children}
    </DataContext.Provider>
  );
};

export default NftState;
