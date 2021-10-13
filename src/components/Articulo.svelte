<script>
  import Document from './DocumentDownload.svelte';
  import documents from '../components/documents';
</script>
<div class="p-10 tech-back px-2 sm:px-10 celeste-bg" style="background-color:rgba(150, 120, 255, 0.3);" id="libro">
	<article class="container mx-auto">

		<div class="grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 gap-3 mb-10">
            <div class=" p-3 flex items-center justify-center flex-col">                
                <div class="flex">
					<h1 class="uppercase leading-snug">
						<span class="text-white">
							<span class="bg-gris ">CONOCE TU MENTE FUERA Y DENTRO DE INTERNET</span>  <span class="text-black"> </span></span>
					</h1>					
				</div>
				       
            </div>
            <div class=" md:col-span-2">
				<h4 class="mt-5 font-sans">
				Escribimos un libro para que podamos <br>
				contribuir a una nueva convivencia digital positiva y empática. 	
				</h4>
				<div class="flex justify-center sm:justify-between items-center flex-wrap mt-5">
					<h3 class= "fushia-text uppercase">
					¿Querés el libro completo? 	
					</h3>
			
				</div>
				<div class="pt-10">
					<a href="/documents/Corazones-y-mentes.pdf" download
					class="" ><span class="fushia-bg py-2 px-5 text-white border hover:border-gray-800 border-solid">Descargá el libro</span>
					</a>
				</div>
			</div>
            
        </div>

		
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
			{#each documents as item, index}
				<Document title={item.title} url={item.url} chapter={index+1}/>
			{/each}
		</div>
	</article>
</div>
