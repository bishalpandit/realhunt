import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { NavBar } from './NavBar'

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxWidth="1280" m="auto">
                <NavBar />
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </Box>
    </>
)

export default Layout