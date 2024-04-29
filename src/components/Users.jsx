import { useState } from "react";
import Api from "../utils/Api";
import DataTable from "react-data-table-component";
import Search from "./Search";
import Pagination from "./Pagination";
import UserDetails from "./UserDetails";

export default function Users() {
  const [data, loading, error] = Api(
    "https://jsonplaceholder.typicode.com/users "
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const itemsPerPage = 5;

  const columns = [
    { name: "ID", selector: (row) => row.id, width: "60px", sortable: true },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
    },
    { name: "Email", selector: (row) => row.email },
    {
      name: "City",
      selector: (row) => row.address.city,
    },
  ];

  const filteredData =
    data &&
    data.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };
  const paginatedData =
    filteredData &&
    filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  const pageCount =
    filteredData && Math.ceil(filteredData.length / itemsPerPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const openUserModal = (user) => {
    setSelectedUser(user);
  };
  const closeModal = () => {
    setSelectedUser(null);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (error) {
    return <div className="loading">Error: {error.message}</div>;
  }
  return (
    <div>
      <h1 className="heading">Users</h1>
      <Search onSearch={handleSearch} />
      <div className="data-container">
        <DataTable
          columns={columns}
          data={paginatedData}
          responsive
          pagination={false}
          onRowClicked={(row) => openUserModal(row)}
          customStyles={{
            rows: {
              style: {
                cursor: "pointer",
              },
            },
          }}
        />
      </div>
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
      <UserDetails
        isOpen={selectedUser !== null}
        closeModal={closeModal}
        user={selectedUser}
      />
    </div>
  );
}
