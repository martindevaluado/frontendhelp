import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { BsCodeSlash } from 'react-icons/bs'

export default function PracticeSites() {
  return (
    <Link href="/practicesites">
      <Box
        _hover={{
          background: 'teal.400',
          color: 'white',
        }}
        bg={'white'}
        borderRadius={12}
        borderWidth={1}
        borderColor={'#3a3a3a'}
        className="mainBox"
        p={4}
      >
        <HStack>
          <Box
            bgGradient="linear(to-b, teal.500, teal.300)"
            borderRadius={'100%'}
            color={'white'}
            p={4}
          >
            <Icon as={BsCodeSlash} h={8} w={8} />
          </Box>
          <Box pl={2}>
            <Text fontSize="3xl" textStyle="title">
              Sitios de Práctica
            </Text>
            <Text
              fontSize="md"
              sx={{
                '.mainBox:hover &': {
                  color: 'gray.800',
                },
              }}
              textStyle="description"
            >
              Codewars, FrontEndMentor, Codepen
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  )
}
