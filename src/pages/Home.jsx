import DataTable from "../components/DataTable";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* <svg viewbox="0 0 10 2">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize="5em"
          fill="none"
          strokeWidth="2%"
          stroke="#b759b9"
          fontFamily="Roboto"
        >
          NFT
        </text>
      </svg> */}

      <p className="nftTxt">NFT</p>
      <DataTable />
      <NavLink className="btnSeeMore" to="/wallet">
        See More....
      </NavLink>
      <NavLink className="btnConnect2" to="/wallet">
        Connect Your Wallet to Check The Details of NFTs
      </NavLink>
    </div>
  );
};

export default Home;
