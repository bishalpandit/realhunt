import { Box, Flex, Text, Avatar, Button } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import { baseUrl, fetchApi } from '../../utils/fetchApi'
import ImageScrollbar from '../../components/ImageScrollbar'

const PropertyDetails = ({ property: { price, rentFrequency, title, baths, area, agency, rooms, isVerified, description, type, purpose, furnishingStatus, photos, amenities } }) => (
    <Box maxWidth={1000} p="4" margin="auto">
        {photos && <ImageScrollbar data={photos} />}
        <Box w='full' p='6'>
            <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                    <Text>Rs {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                </Flex>
                <Box>
                    <Avatar size="lg" src={agency?.logo?.url} />
                </Box>
            </Flex>
            <Flex alignItems="center" p="1" justifyContent="space-between" w={250} color="blue.400">
                {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
            </Flex>
            <Box>
                <Text fontSize="lg" marginY="5" fontWeight="bold">
                    {title}
                </Text>
                <Text lineHeight="2" color="gray.600">
                    {description}
                </Text>
            </Box>
            <Flex flexWrap="wrap" textTransform="uppercase">
                <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
                    <Text>Type</Text>
                    <Text fontWeight="bold">{type}</Text>
                </Flex>
                <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
                    <Text>Purpose</Text>
                    <Text fontWeight="bold">{purpose}</Text>
                </Flex>
                {furnishingStatus && (
                    <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
                    <Text>Furnishing Status</Text>
                    <Text fontWeight="bold">{furnishingStatus}</Text>
                </Flex>
                )}
            </Flex>
            <Box>
                {amenities.length && <Text fontSize="2xl" weight="black" marginY="5">Amenities</Text>}
                <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
                    {amenities.map(item => (
                        item.amenities.map(amenity => (
                            <Button key='amenity.id' margin="2" color="blue.400">
                                {amenity.text}
                            </Button>
                        ))
                    ))}
                </Flex>
            </Box>
        </Box>
    </Box>
)

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)
    return {
        props: {
            property: data
        }
    }
}

export default PropertyDetails