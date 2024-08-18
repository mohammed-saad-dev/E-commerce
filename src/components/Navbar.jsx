import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive.js";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled(Link)`
  font-weight: bold;
  color: black;
  text-decoration: none;
  font-size: 30px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  text-decoration: none;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }}></SearchIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo to="/">osd .</Logo>
        </Center>
        <Right>
          <MenuItem to="/register">REGISTER</MenuItem>
          <MenuItem to="/signin">SIGN IN</MenuItem>
          <MenuItem to="/cart">
            <Badge color="secondary" badgeContent={4}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
