<template>
    <h2>{{ $t("components.newsletter.project.title") }}</h2>
    <br>
    <div class="tabs">
		<div class="tabby-tab">
			<input type="radio" id="tab-1" name="tabby-tabs" checked>
			<label for="tab-1"><b>{{ $t("components.newsletter.project.tab1.title") }}</b></label>
			<div class="tabby-content">
        <tab1-component/>			
      </div>
		</div>

		<div class="tabby-tab">
			<input type="radio" id="tab-2" name="tabby-tabs">
			<label for="tab-2"><b>{{ $t("components.newsletter.project.tab2.title") }}</b></label>
			<div class="tabby-content">
        <tab2-component/>
      </div>
		</div>

		<div class="tabby-tab">
			<input type="radio" id="tab-3" name="tabby-tabs">
			<label for="tab-3"><b>{{ $t("components.newsletter.project.tab3.title") }}</b></label>
			<div class="tabby-content">
        <tab3-component/>
			</div>
		</div>
    </div>
</template>

<script>

import Tab1Component from './ProjectExplanationIntroText.vue';
import Tab2Component from './ProjectExplanationImage.vue';
import Tab3Component from './ProjectExplanationWhatIsNext.vue';

export default {
  components: { Tab1Component, Tab2Component, Tab3Component },
  data() {
    return {
      activeTab: 'Tab1',
      tabs: [
        { name: 'Tab1', component: 'Tab1Component' },
        { name: 'Tab2', component: 'Tab2Component' },
        { name: 'Tab3', component: 'Tab3Component' }
      ]
    };
  },
  computed: {
    activeTabComponent() {
      const tab = this.tabs.find(t => t.name === this.activeTab);
      return tab ? tab.component : null;
    }
  },  
};
</script>
<style>
.tabs {
	position: relative;
	display: flex;
	min-height: 300px;
	border-radius: 8px 8px 0 0;
	overflow: hidden;
}

.tabby-tab {
	flex: 1;
}

.tabby-tab label {
	display: block;
	box-sizing: border-box;
	/* tab content must clear this */
	height: 40px;
	
	padding: 10px;
	text-align: center;
	background: #00a597;
	cursor: pointer;
	transition: background 0.5s ease;
	
}

.tabby-tab label:hover {
	background: #FAA916;
}

.tabby-content {
	position: absolute;
	
	left: 0; bottom: 0; right: 0;
	/* clear the tab labels */
	top: 40px; 
	
	padding: 20px;
	border-radius: 0 0 8px 8px;
	background: #065143;
	
	transition: 
		opacity 0.8s ease,
		transform 0.8s ease		;
	
	/* show/hide */
		opacity: 0;
		transform: scale(0.1);
		transform-origin: top left;
	
}

.tabby-content img {
	float: left;
	margin-right: 20px;
	border-radius: 8px;
}


/* MAKE IT WORK ----- */

.tabby-tab [type=radio] { display: none; }
[type=radio]:checked ~ label {
	background: #065143;
	z-index: 2;
}

[type=radio]:checked ~ label ~ .tabby-content {
	z-index: 1;
	
	/* show/hide */
		opacity: 1;
		transform: scale(1);
}

/* BREAKPOINTS ----- */
@media screen and (max-width: 767px) {
	.tabs { min-height: 400px;}
	.tabby-tab label { 
        height: 100px; /* Adjust for smaller screens */
    }
	.tabby-content { top: 120px; }
}

@media screen and (max-width: 480px) {
	.tabs { min-height: 580px; }
	.tabby-tab label { 
		height: 100px;
	}
	.tabby-content { top: 100px; }
	.tabby-content img {
		float: none;
		margin-right: 0;
		margin-bottom: 20px;
	}
}
</style>