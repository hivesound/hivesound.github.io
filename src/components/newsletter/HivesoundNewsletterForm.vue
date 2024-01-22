<template>
    <iframe class="cr_mail_responsive" :src="$t('components.newsletter.cleverreach.form_url')" width="100%" style="min-height: 300px; height: 50vh;" frameborder="0" scrolling="no">
    </iframe>
</template>

<style>

/* BREAKPOINTS ----- */
@media screen and (max-width: 767px) {
	.cr_mail_responsive { height: 70vh;}
}

@media screen and (max-width: 480px) {
	.cr_mail_responsive { height: 70vh; }
}
</style>