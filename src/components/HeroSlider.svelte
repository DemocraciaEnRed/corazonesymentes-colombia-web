<script>
  	import Home from './Home.svelte'
	import Carousel from '@beyonk/svelte-carousel';
  	import SosDocenteHero from './SosDocenteHero.svelte';
  	import Banner from './Banner.svelte'
 	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
	import PedagogiaDigital  from './pedagogia/PedagogiaDigital.svelte';
	import Rol from './pedagogia/Rol.svelte';
	import Ayuda from './pedagogia/Ayuda.svelte'
	import Comofunciona  from './pedagogia/Comofunciona.svelte'
	import Sesgos from './pedagogia/Sesgos.svelte'
	import Vulnerable from './pedagogia/Vulnerable.svelte'
	import HacerAlgo	from './pedagogia/HacerAlgo.svelte'
	import Modal from 'svelte-simple-modal';
    import { modal } from './stores.js';
	import { fade } from 'svelte/transition';
</script>

<div id="calecita">
	<Carousel  perPage={{ 800: 1, 500: 1 }} duration={500} >
		<span class="control arrow" slot="left-control">
			<ChevronLeftIcon />
		  </span>
		<div class="slide-content " >
			<PedagogiaDigital ></PedagogiaDigital>
		</div>
		<div class="slide-content">
			<Rol></Rol>
		</div>
		 <div class="slide-content">
			<HacerAlgo></HacerAlgo>
		</div>
		<div class="slide-content">
			<Comofunciona></Comofunciona>
		</div>
		<div class="slide-content">
			<Sesgos></Sesgos>
		</div>
		<div class="slide-content">
			<Vulnerable></Vulnerable>
		</div>
		<div class="slide-content">
			<Ayuda></Ayuda>
		</div>
		
		<span class="control arrow" slot="right-control">
			<ChevronRightIcon />
		  </span>
	</Carousel>
</div>
<Modal 
	show={$modal}
	styleContent={{
		borderRadius: 'none',
		width: '100%',

	}}
	styleWindow={{
		backgroundColor: '#aedcea',
		borderRadius: 'none',
		width: '80%',
		opacity:'85%'
	}}
	styleCloseButton={{
		background: '#9678FF',
		boxShadow: 'none',
	}}
>
</Modal>
<style>
	.arrow{
		color: #8AE5EE !important;
	}
	.slide-content {
    
		width: 100%;
		height: 100%;
	}


</style>

