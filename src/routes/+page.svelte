<script>
   
    let {data} = $props();
    import { resolve } from '$app/paths';

    let background = 'https://res.cloudinary.com/dn7fyvhtq/image/upload/w_256,h_256,c_fill,f_webp,q_auto/v1772711241/background_jj0xtv.jpg';

</script>


<svelte:head>
    <title>Paul's Webshop - Electronics for all!</title>
    <meta name="description" content="We sell used electronics for a super cheap price!">
    <meta property="og:title" content="Paul's Webshop - Electronics for all!">
    <meta property="og:image" content="{background}">
</svelte:head>


<header class="h-[500px] bg-center bg-cover flex items-center justify-center" 
   style="background-image:url({background})">
    <h1 class="text-5xl">Electronic Devices</h1>
</header>

<main class="min-h-[300px] p-16">

    <h2 class="text-4xl mb-8">Our Products</h2>

    <ul class="flex flex-col gap-8">
        {#each data.products as product (product.id)}
            <li class="border p-4 rounded-lg hover:bg-gray-100 transition">
                 <a href={resolve(`/products/${product.id}`)} class=" flex items-center gap-4">
                 <img src="{product.image_url}" alt="{product.name}" class="w-32 h-32 object-cover rounded" />
                 <div>
                <h3 class="font-bold">{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${Math.round(product.price)}</p>
                 </div>
           
                </a>
            </li>
        {/each}
    </ul>

</main>

<footer class="h-[300px] bg-blue-950 text-white flex items-center justify-center">
    <p>Test-Page for SEO</p>
</footer>