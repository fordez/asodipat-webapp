<script>
	import Actioncluster from "../../components/actioncluster.svelte";
	import Actiondonation from "../../components/actiondonation.svelte";
	import Actionevent from "../../components/actionevent.svelte";
	import Actionsocial from "../../components/actionsocial.svelte";
	import Actiontools from "../../components/actiontools.svelte";
	import Actionvolunteer from "../../components/actionvolunteer.svelte";
	import Review from "../../components/review.svelte";

</script>


<div class="grid grid-cols-1 sm:grid-cols-3 py-4">
	<div><Actionsocial/></div>
	<div><Actioncluster/></div>
    <div><Actionevent/></div>
	<div><Actionvolunteer/></div>
	<div><Actiontools/></div>
	<div><Actiondonation/></div>
  </div>

<div>
	<Review/>
</div>
  


