import DataTable from "../components/DataTable";
function DashboardPage() {
  return (
    <div className="dashboardContainer">
      <div className="dashboardContent">
        <h1 className="dashboardHeading">NFT DETAILED INFORMATION</h1>
        <DataTable displayData={true} />
      </div>
    </div>
  );
}

export default DashboardPage;
