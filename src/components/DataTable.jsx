import { useContext } from "react";
import DataContext from "../context/dataContext";

const DataTable = ({ displayData }) => {
  const NftList = useContext(DataContext);

  // const [nftList, setNftList] = useState([]);
  // let nftList = getNFTs();

  // useEffect(() => {
  //   // displayFlag ? setNftList(getNFTs()) : setNftList([]);

  //   console.log(displayFlag, "in use effect");
  //   console.log(nftList);
  // }, []);

  return (
    <div className="tableContiner">
      <table className="dataTable">
        <thead>
          <tr>
            <th>NFT</th>
            <th>ENTRY</th>
            <th>$ VALUE AT ENTRY</th>
            <th>ESTIMATED EXIT</th>
            <th>DOLLAR VALUE</th>
            <th>GAINS</th>
            <th>DAYS OF OWNERSHIP</th>
            <th>PERCENTAGE</th>
          </tr>
        </thead>
        <tbody>
          {displayData
            ? NftList.map((nft) => {
                return (
                  <tr className="row" key={nft.id}>
                    <td>{nft.name}</td>
                    <td>{nft.entry}</td>
                    <td>{"$" + nft["entry value"]}</td>
                    <td>{nft.exit}</td>
                    <td>{"$" + nft["dollar value"]}</td>
                    <td>{"$" + nft.gains}</td>
                    <td>{nft.days}</td>
                    <td>{nft.percentage}</td>
                  </tr>
                );
              })
            : console.log(NftList.length)}
        </tbody>
      </table>
    </div>
  );
};

DataTable.defaultProps = {
  displayData: false,
};

export default DataTable;
