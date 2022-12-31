import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  MoonIcon,
  SunIcon,
  ArrowDownIcon,
} from "@chakra-ui/icons";



import { Link as RouterLink } from "react-router-dom";
import AllRoutes from "./AllRoutes";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar2() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "cyan.900")} px={4} position={"fixed"} width={"100%"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
                 
                 Akash F.
                 
            </Box>
            
          </HStack>
          <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
             
            <RouterLink to={"/"} >Home</RouterLink>
            <RouterLink to={"/about"} >About</RouterLink>
            <RouterLink to={"/skills"} >Skills</RouterLink>
            <RouterLink to={"/project"} >Project</RouterLink>
            <RouterLink to={"/contact"} >Contact</RouterLink>


            </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"purple"}
              size={"sm"}
              mr={4}
              leftIcon={<ArrowDownIcon/>}
            >
              Resume
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
            <RouterLink to={"/"} >Home</RouterLink>
            <RouterLink to={"/about"} >About</RouterLink>
            <RouterLink to={"/skills"} >Skills</RouterLink>
            <RouterLink to={"/project"} >Project</RouterLink>
            <RouterLink to={"/contact"} >Contact</RouterLink>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box>
        <AllRoutes />
      </Box>
    </>
  );
}
