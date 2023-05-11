import { useState, useEffect } from 'react';
import './App.css';
import CardUI from './components/CardUI';
import Header from './components/Header';
import PaginationBar from './components/PaginationBar';
import Filter from './components/Filter';


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(20);

  const getData = () => {
    fetch('heliverse_mock_data.json')
    .then(function (response) {
      setLoading(false);
      return response.json();
    }).then(function (myJson) {
      setData(myJson)
      setLoading(false);
    });
  }
  useEffect(() => {
    getData()
  }, [])

  const indexOfLastUser = currentPage * 20;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    console.log(pageNumber)
    setCurrentPage(pageNumber)
  }

  

  return (
    <div className="App">
      <Header />
      <Filter />
      <CardUI className = "cards" users = {currentUsers} loading = {loading}/>
      <PaginationBar usersPerPage={usersPerPage} totalUsers={data.length} paginate = {paginate}/>
    </div>
  );
}

export default App;
