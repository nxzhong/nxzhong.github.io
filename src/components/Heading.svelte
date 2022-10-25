<script lang='ts'>
    import { page } from "$app/stores";
      const links = [
    { name: 'Home', href: '/' },
    { name: 'CV', href: '/' },
    { name: 'Projects', href: '/' },
    { name: 'Writing', href: '/' },
  ];
</script>
<header class='bg-gray-200'>
    <nav 
    class='flex justify-center w-full' 
    data-sveltekit-prefetch 
    data-sveltekit-noscroll
    >
        {#each links as link (link)}
            <a
                href={link.href}
                class="nav-link mx-6 font-mono"
                class:active={$page.url.pathname === link.href}
            >
                {link.name}
            </a>
        {/each}
    </nav>
</header>
    


