<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleUser, Menu, Package2, Search } from 'lucide-vue-next';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import LocalSelect from '@/components/LocalSelect.vue';
import DarkModeChange from '@/components/darkModeChange.vue';
</script>

<template>
  <header
    class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
  >
    <nav
      class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
    >
      <a
        href="#"
        class="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 class="h-6 w-6" />
        <span class="sr-only">Acme Inc</span>
      </a>
      <a
        href="#"
        class="text-foreground transition-colors hover:text-foreground"
      >
        Dashboard
      </a>
      <a
        href="#"
        class="text-muted-foreground transition-colors hover:text-foreground"
      >
        Orders
      </a>
      <a
        href="#"
        class="text-muted-foreground transition-colors hover:text-foreground"
      >
        Products
      </a>
      <a
        href="#"
        class="text-muted-foreground transition-colors hover:text-foreground"
      >
        Customers
      </a>
      <a
        href="#"
        class="text-muted-foreground transition-colors hover:text-foreground"
      >
        Analytics
      </a>
    </nav>
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="#" class="flex items-center gap-2 text-lg font-semibold">
            <Package2 class="h-6 w-6" />
            <span class="sr-only">Acme Inc</span>
          </a>
          <a href="#" class="hover:text-foreground"> Dashboard </a>
          <a href="#" class="text-muted-foreground hover:text-foreground">
            Orders
          </a>
          <a href="#" class="text-muted-foreground hover:text-foreground">
            Products
          </a>
          <a href="#" class="text-muted-foreground hover:text-foreground">
            Customers
          </a>
          <a href="#" class="text-muted-foreground hover:text-foreground">
            Analytics
          </a>
        </nav>
      </SheetContent>
    </Sheet>
    <div class="w-full flex gap-3 items-center">
      <div class="grid gap-6 text-base font-medium md:hidden">
        <a href="#" class="hover:text-foreground">
          <Package2 class="h-6 w-6" />
        </a>
      </div>
      <LocalSelect class="ml-auto"></LocalSelect>
      <dark-mode-change></dark-mode-change>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="secondary" size="icon" class="rounded-full">
            <CircleUser class="h-5 w-5" />
            <span class="sr-only">Toggle user menu</span>
          </Button>
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
  </header>
</template>

<style scoped></style>
