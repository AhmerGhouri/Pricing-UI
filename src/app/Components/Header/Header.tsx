'use client';

import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Header() {
    return (

        <Box pb={'112px'}>


            <Box background={"#6B46C1"} textAlign={'center'} pt='90px' pb='198px' px={'8'}>

                <Heading color={"#F7FAFC"} fontWeight='800' textAlign={['left' , 'center' , 'center']} fontSize={['3xl' , '3xl' , '5xl']} letterSpacing={'-1%'}>
                    Simple pricing for your business
                </Heading>
                <Text color={"#F7FAFC"} fontSize={'24px'} pt='16px' textAlign={['left' , 'center' , 'center']} opacity='84%' fontStyle={'Medium'}>
                    Plans that are carefully crafted to suit your business.
                </Text>

            </Box>

        </Box>

    )
}
