'use client';

import { Box, Button, Flex, Text, Heading, HStack, StackProps, Icon, Stack } from "@chakra-ui/react";
import { CheckIcon } from "../Icon/Icon";

export const ListIcon = (props: StackProps) => {

    const { children, ...rest } = props

    return (

        <HStack as={'li'} {...rest}>
            <Icon as={CheckIcon} w="22px" h="22px" />
            <Text>{children}</Text>
        </HStack>

    )

}



export function Pricing() {

    return (

        <Box mx={'6'}>


            <Box as="section" maxW={'994px'} margin='auto' mt={'-256px'} borderRadius='12px' overflow={'hidden'} boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);'>

                <Flex direction={['column', 'column', 'row']} >

                    <Box textAlign={'center'} bg='#F0EAFB' p={['40px' , '40px' , '60px']}>

                        <Text fontSize={'2xl'} fontWeight={'800'} color='#171923' >
                            Premium PRO
                        </Text>


                        <Heading as={'h3'} fontSize={'6xl'} fontWeight='800' mt='16px'>
                            $329
                        </Heading>

                        <Text fontSize={'lg'} fontWeight='500' mt='8px'>
                            billed just once
                        </Text>

                        <Button colorScheme={'purple'} size='lg' w={['258px' , '282px' , '282px']} mt={'24px'}>
                            Get Started
                        </Button>

                    </Box>

                    <Box p={['50px' , '60px' , '60px']} fontSize={['15px' , '18px' , '18px']} bg={'#FFFFFF'}>

                        <Text fontSize={['15px' , '18px' , '18px']} fontWeight='400'>

                            Access these features when you get this pricing package for your business.

                        </Text>

                        <Stack as={'ul'} spacing='5' pt={'24px'} alignItems='start'>

                            <ListIcon>International calling and messaging API</ListIcon>
                            <ListIcon>Additional phone numbers</ListIcon>
                            <ListIcon>Automated messages via Zapier</ListIcon>
                            <ListIcon>24/7 support and consulting</ListIcon>

                        </Stack>


                    </Box>

                </Flex>

            </Box>

        </Box>

    )


}