<script>
  	import Home from './Home.svelte'
	import Carousel from '@beyonk/svelte-carousel';
  	import SosDocenteHero from './SosDocenteHero.svelte';
  	import Banner from './Banner.svelte'
 	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
import PedagogiaDigital from './PedagogiaDigital.svelte';
</script>

<Carousel  perPage={{ 800: 1, 500: 1 }} duration={500} >
	<span class="control arrow" slot="left-control">
		<ChevronLeftIcon />
	  </span>
	<div class="slide-content">
		<PedagogiaDigital></PedagogiaDigital>
	</div>
	<div class="slide-content">
		<PedagogiaDigital></PedagogiaDigital>
	</div>
	<div class="slide-content">
		<PedagogiaDigital></PedagogiaDigital>
	</div>
	<div class="slide-content">
		<PedagogiaDigital></PedagogiaDigital>
	</div>
	<div class="slide-content">
		<PedagogiaDigital></PedagogiaDigital>
	</div>
	<div class="slide-content">
		<PedagogiaDigital></PedagogiaDigital>
	</div>
	<div class="slide-content">
		<PedagogiaDigital></PedagogiaDigital>
	</div>
	
	<span class="control arrow" slot="right-control">
		<ChevronRightIcon />
	  </span>
</Carousel>

<style>
	.arrow{
		color: #8AE5EE !important;
	}
	.slide-content {
    
		width: 100%;
	}


</style>

