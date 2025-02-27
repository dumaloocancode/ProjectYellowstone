## FILE BASED ROUTING

File-based routing is a feature where the file structure of your project automatically determines the routes of your application. For example:

    A file at pages/about.js would automatically create a route at /about.

    A file at pages/blog/[slug].js would automatically create dynamic routes like /blog/post-1, /blog/post-2, etc.

Frameworks like Next.js and Remix use file-based routing, but React Router DOM does not.

## _layout

what this does is, provide a layout that is required at all times in the application, for example, a nav and a footer

as soon as the file is declared, instead of rendering index.tsx, it renders _layout.tsx and then you can route inside of the file 

## SafeAreaView 

this is like the area that is reserved for the content to be displayed on

    ex: you don't want your content to be overlapping with the notification panel 

## <Slot />

the <Slot /> component acts as a placeholder for the content of the current route.

matlab, the code you've written in the route

similar to children props in react

## Tabs in Expo

pre-defined way to have tabs, can use directly

this provides a way of adding a layout only to some tabs by introducing (*contentName*) file and grouping all the routes together


## Creating a top bar as a separate component 

using top tabs navigator from react-navigation