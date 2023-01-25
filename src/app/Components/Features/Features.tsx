import React, { ElementType } from "react";
import { Box, Text, StackProps, Stack, HStack , Icon, Flex } from "@chakra-ui/react";
import { MoneyBackGuaranteeIcon, HassleFreeIcon, MonthlySubscriptionIcon } from "../Icon/Icon";

interface FeatureProps extends StackProps {

    icon: ElementType

}


function Feature(props: FeatureProps) {

    const { icon, children, ...rest } = props

    return (


        <HStack {...rest} spacing='24px'>
            <Icon as={icon} boxSize='48px' w={['30px' , '40px' , '40px']}></Icon>
            <Text textAlign={'left'} fontSize={['15px' ,'18px','18px']} fontWeight='700'>{children}</Text>
        </HStack>

    )


}




export function Features() {


    return (
        

            <Box maxW={'1024px'} m='auto' pt={'60px'}>


                <Stack direction={['column' , 'column' , 'row']} px={'48px'} spacing='20px'>

                    <Feature icon={MoneyBackGuaranteeIcon}>30 days money back Guarantee</Feature>

                    <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>

                    <Feature icon={MonthlySubscriptionIcon}>No monthly subscription Pay once and for all</Feature>

                </Stack>



            </Box>

    )


}