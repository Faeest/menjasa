import { Button, Image, Tag, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Text } from "@chakra-ui/react"

export default function cardJob() {
    return (
        <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  text-center lg:text-left md:text-center sm:text-center mb-14">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                <Card maxW='md' p="0.75rem" variant={"filled"} shadow={"md"} bgColor="#ffff" borderRadius='lg' className="left-0 top-0 m-auto">
                    <CardBody >
                        <div className="br-line"></div>
                        <Image 
                            src="https://fakeimg.pl/400x200"
                            alt="company-logo"   
                            w="100%"
                        />
                        <div className="flex mt-4 mb-3 gap-1">
                            <Tag borderRadius={"sm"} as="a" href="name-tag" backgroundColor="palette.dark" color="palette.light" _dark={{backgroundColor:"palette.light", color:"palette.dark"}}>Programmer</Tag>
                            <Tag borderRadius={"sm"} as="a" href="name-tag" backgroundColor="palette.dark" color="palette.light" _dark={{backgroundColor:"palette.light", color:"palette.dark"}}>Analyis</Tag>
                        </div>
                        <Heading 
                            fontSize="20px"
                            className="mb-3"
                            >Software Engineer & Spesialist Data Analyis
                        </Heading>
                        <Text as="a" color="palette.mint" href="job?city=value" className="font-bold text-md underline underline-offset-4">Kota Malang</Text>
                        <Text 
                            className="mt-3">
                                Our state-of-the-art technology and advanced filtering options enable you to find the perfect[...]
                        </Text>
                        <Text className="mt-3 italic">Posted 22Hours ago</Text>
                    </CardBody>
                </Card>
                <Card maxW='md' p="0.75rem" variant={"filled"} shadow={"md"} bgColor="#ffff" borderRadius='lg' className="left-0 top-0 m-auto">
                    <CardBody >
                        <div className="br-line"></div>
                        <Image 
                            src="https://fakeimg.pl/400x200"
                            alt="company-logo"   
                            w="100%"
                        />
                        <div className="flex mt-4 mb-3 gap-1">
                            <Tag borderRadius={"sm"} as="a" href="name-tag" backgroundColor="palette.dark" color="palette.light" _dark={{backgroundColor:"palette.light", color:"palette.dark"}}>Programmer</Tag>
                            <Tag borderRadius={"sm"} as="a" href="name-tag" backgroundColor="palette.dark" color="palette.light" _dark={{backgroundColor:"palette.light", color:"palette.dark"}}>Analyis</Tag>
                        </div>
                        <Heading 
                            fontSize="20px"
                            className="mb-3"
                            >Software Engineer & Spesialist Data Analyis
                        </Heading>
                        <Text as="a" color="palette.mint" href="job?city=value" className="font-bold text-md underline underline-offset-4">Kota Malang</Text>
                        <Text 
                            className="mt-3">
                                Our state-of-the-art technology and advanced filtering options enable you to find the perfect[...]
                        </Text>
                        <Text className="mt-3 italic">Posted 22Hours ago</Text>
                    </CardBody>
                </Card>
                <Card maxW='md' p="0.75rem" variant={"filled"} shadow={"md"} bgColor="#ffff" borderRadius='lg' className="left-0 top-0 m-auto">
                    <CardBody >
                        <div className="br-line"></div>
                        <Image 
                            src="https://fakeimg.pl/400x200"
                            alt="company-logo"   
                            w="100%"
                        />
                        <div className="flex mt-4 mb-3 gap-1">
                            <Tag borderRadius={"sm"} as="a" href="name-tag" backgroundColor="palette.dark" color="palette.light" _dark={{backgroundColor:"palette.light", color:"palette.dark"}}>Programmer</Tag>
                            <Tag borderRadius={"sm"} as="a" href="name-tag" backgroundColor="palette.dark" color="palette.light" _dark={{backgroundColor:"palette.light", color:"palette.dark"}}>Analyis</Tag>
                        </div>
                        <Heading 
                            fontSize="20px"
                            className="mb-3"
                            >Software Engineer & Spesialist Data Analyis
                        </Heading>
                        <Text as="a" color="palette.mint" href="job?city=value" className="font-bold text-md underline underline-offset-4">Kota Malang</Text>
                        <Text 
                            className="mt-3">
                                Our state-of-the-art technology and advanced filtering options enable you to find the perfect[...]
                        </Text>
                        <Text className="mt-3 italic">Posted 22Hours ago</Text>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}