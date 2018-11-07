<template>
    <main>
        <section class="generator">
            <!-- <safety /> -->
            <!-- <img src="../assets/safety.png" /> -->
            <p>The idea is to Improve safety for men and woman going out.
                By hanging up a sheet with safety instructions in for example the bathroom, people can 
                give information to the bartenders in the form of a safeword (shot name) when things aren't going well
            </p>
            <p>I hope more companies would take on these safety precautions to improve customer safety.</p>
            <GeneratorForm />
        </section>
    </main>
</template>

<script>
import GeneratorForm from './GeneratorForm';
// import safety from '../assets/safety'
export default {
    name: 'MainContent',
    components: {
        GeneratorForm,
        // safety
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
