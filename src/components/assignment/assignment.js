// import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "../course/course.css";
// import PropTypes from 'prop-types';
// import { useEffect } from 'react';
// import { Link as RouterLink, useLocation } from 'react-router-dom';
// // material
// import { styled } from '@mui/material/styles';
// import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// // components

// import Scrollbar from '../../components/Scrollbar';
// import NavSection from '../../components/NavSection';

// //
// import sidebarConfig from './SidebarConfig';


// // ----------------------------------------------------------------------

// const DRAWER_WIDTH = 280;

// const RootStyle = styled('div')(({ theme }) => ({
//   [theme.breakpoints.up('lg')]: {
//     flexShrink: 0,
//     width: DRAWER_WIDTH
//   }
// }));

// const AccountStyle = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(2, 2.5),
//   borderRadius: theme.shape.borderRadiusSm,
//   backgroundColor: theme.palette.grey[200]
// }));

// // ----------------------------------------------------------------------

// DashboardSidebar.propTypes = {
//   isOpenSidebar: PropTypes.bool,
//   onCloseSidebar: PropTypes.func
// };

// export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     if (isOpenSidebar) {
//       onCloseSidebar();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const renderContent = (
//     <Scrollbar
//       sx={{
//         height: '100%',
//         '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' }
//       }}
//     >
//       <Box sx={{ px: 2.5, py: 3 }}>
//         <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
//           <Logo />
//         </Box>
//       </Box>

//       <Box sx={{ mb: 5, mx: 2.5 }}>
//         <Link underline="none" component={RouterLink} to="#">
//           <AccountStyle>
//             <Avatar  alt="photoURL" />
//             <Box sx={{ ml: 2 }}>
//               <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
//                 {}
//               </Typography>
//               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                 {account.role}
//               </Typography>
//             </Box>
//           </AccountStyle>
//         </Link>
//       </Box>

//       <NavSection navConfig={sidebarConfig} />

//       <Box sx={{ flexGrow: 1 }} />

//       <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
//         <Stack
//           alignItems="center"
//           spacing={3}
//           sx={{
//             p: 2.5,
//             pt: 5,
//             borderRadius: 2,
//             position: 'relative',
//             bgcolor: 'grey.200'
//           }}
//         >
//           <Box
//             component="img"
//             src=""
//             sx={{ width: 100, position: 'absolute', top: -50 }}
//           />

//           <Box sx={{ textAlign: 'center' }}>
//             <Typography gutterBottom variant="h6">
//               Get more?
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//               From only $69
//             </Typography>
//           </Box>

//           <Button
//             fullWidth
//             href="https://material-ui.com/store/items/minimal-dashboard/"
//             target="_blank"
//             variant="contained"
//           >
//             Upgrade to Pro
//           </Button>
//         </Stack>
//       </Box>
//     </Scrollbar>
//   );

//   return (
//     <RootStyle>
//       <MHidden width="lgUp">
//         <Drawer
//           open={isOpenSidebar}
//           onClose={onCloseSidebar}
//           PaperProps={{
//             sx: { width: DRAWER_WIDTH }
//           }}
//         >
//           {renderContent}
//         </Drawer>
//       </MHidden>

//       <MHidden width="lgDown">
//         <Drawer
//           open
//           variant="persistent"
//           PaperProps={{
//             sx: {
//               width: DRAWER_WIDTH,
//               bgcolor: 'background.default'
//             }
//           }}
//         >
//           {renderContent}
//         </Drawer>
//       </MHidden>
//     </RootStyle>
//   );
// }

import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div m-3
      style={{ display: 'flex', height: '70vh', overflow: 'scroll initial', margin:'3rem' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            CRNS
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Assignment 1</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Assignment 2</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Assignment 3</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem >
              Assignment 4
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem >
              Assignment 5
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;