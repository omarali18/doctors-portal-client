import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment'

const drawerWidth = 240;
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin } = useAuth()

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <NavLink style={{ textDecoration: 'none', color: 'gray' }} to="/home"><ListItem button>
                    <ListItemIcon>
                        <HomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem></NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'gray' }} to="/Appointment"><ListItem button>
                    <ListItemIcon>
                        <HomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Appointment" />
                </ListItem></NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'gray' }} to={`${url}`}><ListItem button>
                    <ListItemIcon>
                        <HomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem></NavLink>
                {
                    admin && <Box>
                        <NavLink style={{ textDecoration: 'none', color: 'gray' }} to={`${url}/makeAdmin`}><ListItem button>
                            <ListItemIcon>
                                <HomeIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Make Admin" />
                        </ListItem></NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'gray' }} to={`${url}/addDoctor`}><ListItem button>
                            <ListItemIcon>
                                <HomeIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Add Doctor" />
                        </ListItem></NavLink>

                    </Box>
                }


            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
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
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

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
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome />
                    </Route>
                    <Route path={`${path}/payment/:AppointmentId`}>
                        <Payment />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute to={`${url}/addDoctor`}>
                        <AddDoctor />
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
