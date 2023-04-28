import { Image } from "@chakra-ui/react"

export default function Footer() {
    return( 
        <footer className="footer bg-footer ">
            <div className="container mx-auto max-w-7xl px-8 sm:px-8 lg:px-8 py-[40px]">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 sm:gap-5 lg:gap-40 lg:mb-16 mb-8 sm:mb-8">
                    <div>
                        <Image w="230px" mb="15px" src="/images/logo-white.png"></Image>
                        <p className="text-white font-[300] sm:text-sm lg:text-base text-sm">Welcome to TalentFinder, where we believe that everyone has unique talents that deserve to be recognized and celebrated.</p>
                    </div>
                    <div>
                        <h1 className="font-medium text-white lg:text-xl mb-[15px] sm:text-md">Product</h1>
                        <div className="flex flex-col text-white text-sm lg:text-base sm:text-sm"> 
                            <a className="mb-1 hover:text-slate-400" href="">Part Time Job</a>
                            <a className="mb-1 hover:text-slate-400" href="">Full Time Job</a>
                            <a className="hover:text-slate-400" href="">Remote Job</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-medium text-white lg:text-xl mb-[15px] sm:text-md">Company</h1>
                        <div className="flex flex-col text-white text-sm lg:text-base sm:text-sm"> 
                            <a className="mb-1 hover:text-slate-400" href="">About Us</a>
                            <a className="mb-1 hover:text-slate-400" href="">Location</a>
                            <a className="hover:text-slate-400" href="">Recruiting Staff</a>
                        </div>
                    </div>
                </div>   
                <div className="border-t-2 flex justify-between text-xs lg:text-sm sm:text-xs">
                    <div className="flex mt-2 text-white">
                        <a className="font-[300]" href="terms-and-condition">Terms And Condition</a>
                        <span aria-disabled className="px-2">|</span>
                        <a className="font-[300]" href="privacy-police"> Privacy Police</a>
                    </div>
                    <div>
                        <p className="text-white font-[300] mt-2">Copyright HarmonyHires.com 2023</p>
                    </div>
                </div>
            </div>
            
        </footer>
    );
}