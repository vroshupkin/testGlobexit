
import { useEffect, useState } from 'react';
import './App.css'
import { SearchBar } from './components/SearchBar'
import { UserCard } from './components/UserCard'
import { TUser } from './models/user.model';
import { getUser } from './api/getUsers';



function App() {
  
  const [users, setUsers] = useState<TUser[]>([]);
  const [filterVal, setFilterVal] = useState('');
  const [filtredUsers, setFiltredUsers] = useState<TUser[]>([]);


  useEffect(() => 
  {
    getUser().then(setUsers);

  }, [])

  useEffect(() => 
  {

    
    setFiltredUsers(
      users.filter((v) => 
        filterVal === '' ||
        v.name.toLowerCase().includes(filterVal)  ||
        v.email.toLowerCase().includes(filterVal) || 
        v.phone.toLowerCase().includes(filterVal)
      )
    )


  }, [users, filterVal])
  
  return (
    <>
      <div style={{marginTop: '24px', position: 'relative'}}>
        <SearchBar onChange={e => setFilterVal(e.target.value.toLowerCase())}/>      
      </div>
        
      <div style={{display: 'flex', margin: 'auto', width: '1121px', marginTop: '32px'}}>
        <div style={{display: 'flex', gap: '25px', flexWrap: 'wrap'}}>
          {filtredUsers.map(v => 
            <UserCard name={v.name} phone={v.phone} email={v.email}
          />)}
      </div>
      
      </div>
      
    </>
  )
}

export default App
