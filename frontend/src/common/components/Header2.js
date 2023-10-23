import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { axiosGet } from '../../helper/AxiosInstance.ts';

const drawerWidth = 240;
const navItems = ['Login', 'Register', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    getComments();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Bigarson
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item} to={`/${item.toLowerCase()}`}>
            <ListItem key={item} disablePadding>
          
              <ListItemButton sx={{ textAlign: 'center' }}>

                <ListItemText primary={item} />

              </ListItemButton>

            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  //Redirect
  const navigate = useNavigate();

  //Kendime not:
  //Use Link when you want to create a clickable element (like a button or a text link) that takes the user to a different page.
  //Use useNavigate when you need to navigate based on some event or condition within a component. 
  //This is useful for cases where you want to navigate programmatically, such as after a form submission or based on some conditional logic.

  //Deneme metodu
  const getComments = async () => {
    try {
      const response = await axiosGet("https://www.google.com/")
      if (response.status === 200 ) {
        navigate("/login")
      }
    } catch (err) {
      console.error(err);
    }
  }
  

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Bigarson
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`}>

                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>

              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Ne işe yaradığını anlamadım. Layout düzenlerken kaldırmak zorunda kaldım. */}
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}



export default DrawerAppBar;