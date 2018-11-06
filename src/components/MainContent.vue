<template>
    <main>
        <section class="generator">
            <p>The idea is to Improve safety for men and woman going on out.
                By hanging a sheet with safety instructions in the form of drinknames people can 
                give information to the bartenders in the form of a shot name when things aren't going well
            </p>
            <p>I hope more companies would take on these safety regulations to improve customer care</p>
            <GeneratorForm />
        </section>
    </main>
</template>

<script>
import GeneratorForm from './GeneratorForm';

export default {
    name: 'MainContent',
    components: {
        GeneratorForm
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section.generator {
    width: 60vw;
    margin: 0 auto;
}
@media screen and (max-width: 60em){
    section.generator {
        width: 95vw;
    }
}
p {
    color: white;
    font-size: 1em;
    line-height: 1.5;
    text-align: center;
}
</style>
