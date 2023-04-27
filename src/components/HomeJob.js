import { SimpleGrid, Box, Container, Text, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton, useColorMode } from "@chakra-ui/react";

'use stricted'

export default function HomeJob() {
    const { colorMode } = useColorMode()

    return (
        <Container
              maxW="1200px"
              py="50px"
            >
            <Box display="flex">
                <Box display="block" w="300px">
                    <Text
                        color="palette.mint"
                        fontWeight="500"
                        fontSize="18px"
                        mb="5px"
                    >
                        Trending Job!
                    </Text>
                    <Text
                        fontSize="32px"
                        fontWeight="600"
                        color="palette.dark"
                        lineHeight="40px"
                    >
                        Get Your Job in your Hand !
                    </Text>
                </Box>
                <SimpleGrid 
                  templateColumns='repeat(auto-fill, minmax(280px, 1fr))'
                  spacing={4}
                >
                    <Card maxW='4xl'>
                        <CardBody>
                            <Image
                            src='images/c-logo.png'
                            alt='company logo'
                            w="100px"
                            mb="20px"
                            />
                            <Box display="flex" gap="5px">
                                <Tag variant="solid" bg='palette.dark'>Programmer</Tag>
                                <Tag variant="solid" bg='palette.dark'>Analyis</Tag>
                            </Box>
                            <Stack mt='2' spacing='3'>
                            <Heading fontSize="24px">Software Engineer & Spesialist Data Analyis </Heading>
                            <Text>
                            Requirment : <br />

                            Our state-of-the-art technology and advanced filtering options enable you to find the perfect job match based on your skills, experience, and preferences.
                            </Text>
                            </Stack>

                            <Button mt="1em" bg="palette.mint" color={colorMode == "light" ? "palette.white" : "palette.dark"}>Go Apply</Button>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </Box>
            
        </Container>
    );
}