import { Link } from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

const NavBar = () => (
    <Flex p="2" borderBottom={1} borderColor="gray.100">
        <Box fontSize="xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingLeft="2" >Real Hunt</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color={.400} />
                <MenuList>
                    <Link>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
)

export default NavBar