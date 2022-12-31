import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  PopoverContent,
  PopoverTrigger,
  Popover,
  Text,
  Collapse,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

//   import theme from "./theme/theme"
import AllRoutes from "./AllRoutes";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("purple.200", "purple.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen1, onToggle } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("purple.100", "purple.900")} px={4}>

      <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'block' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen1 ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} >
        <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('purple.800', 'white')}>
              Logo
            </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button color={"purple"} backgroundColor={"#82C3Ea"}>
                Resume
              </Button>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <AllRoutes />
      </Box>

      <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <RouterLink
            p={2}
            to={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </RouterLink>
        </Box>
      ))}
      
    </Stack>
  );
};


const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
         ))}
      </Stack>
    );
  };


  const MobileNavItem = ({label,href}) => {
    const { isOpen, onToggle } = useDisclosure();
  console.log(label)
    return (
      <Stack spacing={4} onClick={onToggle}>
        <Flex
          py={2}
          as={RouterLink}
          to={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          
        </Flex>
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {/* {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))} */}

        </Stack>
      </Collapse>
      </Stack>
    );
  };
  


const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Contact ",
    href: "/contact",
  },
  {
    label: "About me",
    href: "/about",
  },
  {
    label: "Project",
    href: "/project",
  },
];
