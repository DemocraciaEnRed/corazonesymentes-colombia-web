

<script>
  import axios from 'axios';
  import Kit from './Kit.svelte';
  let kits = [];
  
  // CHANGE ME FOR DEV, CHANGE ME FOR BUILD
  let googleSheetApiToken = 'AIzaSyBeEb_XfsTcAEh8SGVTnIODCJoEa1Pj56Q'

  const url = `https://sheets.googleapis.com/v4/spreadsheets/16PA0-OgQxl7a47LhSAnDfSXE6s2jqTGR6LDWBxlWhSM/values/colombia?key=${googleSheetApiToken}`;
  let newKits=[];
  axios.get(url).then((res)=>{
    kits = formatSpreadsheet(res.data.values);
    newKits=kits;
    // console.log('kit>', kits);

  });

  const formatSpreadsheet = (data) =>{
    let theData = data.slice(1)
    const input = theData.map((obj=>{
        return {
          title: obj[0],
          description: obj[2],
          url: obj[3],
          type: obj[5],
        }
      })) 
    return input;
  }

  function changeFilter(newFilter) {
    if (newFilter == 'ALL'){
      newKits= kits;

    }else{
      newKits= newKits.filter(kit=>{return kit.type==newFilter})

      
    }
  }

</script>

<style>
  #kit-de-herramientas{
    background-position: center;
    background-size: 90%;
    background-repeat: no-repeat;
  }
</style>

<div class="md:p-10 pt-0 sm:pt-20 bg-white " id="kit-de-herramientas">
  
  <article class="container mx-auto ">

    <div class="grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 p-3 gap-8 mb-10 bg-white pb-10 sm:pb-0">

      <div class="pt-10 sm:px-3 py-6 lg:p-8 flex ">
          <!-- <img class="mr-4 my-auto w-12 sm:w-14" src="herramientas.png" alt="Logo de herramientas"> -->
          <h1 class="w-60 upercase text-black text-left leading-snug	"><span class="celeste-bg">Kit de herramientas</span></h1>        
      </div> 
      <div class="text-black flex flex-col justify-center text-left">
        <p class="font-sans font-medium pb-3">Queremos que tengas este compilado con un poco de todo para habitar internet de forma segura, responsable y empática.</p>
        <h4 class="uppercase fushia-text pb-3">ENCONTRÁ ArtÍculos, podcast, reflexiones, videos y más.</h4>
      </div>           
      
    </div>

    <div class="flex justify-evenly flex-wrap">

      <button  class="ml-5 mb-5 px-5  border-2 border-black" on:click={()=>changeFilter("ARTÍCULO")}>
        <h4 >Artículo</h4>
      </button>
      <button  class="ml-5 mb-5 px-5  border-2 border-black" on:click={()=>changeFilter("PLATAFORMA")}>
        <h4 >Plataforma</h4>
      </button>
      <button  class="ml-5 mb-5 px-5  border-2 border-black" on:click={()=>changeFilter("VIDEO")}>
        <h4 >Video</h4>
      </button>
      <button  class="ml-5 mb-5 px-5  border-2 border-black" on:click={()=>changeFilter("GUÍA")}>
        <h4 >Guía</h4>
      </button>
      <button  class="ml-5 mb-5 px-5  border-2 border-black" on:click={()=>changeFilter("JUEGO")}>
        <h4 >Juegos</h4>
      </button>
      <button  class="ml-5 mb-5 px-5  border-2 border-black" on:click={()=>changeFilter("ALL")}>
        <h4 >Todas</h4>
      </button>
    </div>
   
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">

        {#each newKits as item}
          <Kit {...item}  />
        {/each}
      
    </div>
  </article>
  
  
</div>