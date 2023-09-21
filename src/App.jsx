import './App.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet } from 'react-router-dom';
import { AdUnits, Dashboard, Logout, Subscriptions } from '@mui/icons-material';



function App() {

  return (
    <div className='grid grid-cols-5'>
     <div className='w-full bg-purple-500'>
     <div>
     <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <Dashboard />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <Subscriptions />
              </ListItemIcon>
              <ListItemText primary={"Manage Subscription"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <AdUnits />
              </ListItemIcon>
              <ListItemText primary={"Young Brain"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <AdUnits />
              </ListItemIcon>
              <ListItemText primary={"Mid Career"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <AdUnits />
              </ListItemIcon>
              <ListItemText primary={"Vendor"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <AdUnits />
              </ListItemIcon>
              <ListItemText primary={"Consultant"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <Dashboard />
              </ListItemIcon>
              <ListItemText primary={"Reports"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <Logout />
              </ListItemIcon>
              <ListItemText primary={"Sign Out"} />
            </ListItemButton>
          </ListItem>
      </List>
    </div>
     </div>
     <div className='w-full col-span-4'>
      <Outlet />
     </div>
    </div>
  )
}

export default App
