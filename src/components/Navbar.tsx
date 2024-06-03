import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Separator } from './ui/separator'
import { FaCircle } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { BiGitCompare } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'
import { CiShoppingCart } from 'react-icons/ci'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { TbCategoryFilled } from 'react-icons/tb'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { BiSolidOffer } from 'react-icons/bi'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import React from 'react'
import { cn } from '@/lib/utils'
import { FaFireFlameCurved } from 'react-icons/fa6'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { FaChevronDown } from 'react-icons/fa'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

const Navbar = () => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('en')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [location, setLocation] = useState('default')
  const [isLocDropdownOpen, setIsLocDropdownOpen] = useState(false)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleOptionClick = (lng: string) => {
    changeLanguage(lng)
    setIsDropdownOpen(false)
  }

  const handleLocationClick = (loc: string) => {
    setLocation(loc)
    setIsLocDropdownOpen(false)
  }

  return (
    <div className='h-auto w-full px-12'>
      {/*  */}
      <div className='flex h-8 w-full items-center justify-between border-b border-stone-200 text-stone-400'>
        <div className='flex items-center text-xs font-normal'>
          {[
            { title: 'About Us' },
            { title: 'My Account' },
            { title: 'Wishlist' },
            { title: 'Order Tracking' },
          ].map((item, index) => {
            return (
              <div
                className='flex h-5 items-center justify-center space-x-2'
                key={index}
              >
                <div className='ml-2'>{item.title}</div>
                {item.title !== 'Order Tracking' && (
                  <Separator orientation='vertical' />
                )}
              </div>
            )
          })}
        </div>
        <div className='text-xs font-semibold text-stone-500'>
          40% discount on hdfc credit cards
        </div>
        <div className='flex items-center'>
          <div className='flex items-center text-xs'>
            Need help? Call Us &nbsp;
            <FaCircle size={6} />
            &nbsp;
            <span className='font-semibold text-primary'>1800 900</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className='relative'>
            <div
              onClick={toggleDropdown}
              className='cursor-pointer rounded-md bg-stone-100 p-1 text-xs font-semibold text-stone-400'
            >
              {language === 'en'
                ? 'English'
                : language === 'hi'
                  ? 'हिंदी'
                  : 'বাংলা'}
            </div>
            {isDropdownOpen && (
              <div className='absolute -left-1/2 z-10 mt-1 w-20 rounded-md bg-white shadow-lg'>
                <div
                  onClick={() => handleOptionClick('en')}
                  className='flex cursor-pointer items-center justify-center px-4 py-2 text-xs hover:bg-gray-200'
                >
                  English
                </div>
                <div
                  onClick={() => handleOptionClick('hi')}
                  className='flex cursor-pointer items-center justify-center px-4 py-2 text-xs hover:bg-gray-200'
                >
                  हिंदी
                </div>
                <div
                  onClick={() => handleOptionClick('bn')}
                  className='flex cursor-pointer items-center justify-center px-4 py-2 text-xs hover:bg-gray-200'
                >
                  বাংলা
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*  */}
      <div className='flex h-24 w-full items-center justify-between border-b border-stone-200'>
        <img src='/nnm_icon.png' alt='logo' className='ml-6 h-20 w-auto' />

        <div className='flex w-5/6 items-center'>
          <div className='flex h-12 w-[40rem] items-center rounded-md border border-stone-200'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='flex items-center'>
                  <span>All Categories</span>
                  <FaChevronDown size={12} className='ml-2' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Keyboard shortcuts
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Separator orientation='vertical' className='mx-4 h-5' />
            <input type='text' className='mr-2 border-none' />
          </div>

          <div className='relative mx-20 flex h-8 w-40 items-center justify-center rounded-md border border-stone-200'>
            <div
              onClick={() => setIsLocDropdownOpen(!isLocDropdownOpen)}
              className='flex cursor-pointer items-center bg-transparent text-sm'
            >
              <IoLocationOutline className='mr-1' />
              {location === 'default' ? 'Your Location' : location}
            </div>
            {isLocDropdownOpen && (
              <div className='absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg'>
                <div
                  onClick={() => handleLocationClick('default')}
                  className='flex cursor-pointer items-center p-2 hover:bg-gray-200'
                >
                  <IoLocationOutline className='mr-1' />
                  Your Location
                </div>
                <div
                  onClick={() => handleLocationClick('new_location')}
                  className='cursor-pointer p-2 hover:bg-gray-200'
                >
                  New Location
                </div>
              </div>
            )}
          </div>

          <div className='mx-3 flex items-center gap-1'>
            <BiGitCompare size={20} />
            <span>Compare</span>
          </div>

          <div className='mx-3 flex items-center gap-1'>
            <FaRegHeart size={20} />
            <span>Wishlist</span>
          </div>

          <div className='mx-3 flex items-center gap-1'>
            <CiShoppingCart size={20} />
            <span>Cart</span>
          </div>

          <div className='mx-3 flex items-center gap-1'>
            <RiAccountPinCircleLine size={20} />
            <span>Account</span>
          </div>
        </div>
      </div>

      {/*  */}
      <div className=' flex h-16 w-full items-center justify-between border-b border-stone-200'>
        <div className='flex items-center gap-7'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='default'>
                <TbCategoryFilled size={20} className='mr-2' />
                <span>Browse All Categories</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className='flex items-center gap-1'>
            <BiSolidOffer className='text-primary' />
            <span className='text-sm font-semibold'>Deals</span>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              {/*  */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <FaFireFlameCurved className='mr-2 text-primary' /> Featured
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[55vw] gap-3 p-4 lg:grid-cols-[.75fr_1fr]'>
                    <li className='row-span-3'>
                      <NavigationMenuLink asChild>
                        <a
                          className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                          href='/'
                        >
                          <div className='mb-2 mt-4 text-lg font-medium'>
                            shadcn/ui
                          </div>
                          <p className='text-sm leading-tight text-muted-foreground'>
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href='/docs' title='Introduction'>
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href='/docs/installation' title='Installation'>
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href='/docs/primitives/typography'
                      title='Typography'
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/*  */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[55vw] gap-3 p-4 lg:grid-cols-[.75fr_1fr]'>
                    <li className='row-span-3'>
                      <NavigationMenuLink asChild>
                        <a
                          className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                          href='/'
                        >
                          <div className='mb-2 mt-4 text-lg font-medium'>
                            shadcn/ui
                          </div>
                          <p className='text-sm leading-tight text-muted-foreground'>
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href='/docs' title='Introduction'>
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href='/docs/installation' title='Installation'>
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href='/docs/primitives/typography'
                      title='Typography'
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/*  */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='z-30 grid h-fit w-[55vw] gap-3 p-4 md:grid-cols-2'>
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/*  */}
              <NavigationMenuItem className='cursor-pointer'>
                {/* <link href='/docs'> */}
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
                {/* </link> */}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='flex items-center gap-3'>
          <TfiHeadphoneAlt size={40} />
          <div className='flex flex-col items-center justify-center'>
            <div className='text-2xl font-bold text-primary'>1800 - 900</div>
            <div className='-mt-2 text-[10px] text-stone-500'>
              24/7 customer support
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default Navbar
