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
	})



</script>
	<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Corazones y Mentes - Colombia</title>
	<meta name="title" content="Corazones y Mentes - Colombia">
	<meta name="description" content="EL INTERNET ES ÚTIL PARA TODOS, PERO QUEREMOS QUE APRENDAS A USARLO PARA QUE SAQUES LO MEJOR DE ÉL Y NO LO PEOR DE TI.">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://corazonesymentes.co/">
	<meta property="og:title" content="Corazones y Mentes - Colombia">
	<meta property="og:description" content="EL INTERNET ES ÚTIL PARA TODOS, PERO QUEREMOS QUE APRENDAS A USARLO PARA QUE SAQUES LO MEJOR DE ÉL Y NO LO PEOR DE TI.">
	<meta property="og:image" content="logo-horizontal-peque.png">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://corazonesymentes.co/">
	<meta property="twitter:title" content="Corazones y Mentes - Colombia">
	<meta property="twitter:description" content="EL INTERNET ES ÚTIL PARA TODOS, PERO QUEREMOS QUE APRENDAS A USARLO PARA QUE SAQUES LO MEJOR DE ÉL Y NO LO PEOR DE TI.">
	<meta property="twitter:image" content="logo-horizonta-twetterl.png">	<link rel="preconnect" href="https://fonts.gstatic.com">
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