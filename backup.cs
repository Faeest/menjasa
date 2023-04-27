<Menu>
    <MenuButton _hover={{color:"palette.mint"}} fontWeight="500" fontSize="1.1rem">FAQ</MenuButton>
    <MenuList _dark={{ bg: "palette.dark"}} bg={"palette.white"} ml="-250px" p="0" px="20px" py="20px"
        alignItems="center" mt="20px">
        <MenuItem _dark={{ bg: "palette.dark"}} _hover={{bg:"#edf2f7"}} bg={"palette.white"} bordRadius={"100px"} as='a'
            href='/faq/talent-finder' display="block">
        <Text mb="5px" fontWeight="500">Ketahui Apa Itu Talent Finder</Text>
        <Text fontSize="14px" fontWeight="300" color="grey">Dengan talent finder anda bisa mencari seorang pekerja
            sesuai dengan yang anda inginkan,<br /> kami menyediakan beberapa fitur yang menarik yang disajikan secara
            simple dan modern</Text>
        </MenuItem>
        <MenuItem _dark={{ bg: "palette.dark"}} _hover={{bg:"#edf2f7"}} display="block" as='a' bg={"palette.white"}
            href='/faq/job'>
        <Text mb="5px" fontWeight="500">Kami Memudahkan Anda Untuk Mencari Pekerjaan</Text>
        <Text fontSize="14px" fontWeight="300" color="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            facere totam, natus in mollitia <br /> quasi qui incidunt repellat reprehenderit sit doloribus
            delectus.</Text>
        </MenuItem>
    </MenuList>
</Menu>

<ButtonGroup>
    <Tooltip hasArrow placement="top" label="Theme" bg="palette.dark" color="palette.light">
        <Box overflow={"hidden"}>
            <ModeToggler borderRadius={"2sm"} />
        </Box>
    </Tooltip>
    <Tooltip hasArrow placement="top" label="Log Out" bg="palette.dark" color="palette.light">
        <IconButton borderRadius={"2sm"} colorScheme="mint" onClick={async ()=> {
            await supabase.auth.signOut();
            redir("/auth/login");
            }}
            variant="outline"
            icon={
            <FontAwesomeIcon icon={solid.faRightFromBracket} />}
            />
    </Tooltip>
</ButtonGroup>

<Menu.Button
    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    <span className="sr-only">Open user menu</span>
    <img className="w-6 md:w-7 aspect-square rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="" />
</Menu.Button>
</div>
<m as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
    <Menu.Items
        className="absolute lg:right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white md:right-0 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
            {({ active }) => (
            <a href="#" className={classNames(active ? 'bg-gray-100' : '' , 'block px-4 py-2 text-sm text-gray-700' )}>
                Your Profile
            </a>
            )}
        </Menu.Item>
        <Menu.Item>
            {({ active }) => (
            <a href="#" className={classNames(active ? 'bg-gray-100' : '' , 'block px-4 py-2 text-sm text-gray-700' )}>
                Settings
            </a>
            )}
        </Menu.Item>
        <Menu.Item>
            {({ active }) => (
            <a href="#" className={classNames(active ? 'bg-gray-100' : '' , 'block px-4 py-2 text-sm text-gray-700' )}>
                Sign out
            </a>
            )}
        </Menu.Item>
    </Menu.Items>
    </m(Transition)