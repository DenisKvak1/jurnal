<script setup lang="ts">

import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { CircleUser, Package } from 'lucide-vue-next';
</script>

<template>
  <header class="fixed bottom-0 left-0 right-0 md:sticky md:top-0 flex h-16 items-center gap-4 border-t md:border-b align-center bg-background px-4 md:px-6">
    <nav class="flex w-full items-center justify-center gap-6 text-lg font-medium">
      <NavigationMenu>
        <Package class="mr-5 hidden md:flex" />
        <NavigationMenuList class="flex gap-5 my-5 md:my-0">
          <NavigationMenuItem class="flex flex-col items-center justify-center h-full">
            <Package class="md:hidden" />
            <NavigationMenuLink>Главная</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem class="flex flex-col items-center justify-center h-full">
            <CircleUser class="md:hidden" />
            <NavigationMenuLink>Профиль</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div class="ml-auto relative hidden md:flex">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <CircleUser />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>