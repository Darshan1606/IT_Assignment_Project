import React ,{useState} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { CDBNavbar, CDBNavBrand, CDBNavItem, CDBNavLink, CDBDropDown, CDBDropDownMenu, CDBDropDownToggle, CDBBtn, CDBNavToggle, CDBIcon, CDBCollapse, CDBNavbarNav, CDBContainer } from "cdbreact";
import './navbar.css'
const Navbar = () => {
  const [collapse2, setCollapse2] = useState(false);

  const bgBlack = { backgroundColor: "#5EA3A3", color: "#f4f4f4" };


  return (
    
        <Router style={{ width: "100%" }}>
              <CDBNavbar style={bgBlack} dark expand="md" scrolling>
                <CDBNavBrand href="/">
                  <strong>Assignment WebApp</strong>
                </CDBNavBrand>
                <CDBNavToggle
                  onClick={() => {
                    setCollapse2(!collapse2);
                  }}
                />
                <CDBCollapse id="navbarCollapse1" isOpen={collapse2} navbar>
                  {/* <CDBNavbarNav left className="align-items-right">
                    <CDBNavItem>
                      <CDBDropDown>
                        <CDBDropDownToggle
                          caret
                          style={{ padding: 0 }}
                          color="dark"
                          circle
                        >
                          Categories
                        </CDBDropDownToggle>
                        <CDBDropDownMenu>
                          Coming soon #pleaseStayUpdated.
                        </CDBDropDownMenu>
                      </CDBDropDown>
                    </CDBNavItem>
                    <CDBNavItem>
                      <CDBBtn circle color="dark" style={{ padding: 0 }}>
                        <CDBNavLink to="#">Help</CDBNavLink>
                      </CDBBtn>
                    </CDBNavItem>
                    <CDBNavItem>
                      <CDBBtn circle color="dark" style={{ padding: 0 }}>
                        <CDBNavLink to="#">About</CDBNavLink>
                      </CDBBtn>
                    </CDBNavItem>
                  </CDBNavbarNav> */}
                  <CDBNavbarNav right>
                   
{/* 
                    <CDBNavItem>
                      <CDBBtn circle color="dark" style={{ padding: 0 }}>
                        <CDBNavLink to="#">
                         
                          Login
                        </CDBNavLink>
                      </CDBBtn>
                    </CDBNavItem> */}
                    <CDBNavItem >
                      <CDBBtn className="navlogin"  color="white" style={{ padding:"0px 10px", }}>
                        <CDBNavLink to="#" style={{ color: "#000",  }}>
                          LogIn
                        </CDBNavLink>
                      </CDBBtn>
                    </CDBNavItem>
                  </CDBNavbarNav>
                </CDBCollapse>
              </CDBNavbar>
        </Router>
    
  );
};
export default Navbar;
