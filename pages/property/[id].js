import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import { baseUrl, fetchApi } from '../../utils/fetchApi'
import ImageScrollbar from '../../components/ImageScrollbar'

const PropertyDetails = ({ property: {price, rentFrequency, title, baths, area, agency, rooms, isVerified, description, type, purpose, furnishingStatus, photos, amenities} }) => (
    <Box maxWidth={1000} p="4" margin="auto">
        {photos && <ImageScrollbar data={photos} />}
    </Box>
)

export async function getServerSideProps({params: { id }}) {
     const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)
     return {
         props: {
             property: data
         }
     }
}

export default PropertyDetails