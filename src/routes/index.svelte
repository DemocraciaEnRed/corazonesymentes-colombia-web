<script>
	//COMPONENTS
	import TodaLaData from '../components/Todaladata.svelte'
	import Articulo from '../components/Articulo.svelte'
	import ForoDocente from '../components/ForoDocente.svelte'
	import KitHerramientas from '../components/KitHerramientas.svelte'
	import QuienesSomos from '../components/QuienesSomos.svelte'
	import Footer from '../components/Footer.svelte';
	import HeroSlider from '../components/HeroSlider.svelte';
	import { onMount } from 'svelte';
	import SosDocente from '../components/SosDocente.svelte';
import Home from '../components/Home.svelte';
import Nocomocuento from '../components/nocomocuento.svelte';
	onMount(()=>{
			//  Global site tag (gtag.js) - Google Analytics 
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-215403556-1');
		console.log('luego de analitycs')
	})



</script>
<svelte:head>
	<title>Corazones Y Mentes</title>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet">
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-215403556-1"></script>
</svelte:head>

<!-- <GoogleAnalytics properties={[ 'UA-215403556-1']} /> -->

<!-- <HeroSlider/> -->
<Home></Home>
<HeroSlider/>
<Nocomocuento></Nocomocuento>
<!-- <TodaLaData/> -->
<Articulo/>
<KitHerramientas/>
<!-- <SosDocente/> -->
<QuienesSomos/>
<Footer/>