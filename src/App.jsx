import './App.css'
import { useState } from 'react'

//mock data
import userData from './userData'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = userData.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <h1>Your Name</h1>
      <h3>Bangkok, Thailand</h3>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="user-list">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={`${user.first_name} Avatar`} />
            <p>{`${user.first_name} ${user.last_name}`}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
