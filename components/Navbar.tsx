import {HamburgerIcon, CloseIcon} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import {ReactNode} from "react";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({children}: {children: ReactNode}) => (
  <Link
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
    px={2}
    py={1}
    rounded={"md"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Box px={0} py={2}>
        <Flex alignItems={"center"} h={12} justifyContent={"space-between"}>
          <IconButton
            aria-label={"Open Menu"}
            display={{md: !isOpen ? "none" : "inherit"}}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            size={"md"}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={"center"} spacing={8}>
            <Box fontSize={"xl"} fontWeight="bold" opacity={"0.9"}>
              Frontend Help
            </Box>
            <HStack as={"nav"} display={{base: "none", md: "flex"}} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton as={Button} cursor={"pointer"} rounded={"full"} variant={"link"}>
                {/* <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                /> */}
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
