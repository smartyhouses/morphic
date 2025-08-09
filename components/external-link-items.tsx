'use client'

import { SiDiscord, SiGithub, SiX } from 'react-icons/si'
import Link from 'next/link'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

const externalLinks = [
  {
    name: 'XXX',
    href: 'https://search.portalos.ru',
    icon: <SiX className="mr-2 h-4 w-4" />
  },
  {
    name: 'Agents',
    href: 'https://ag.portalos.ru',
    icon: <SiDiscord className="mr-2 h-4 w-4" />
  },
  {
    name: 'We',
    href: 'https://portalos.ru',
    icon: <SiGithub className="mr-2 h-4 w-4" />
  }
]

export function ExternalLinkItems() {
  return (
    <>
      {externalLinks.map(link => (
        <DropdownMenuItem key={link.name} asChild>
          <Link href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
            <span>{link.name}</span>
          </Link>
        </DropdownMenuItem>
      ))}
    </>
  )
}
