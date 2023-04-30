import { Button, Image, Tag, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Text } from "@chakra-ui/react"

export default function HomeJob() {

    return (
        <div className="contianer mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10">
            <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1">
                <div className="lg:max-w-xs text-center lg:text-left md:text-center sm:text-center">
                    <h5 className="text-mint text-md font-medium mb-1 md:text-xl sm:text-sm">Trending Job !</h5>
                    <h1 className="text-gunmetal text-2xl lg:text-4xl md:text-4xl sm:text-2xl font-bold mb-3">Get Your Job in your Hand !</h1>
                    <a className="underline underline-offset-2 text-sm hover:text-blue-600" href="">View more</a>
                </div>
                <div className="lg:col-span-3 py-4 lg:py-0 sm:py-4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <Card maxW='sm' className="left-0 top-0 m-auto">
                        <CardBody backgroundColor="#ffff" className="rounded-md">
                            <Image
                            src='/images/c-logo.png'
                            alt='logo-company'
                            borderRadius='lg'
                            w="120px"
                            />
                            <div className="flex mt-4 mb-4 gap-1">
                                <Tag as="a" href="name-tag" backgroundColor="palette.dark" color="#ffff">Programmer</Tag>
                                <Tag as="a" href="name-tag" backgroundColor="palette.dark" color="white">Analyis</Tag>
                            </div>
                                
                            <Heading 
                              fontSize="24px" >Software Engineer & Spesialist Data Analyis</Heading>
                            <Text 
                              className="mt-4">
                                Requirment : <br />

                                Our state-of-the-art technology and advanced filtering options enable you to find the perfect[...]
                                </Text>
                            <Button  
                              borderRadius={"sm"} 
                              color="palette.white" 
                              className="mt-3" 
                              colorScheme="mint"
                              fontWeight="500" 
                              fontSize="14px" 
                            >Apply Now</Button>
                        </CardBody>
                    </Card>                              
                    </div>
                </div>
            </div>
        </div>
    );
}