'use client';

import * as React from 'react';

import { GalleryVerticalEnd } from 'lucide-react';
import Link from 'next/link';

import { useActiveRoute } from '@/hooks/useActiveRoute';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';

const data = {
  navMain: [
    {
      title: 'About Me',
      url: '/about-me',
      items: [
        { title: 'Who am I', url: '/about-me' },
        { title: 'My Project Works', url: '/projects' },
      ],
    },
    {
      title: 'My Explorations',
      url: '/exploration',
      items: [
        { title: 'Rich text editor', url: '/exploration/rich-text-editor' },
        { title: 'Data Fetching', url: '/exploration/data-fetching' },
        { title: 'Rendering', url: '/exploration/rendering' },
        { title: 'Caching', url: '/exploration/caching' },
      ],
    },
    {
      title: 'Documentations',
      url: '/documentations',
      items: [
        {
          title: 'Next.js project deploy',
          url: '/documentations/next-js-deploy',
        },
        { title: 'File Conventions', url: '/documentations/file-conventions' },
      ],
    },
  ],
};

export const AppSidebar = () => {
  const { isActiveNav } = useActiveRoute();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/" passHref legacyBehavior>
              <SidebarMenuButton size="lg">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-200/80 to-secondary-200/80 text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Idea Hub</span>
                  <span className="">v0.0.1</span>
                </div>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <Link href={item.url} passHref legacyBehavior>
              <SidebarGroupLabel className="cursor-pointer">
                {item.title}
              </SidebarGroupLabel>
            </Link>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => (
                  <SidebarMenuItem key={subItem.title}>
                    <Link href={subItem.url} passHref legacyBehavior>
                      <SidebarMenuButton
                        asChild
                        isActive={isActiveNav(subItem.url)}
                        className="from-secondary-200/80 to-primary-200/80 data-[active=true]:border data-[active=true]:border-secondary-200/30 data-[active=true]:bg-gradient-to-bl data-[active=true]:text-white"
                      >
                        <a>{subItem.title}</a>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
