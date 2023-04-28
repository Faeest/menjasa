import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import { Input, InputGroup, Stack, InputLeftElement, Select, Button } from "@chakra-ui/react"

export default function HomeHero () {
    return (
      <div className="bg-[url('/images/bg-hero.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8 text-center lg:text-left md:text-center sm:text-center">
          <h1 className="text-white lg:mt-6 sm:mt-0 lg:max-w-2xl font-bold text-xl lg:text-[40px] leading-relaxed md:text-[32px] sm:text-[32px]">Discover Your True Potential With TalentFinder - Your Ultimate Platform for Finding The Perfect Job Match</h1>
          <p className="text-white font-regular lg:text-left text-sm lg:max-w-xl mb-8 md:text-[16px]">Welcome to TalentFinder, where we believe that everyone has unique talents that deserve to be recognized and celebrated. We're not just a job search platform</p>
          <div className="bg-white p-7 shadow-md rounded-md grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1 mb-6">
            <Stack spacing={3}
            >
              <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<FontAwesomeIcon icon={solid.faMagnifyingGlass} style={{ color: "#acacac"}} />}
              />
              <Input 
                placeholder="Find by name here..."
              ></Input>
              </InputGroup>
            </Stack>

            <Select
              placeholder="Choose Spesialization"
              size="md"
            >
              <option>Test1</option>
              <option>Test2</option>
              <option>Test3</option>
            </Select>

            <Stack spacing={3}>
              <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<FontAwesomeIcon icon={solid.faCity} style={{ color: "#acacac"}} />}
              />
              <Input 
                placeholder="Find by city here..."
              ></Input>
              </InputGroup>
            </Stack>
          </div>
        </div>
       </div>

    );
}