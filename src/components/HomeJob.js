import { Button, Image, Tag } from "@chakra-ui/react"

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
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                        <div className="bg-white max-w-sm rounded-md overflow-hidden shadow-lg px-8 py-6">
                            <Image className="w-[100px] mb-3" src="/images/c-logo.png" alt="logo-company-hires"></Image>
                            <div className="flex gap-1 mb-2">
                                <Tag backgroundColor="palette.dark" color="#ffff">Programmer</Tag>
                                <Tag backgroundColor="palette.dark" color="white">Analyis</Tag>
                            </div>
                            <div className="font-bold text-xl mb-2">Software Engineer & Spesialist Data Analyis </div>
                            <p className="text-gray-700 text-base">
                            Requirment : <br />

                            Our state-of-the-art technology and advanced filtering options enable you to find the perfect[...]
                            </p>
                            <Button 
                              color="palette.white"
                              className="mt-2"
                              colorScheme="tiffany"
                              fontWeight="500"
                            >Go Apply</Button>
                        </div>                    
                        <div className="bg-white max-w-sm rounded-md overflow-hidden shadow-lg px-8 py-6">
                            <Image className="w-[100px] mb-3" src="/images/c-logo.png" alt="logo-company-hires"></Image>
                            <div className="flex gap-1 mb-2">
                                <Tag backgroundColor="palette.dark" color="#ffff">Programmer</Tag>
                                <Tag backgroundColor="palette.dark" color="white">Analyis</Tag>
                            </div>
                            <div className="font-bold text-xl mb-2">Software Engineer & Spesialist Data Analyis </div>
                            <p className="text-gray-700 text-base">
                            Requirment : <br />

                            Our state-of-the-art technology and advanced filtering options enable you to find the perfect[...]
                            </p>
                            <Button 
                              className="mt-2"
                              colorScheme="tiffany"
                              color="palette.white"
                              fontWeight="500"
                            >Go Apply</Button>
                        </div>                    
                        <div className="bg-white max-w-sm rounded-md overflow-hidden shadow-lg px-8 py-6">
                            <Image className="w-[100px] mb-3" src="/images/c-logo.png" alt="logo-company-hires"></Image>
                            <div className="flex gap-1 mb-2">
                                <Tag backgroundColor="palette.dark" color="#ffff">Programmer</Tag>
                                <Tag backgroundColor="palette.dark" color="white">Analyis</Tag>
                            </div>
                            <div className="font-bold text-xl mb-2">Software Engineer & Spesialist Data Analyis </div>
                            <p className="text-gray-700 text-base">
                            Requirment : <br />

                            Our state-of-the-art technology and advanced filtering options enable you to find the perfect[...]
                            </p>
                            <Button 
                              className="mt-2"
                              colorScheme="tiffany"
                              color="palette.white"
                              fontWeight="500"
                            >Go Apply</Button>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    );
}