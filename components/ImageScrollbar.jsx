import { useContext } from "react";
import { Box, Icon, Flex} from '@chakra-ui/react'
import Image from 'next/image'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { dataAttr } from "@chakra-ui/utils";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
            as={FaArrowAltCircleLeft}
            onClick={() => scrollPrev()}
            fontSize="2xl"
            cursor="pointer"
            d={['none','none','none','block']}
            />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
            as={FaArrowAltCircleRight}
            onClick={() => scrollNext()}
            fontSize="2xl"
            cursor="pointer"
            d={['none','none','none','block']}
            />
        </Flex>
    )
}

const ImageScrollbar = ({data}) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: "hidden"}}>
            {data.map(image => (
                <Box key={image.id} itemId={image.id} width="910px" overflow="hidden" p="1">
                    <Image 
                    placeholder="blur" 
                    src={image.url} 
                    blurDataURL={image.url} 
                    width={800} 
                    height={400} 
                    alt="property"
                    size="(max-width:500px) 100px, (max-width:1023px) 400px, 1000px"
                    />
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default ImageScrollbar